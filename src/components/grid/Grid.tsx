import { useEffect, useState } from "react";
import * as styles from "./Grid.styles";
import { Piece } from "components/piece/Piece";
import { GridHeader } from "components/grid/header/GridHeader";
import { hasFourInARow } from "utils/hasFourInARow";
import { getInitialGrid } from "utils/getInitialGrid";
import { GridFooter } from "components/grid/footer/GridFooter";
import { useDispatchGameStateAction, useGameState } from "providers/game-state/GameStateProvider";

interface Props {
  className?: string;
}

export function Grid({ className }: Props) {
  const { grid } = useGameState();

  return (
    <div className={className}>
      <GridHeader  />

      <article css={styles.container}>
        <div css={styles.grid}>
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <Piece key={`${i}-${j}`} row={i} value={cell} />
            ))
          )}
        </div>

        <GridFooter />
      </article>
    </div>
  );
}
