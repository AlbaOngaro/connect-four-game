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
  player: Player
): Map<Coordinate, number> {
  const map = new Map<Coordinate, number>();

  for (let [x, y] of coordinates) {
    map.set([x, y], 1 / coordinates.length);
  }

  console.debug(map);

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
  const weighted = getWeighedCoordinates(coordinates, grid, player);
  return getRandomWeighedCoordinate(weighted);

  // const [x, y] = getRandomWeighedCoordinate(weighted);
  // grid[x][y] = player;
  // return grid;
}

console.log(
  addRandomPieceToGrid(
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    Player.P1
  )
);
