import { Player } from "types";

import { State } from "./types";

export const initialState: State = {
  mode: null,
  currentPlayer: Player.P1,
  score: {
    [Player.P1]: 0,
    [Player.P2]: 0,
  },
  paused: false,
};
