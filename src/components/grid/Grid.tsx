import { useState } from "react";
import * as styles from "./Grid.styles";
import { Piece } from "components/piece/Piece";
import { GridHeader } from "components/grid/header/GridHeader";
import { Value } from "types";

export function Grid() {
  const [grid, setGrid] = useState<number[][]>(() => {
    const rows = new Array(6).fill(Value.Empty);
    return rows.map(() => {
      const cells = new Array(7).fill(Value.Empty);
      return cells;
    });
  });

  return (
    <div>
      <GridHeader grid={grid} setGrid={setGrid} />

      <article css={styles.container}>
        <div css={styles.grid}>
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <Piece key={`${i}-${j}`} row={i} value={cell} />
            ))
          )}
        </div>
      </article>
    </div>
  );
}
