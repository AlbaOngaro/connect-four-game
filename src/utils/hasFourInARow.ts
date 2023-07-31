import { Grid } from "types";

export function hasFourInARow(grid: Grid): boolean {
  const rows = grid.length - 1;

  for (let row = rows; row >= 0; row--) {
    for (let col = 0; col < grid[row].length; col++) {
      const cell = grid[row][col];

      // four in a row
      const nextFourInRow = grid[row].slice(col, col + 4);
      if (
        nextFourInRow.length === 4 &&
        nextFourInRow.every((val) => val > 0 && val === cell)
      ) {
        return true;
      }

      // four in a column
      const nextFourInColumn = [];
      for (let i = 0; i < 4; i++) {
        if (grid[row + i]) {
          nextFourInColumn.push(grid[row + i][col]);
        }
      }

      if (
        nextFourInColumn.length === 4 &&
        nextFourInColumn.every((val) => val > 0 && val === cell)
      ) {
        return true;
      }

      // four in a /
      const nextFourInDiagonalRight = [];
      for (let i = 0; i < 4; i++) {
        if (grid[row - i] && grid[row - i][col + i]) {
          nextFourInDiagonalRight.push(grid[row - i][col + i]);
        }
      }

      if (
        nextFourInDiagonalRight.length === 4 &&
        nextFourInDiagonalRight.every((val) => val > 0 && val === cell)
      ) {
        return true;
      }

      // four in a \
      const nextFourInDiagonalLeft = [];
      for (let i = 0; i < 4; i++) {
        if (grid[row - i] && grid[row - i][col - i]) {
          nextFourInDiagonalLeft.push(grid[row - i][col - i]);
        }
      }

      if (
        nextFourInDiagonalLeft.length === 4 &&
        nextFourInDiagonalLeft.every((val) => val > 0 && val === cell)
      ) {
        return true;
      }
    }
  }

  return false;
}
