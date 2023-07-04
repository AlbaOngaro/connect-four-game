import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";

import { initialState } from './state';
import { reducer } from './reducer';

import { State, Action } from './types';

type GameStateContextValue = {
  state: State;
  dispatch: Dispatch<Action>
};

const GameStateContext = createContext<GameStateContextValue>({
  state: initialState,
  dispatch: () => {}
});

export function GameStateProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GameStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GameStateContext.Provider>
  );
}

export function useGameStateContext() {
  return useContext(GameStateContext);
}

export function useGameState() {
	const { state } = useGameStateContext();
  return state;
}

export function useDispatchGameStateAction() {
  const { dispatch } = useGameStateContext();
  return dispatch;
}