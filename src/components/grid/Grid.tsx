import { useEffect, useState } from "react";
import * as styles from "./Grid.styles";
import { Piece } from "components/piece/Piece";
import { GridHeader } from "components/grid/header/GridHeader";
import { hasFourInARow } from "utils/hasFourInARow";
import { getInitialGrid } from "utils/getInitialGrid";
import { GridFooter } from "components/grid/footer/GridFooter";
import { useDispatchGameStateAction } from "providers/game-state/GameStateProvider";

export function Grid() {
  const [grid, setGrid] = useState<number[][]>(getInitialGrid());

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

        <GridFooter grid={grid} setGrid={setGrid} />
      </article>
    </div>
  );
}
