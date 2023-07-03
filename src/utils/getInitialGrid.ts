import { Value } from "types";

export function getInitialGrid() {
	const rows = new Array(6).fill(Value.Empty);
	return rows.map(() => {
		const cells = new Array(7).fill(Value.Empty);
		return cells;
	});
}