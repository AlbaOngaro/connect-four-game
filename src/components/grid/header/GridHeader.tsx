import { Dispatch, SetStateAction } from "react";
import { Player } from "types";

import * as styles from "./GridHeader.styles";
import {
  useGameState,
  useGameStateContext,
} from "providers/game-state/GameStateProvider";

interface Props {
  grid: number[][];
  setGrid: Dispatch<SetStateAction<number[][]>>;
}

export function GridHeader({ grid, setGrid }: Props) {
  const { state, dispatch } = useGameStateContext();

  function addPieceAtColumn(column: number) {
    setGrid((rows) => {
      const rowToReplace = rows.findLastIndex((row) => !row[column]);

      return rows.map((row, index) => {
        if (index !== rowToReplace) {
          return row;
        }

        return row.map((cell, j) => {
          if (j !== column) {
            return cell;
          }

          return state.currentPlayer;
        });
      });
    });
  }

  return (
    <header css={styles.header}>
      {grid[0].map((_, i) => {
        const disabled = grid.every((row) => row[i] !== 0);

        return (
          <button
            disabled={disabled}
            css={styles.button}
            onClick={() => addPieceAtColumn(i)}
            key={i}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                state.currentPlayer === Player.P1
                  ? "/images/marker-red.svg"
                  : "/images/marker-yellow.svg"
              }
              alt="marker"
            />
          </button>
        );
      })}
    </header>
  );
}
