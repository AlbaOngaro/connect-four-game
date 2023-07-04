import { Mode, Player } from "types";

export interface State {
  mode: Mode | null;
  currentPlayer: Player;
  score: {
    [Player.P1]: number;
    [Player.P2]: number;
  };
  paused: boolean;
}

interface SetModeAction {
  type: "SET_MODE";
  payload: {
    mode: Mode;
  };
}

interface SetCurrentPlayerAction {
  type: "SET_CURRENT_PLAYER";
  payload: {
    currentPlayer: Player;
  };
}

interface IncreasePlayerScoreAction {
  type: "INCREASE_PLAYER_SCORE";
  payload: {
    player: Player;
  };
}

interface TogglePausedAction {
  type: "TOGGLE_PAUSED";
}

export type Action =
  | SetModeAction
  | SetCurrentPlayerAction
  | IncreasePlayerScoreAction
  | TogglePausedAction;
