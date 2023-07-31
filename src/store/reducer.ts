import { Reducer } from "@reduxjs/toolkit";

import { getInitialGrid } from "utils/getInitialGrid";

import { State, Action } from "./types";
import { Mode, Player } from "types";

export const TURN_DURATION = 15;

const initialState: State = {
  seconds: TURN_DURATION,
  mode: null,
  currentPlayer: Player.P1,
  score: {
    [Player.P1]: 0,
    [Player.P2]: 0,
  },
  paused: false,
  grid: getInitialGrid(),
  winner: null,
  cpu: null,
};

export const reducer: Reducer<State, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "INCREASE_CURRENT_PLAYER_SCORE":
      return {
        ...state,
        score: {
          ...state.score,
          [state.currentPlayer]: state.score[state.currentPlayer] + 1,
        },
      };
    case "TOGGLE_CURRENT_PLAYER":
      return {
        ...state,
        currentPlayer:
          state.currentPlayer === Player.P1 ? Player.P2 : Player.P1,
      };
    case "START_NEW_TURN": {
      return {
        ...state,
        currentPlayer: Player.P1,
        winner: null,
        grid: getInitialGrid(),
        score: {
          ...state.score,
          [state.winner as Player]: state.score[state.winner as Player] + 1,
        },
      };
    }
    case "SET_WINNER":
      return {
        ...state,
        winner: state.currentPlayer,
      };
    case "SET_GRID": {
      return {
        ...state,
        grid: action.payload.grid,
      };
    }
    case "SET_MODE": {
      if (action.payload.mode === Mode.PvC) {
        return {
          ...state,
          mode: action.payload.mode,
          cpu: Player.P2,
        };
      }

      return {
        ...state,
        mode: action.payload.mode,
        cpu: null,
      };
    }
    case "TOGGLE_PAUSED":
      return {
        ...state,
        paused: !state.paused,
      };
    case "SET_SECONDS":
      return {
        ...state,
        seconds: action.payload.seconds,
      };
    case "RESTART": {
      return {
        ...state,
        currentPlayer: Player.P1,
        seconds: TURN_DURATION,
        grid: getInitialGrid(),
      };
    }
    case "RESET": {
      return {
        ...initialState,
        grid: getInitialGrid(),
      };
    }
    default:
      return state;
  }
};
