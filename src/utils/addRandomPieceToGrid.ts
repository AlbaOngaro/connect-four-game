import { Grid, Player } from "../types";
type Coordinate = [number, number];
type Coordinates = Coordinate[];

export function getAvailableCoordinates(grid: Grid): Coordinates {
  const coordinates: Coordinates = [];

  const rows = grid.length - 1;

  for (let row = rows; row >= 0; row--) {
    for (let col = 0; col < grid[row].length; col++) {
      const cell = grid[rows - row][col];

      if (!cell) {
        coordinates[col] = [rows - row, col];
      }
    }
  }

  return coordinates;
}

export function getWeighedCoordinates(
  coordinates: Coordinates,
  grid: Grid,
): Map<Coordinate, number> {
  const map = new Map<Coordinate, number>();

  coordinates.forEach(([x, y], i) => {
    const currRow = grid[x];
    const nextRow = grid[x + 1];
    const secondNextRow = grid[x + 2];

    if (
      (currRow[y - 1] && currRow[y - 2] && currRow[y + 1]) ||
      (nextRow && secondNextRow && nextRow[y] && secondNextRow[y])
    ) {
      map.set([x, y], (1 / coordinates.length) * 2);
    } else {
      map.set([x, y], 1 / coordinates.length);
    }
  });

  let total = 0;
  for (let val of map.values()) {
    total += val;
  }

  if (total > 1) {
    const difference = total - 1;

    for (let [key, val] of map) {
      map.set(key, val - difference / map.size);
    }
  }

  return map;
}

export function getRandomWeighedCoordinate(
  spec: Map<Coordinate, number>
): Coordinate {
  let sum = 0;
  let r = Math.random();

  for (let [coordinate, weight] of spec) {
    sum += weight;
    if (r <= sum) return coordinate;
  }
}

export function addRandomPieceToGrid(grid: Grid, player: Player): Grid {
  const coordinates = getAvailableCoordinates(grid);
  const weighted = getWeighedCoordinates(coordinates, grid);
  const [x, y] = getRandomWeighedCoordinate(weighted);
  grid[x][y] = player;
  return grid;
}