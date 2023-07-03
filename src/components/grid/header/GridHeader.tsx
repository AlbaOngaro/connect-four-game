import { Dispatch, SetStateAction } from "react";
import { Value } from "types";

import * as styles from "./GridHeader.styles";
import { useCurrentPlayer } from "providers/current-player/CurrentPlayerProvider";

interface Props {
  grid: number[][];
  setGrid: Dispatch<SetStateAction<number[][]>>;
}

export function GridHeader({ grid, setGrid }: Props) {
  const { currentPlayer, setCurrentPlayer } = useCurrentPlayer();

  function addPieceAtColumn(column: number) {
    setGrid((rows) => {
      const rowToReplace = rows.findLastIndex(
        (row) => row[column] === Value.Empty
      );

      return rows.map((row, index) => {
        if (index !== rowToReplace) {
          return row;
        }

        return row.map((cell, j) => {
          if (j !== column) {
            return cell;
          }

          return currentPlayer;
        });
      });
    });

    setCurrentPlayer((curr) => {
      if (curr === Value.P1) {
        return Value.P2;
      } else {
        return Value.P1;
      }
    });
  }

  return (
    <header css={styles.header}>
      {grid[0].map((_, i) => (
        <button css={styles.button} onClick={() => addPieceAtColumn(i)} key={i}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              currentPlayer === Value.P1
                ? "/images/marker-red.svg"
                : "/images/marker-yellow.svg"
            }
            alt="marker"
          />
        </button>
      ))}
    </header>
  );
}
