import { Reducer } from "react";

import { State, Action } from "./types";
import { Mode, Player } from "types";
import { getInitialGrid } from "utils/getInitialGrid";
import { hasFourInARow } from "utils/hasFourInARow";

export const reducer: Reducer<State, Action> = (state, action) => {
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
    case 'START_NEW_TURN': {
      return {
        ...state,
        currentPlayer: Player.P1,
        winner: null,
        grid: getInitialGrid(),
        score: {
          ...state.score,
          [state.winner as Player]: state.score[state.winner as Player]+1,
        }
      }
    };
    case 'SET_WINNER':
      return {
        ...state,
        winner: state.currentPlayer,
      }
    case 'SET_GRID':
      if (hasFourInARow(action.payload.grid)) {
        return {
          ...state,
          grid: action.payload.grid,
          winner: state.currentPlayer
        }
      }

      return {
        ...state,
        grid: action.payload.grid,
        currentPlayer: state.currentPlayer === Player.P1 ? Player.P2 : Player.P1,
      }
    case "SET_MODE": {
      if (action.payload.mode === Mode.PvC) {
        return {
          ...state,
          mode: action.payload.mode,
          cpu: Player.P2
        };
      }

      return {
        ...state,
        mode: action.payload.mode,
        cpu: null
      };
    } 
    case "TOGGLE_PAUSED":
      return {
        ...state,
        paused: !state.paused,
      };
    case 'RESET': {
      return {
        ...state,
        grid: getInitialGrid(),
        score: {
          [Player.P1]: 0,
          [Player.P2]: 0,
        },
        paused: false,
        currentPlayer: Player.P1
      }
    }
    default:
      return state;
  }
};
