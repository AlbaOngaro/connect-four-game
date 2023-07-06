import { Grid, Player } from "../types";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getAvailableCoordinates(grid: Grid) {
  const coordinates: Grid = [];

	const rows = grid.length - 1

  for (let row = rows; row >= 0; row--) {
    for (let col = 0; col < grid[row].length - 1; col++) {
      const cell = grid[rows - row][col];
			
      if (!cell) {
        coordinates[col] = [rows - row, col]
      }
    }
  }

  return coordinates;
}

export function addRandomPieceToGrid(grid: Grid, player: Player): Grid {
  const coordinates = getAvailableCoordinates(grid);

  const idx = getRandomInt(0, coordinates.length - 1);

  const [x, y] = coordinates[idx];

  grid[x][y] = player;

  return grid;
}