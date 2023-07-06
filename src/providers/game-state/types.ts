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

interface ToggleCurrentPlayerAction {
  type: "TOGGLE_CURRENT_PLAYER";
}

interface IncreaseCurrentPlayerScoreAction {
  type: "INCREASE_CURRENT_PLAYER_SCORE";
}

interface TogglePausedAction {
  type: "TOGGLE_PAUSED";
}

interface SetCurrentPlayerAction {
  type: "SET_CURRENT_PLAYER",
  payload: {
    player: Player
  }
}

export type Action =
  | SetModeAction
  | ToggleCurrentPlayerAction
  | IncreaseCurrentPlayerScoreAction
  | TogglePausedAction
  | SetCurrentPlayerAction;
