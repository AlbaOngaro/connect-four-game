import { createSelector } from "@reduxjs/toolkit";
import { State } from "store/types";

export const getState = (state: State) => state;

export const getGrid = (state: State) => state.grid;

export const getScore = createSelector([getState], (state) => state.score);

export const getGridHeaderData = createSelector(
  [getState],
  ({ grid, winner, currentPlayer, cpu }) => ({
    grid,
    winner,
    currentPlayer,
    cpu,
  }),
);

export const getGridFooterData = createSelector(
  [getState],
  ({ winner, currentPlayer, seconds }) => ({
    winner,
    currentPlayer,
    seconds,
  }),
);
