import { Player } from "types";

import * as styles from "./GridHeader.styles";
import { useDispatch, useSelector } from "store/hooks";
import { getGridHeaderData } from "store/selectors";

export function GridHeader() {
  const { grid, winner, currentPlayer, cpu } = useSelector(getGridHeaderData);

  const dispatch = useDispatch();

  function addPieceAtColumn(column: number) {
    const updateGrid = () => {
      const rowToReplace = grid.findLastIndex((row) => !row[column]);

      return grid.map((row, index) => {
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
    };

    dispatch({
      type: "SET_GRID",
      payload: {
        grid: updateGrid(),
      },
    });
  }

  return (
    <header css={styles.header}>
      {grid[0].map((_, i) => {
        const disabled =
          grid.every((row) => row[i] !== 0) ||
          Boolean(winner) ||
          currentPlayer === cpu;

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
                currentPlayer === Player.P1
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
