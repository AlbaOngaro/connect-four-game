import { Player } from "types";
import { getAvailableCoordinates } from "utils/addRandomPieceToGrid";

it('returns', () => {
	expect(getAvailableCoordinates([
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0],
	])).toEqual([[4, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5,5]]);

	expect(getAvailableCoordinates([
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[1, 1, 0, 0, 0, 0, 0],
	])).toEqual([[4, 0], [4, 1], [5, 2], [5, 3], [5, 4], [5,5]]);
})