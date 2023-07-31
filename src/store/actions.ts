import { StartTimerAction } from "./types";

export function startTimer(): StartTimerAction {
  return {
    type: "START_TIMER",
  };
}
