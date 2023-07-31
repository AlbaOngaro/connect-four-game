export function getInitialGrid() {
  const rows = new Array(6).fill(0);
  return rows.map(() => {
    const cells = new Array(7).fill(0);
    return cells;
  });
}
