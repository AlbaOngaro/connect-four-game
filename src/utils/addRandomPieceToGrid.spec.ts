import {
  getAvailableCoordinates,
  getRandomWeighedCoordinate,
} from "utils/addRandomPieceToGrid";

it("returns", () => {
  expect(
    getAvailableCoordinates([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
    ]),
  ).toEqual([
    [4, 0],
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
    [5, 5],
  ]);

  expect(
    getAvailableCoordinates([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0],
    ]),
  ).toEqual([
    [4, 0],
    [4, 1],
    [5, 2],
    [5, 3],
    [5, 4],
    [5, 5],
  ]);

  const map1 = new Map();
  map1.set([0, 0], 0.8);
  map1.set([0, 1], 0.1);
  map1.set([0, 2], 0.1);

  expect(getRandomWeighedCoordinate(map1)).not.toBeUndefined();

  const map2 = new Map();
  map2.set([0, 0], 0.6);
  map2.set([0, 1], 0.1);
  map2.set([0, 2], 0.1);
  map2.set([0, 3], 0.1);
  map2.set([0, 4], 0.1);
  expect(getRandomWeighedCoordinate(map2)).not.toBeUndefined();
});
