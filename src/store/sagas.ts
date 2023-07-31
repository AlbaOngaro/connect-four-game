import { END, EventChannel, Task, eventChannel } from "redux-saga";
import {
  all,
  call,
  cancel,
  cancelled,
  delay,
  fork,
  put,
  race,
  select,
  take,
  takeEvery,
} from "redux-saga/effects";
import { TURN_DURATION } from "store/reducer";
import { State } from "store/types";
import { Mode, Player } from "types";
import { addRandomPieceToGrid } from "utils/addRandomPieceToGrid";
import { hasFourInARow } from "utils/hasFourInARow";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const timer = (secs: number): EventChannel<number> =>
  eventChannel((emitter) => {
    const iv = setInterval(() => {
      secs -= 1;
      if (secs > 0) {
        return emitter(secs);
      }

      return emitter(END);
    }, 1000);

    return () => {
      clearInterval(iv);
    };
  });

export function* timerSaga(time: number) {
  const chan: EventChannel<number> = yield call(timer, time);
  try {
    while (true) {
      const seconds: number = yield take(chan);
      yield put({
        type: "SET_SECONDS",
        payload: {
          seconds,
        },
      });
    }
  } finally {
    const isCancelled: boolean = yield cancelled();

    if (!isCancelled) {
      const { grid, currentPlayer } = yield select(
        ({ grid, currentPlayer }: State) => ({
          grid,
          currentPlayer,
        }),
      );

      yield put({
        type: "SET_GRID",
        payload: {
          grid: addRandomPieceToGrid(grid, currentPlayer),
        },
      });
    }

    chan.close();
  }
}

export function* startTimerSage() {
  const seconds: State["seconds"] = yield select(
    (state: State) => state.seconds,
  );
  const bgTask: Task = yield fork(timerSaga, seconds);

  yield race([
    take("TOGGLE_PAUSED"),
    take("TOGGLE_CURRENT_PLAYER"),
    take("SET_WINNER"),
    take("RESET"),
    take("RESTART"),
  ]);

  yield cancel(bgTask);
}

function* togglePausedSaga() {
  const paused: boolean = yield select((state: State) => state.paused);
  if (!paused) {
    yield call(startTimerSage);
  }
}

function* setGridSaga() {
  const grid: State["grid"] = yield select((state: State) => state.grid);

  const action = hasFourInARow(grid)
    ? {
        type: "SET_WINNER",
      }
    : {
        type: "TOGGLE_CURRENT_PLAYER",
      };

  yield put(action);
}

function* toggleCurrentPlayerSaga() {
  yield put({
    type: "SET_SECONDS",
    payload: {
      seconds: TURN_DURATION,
    },
  });

  yield fork(startTimerSage);

  const { currentPlayer, mode, grid } = yield select(
    ({ currentPlayer, mode, grid }: State) => ({
      currentPlayer,
      mode,
      grid,
    }),
  );

  if (mode === Mode.PvC && currentPlayer === Player.P2) {
    // this prevents race condition in timerSaga if cpu takes too long to act
    yield delay(getRandomInt(1, TURN_DURATION / 2) * 1000);
    yield put({
      type: "SET_GRID",
      payload: {
        grid: addRandomPieceToGrid(grid, Player.P2),
      },
    });
  }
}

function* restartTimerSaga() {
  yield put({
    type: "SET_SECONDS",
    payload: {
      seconds: TURN_DURATION,
    },
  });

  yield fork(startTimerSage);
}

export function* rootSaga() {
  yield all([
    takeEvery("START_TIMER", startTimerSage),
    takeEvery("START_NEW_TURN", restartTimerSaga),
    takeEvery("RESTART", restartTimerSaga),
    takeEvery("TOGGLE_PAUSED", togglePausedSaga),
    takeEvery("SET_GRID", setGridSaga),
    takeEvery("TOGGLE_CURRENT_PLAYER", toggleCurrentPlayerSaga),
  ]);
}
