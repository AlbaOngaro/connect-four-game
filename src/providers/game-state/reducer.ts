import { Reducer } from "react";

import { State, Action } from "./types";
import { Player } from "types";

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
    case "SET_CURRENT_PLAYER":
      return {
        ...state,
        currentPlayer: action.payload.player,
      };
    case "SET_MODE":
      return {
        ...state,
        mode: action.payload.mode,
      };
    case "TOGGLE_PAUSED":
      return {
        ...state,
        paused: !state.paused,
      };
    default:
      return state;
  }
};
