import { Player } from "types";

import { State } from "./types";
import { getInitialGrid } from "utils/getInitialGrid";

export const initialState: State = {
  mode: null,
  currentPlayer: Player.P1,
  score: {
    [Player.P1]: 0,
    [Player.P2]: 0,
  },
  paused: false,
  grid: getInitialGrid(),
  winner: null
};
