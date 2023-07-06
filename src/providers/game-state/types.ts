import { Grid, Mode, Player } from "types";

export interface State {
  mode: Mode | null;
  currentPlayer: Player;
  score: {
    [Player.P1]: number;
    [Player.P2]: number;
  };
  paused: boolean;
  grid: Grid;
  winner: Player | null;
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

interface StartNewTurnAction {
  type: 'START_NEW_TURN';
}

interface SetWinnerAction {
  type: 'SET_WINNER';
}

interface SetGridAction {
  type: 'SET_GRID';
  payload: {
    grid: number[][]
  }
}

export type Action =
  | SetModeAction
  | ToggleCurrentPlayerAction
  | IncreaseCurrentPlayerScoreAction
  | TogglePausedAction
  | StartNewTurnAction 
  | SetWinnerAction
  | SetGridAction;
