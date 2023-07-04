import { Reducer } from "react";

import { State, Action } from "./types";

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "INCREASE_PLAYER_SCORE":
      return {
        ...state,
        score: {
          ...state.score,
          [action.payload.player]: state.score[action.payload.player] + 1,
        },
      };
    case "SET_CURRENT_PLAYER":
      return {
        ...state,
        currentPlayer: action.payload.currentPlayer,
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
