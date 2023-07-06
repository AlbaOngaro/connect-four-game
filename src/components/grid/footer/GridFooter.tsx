/* eslint-disable @next/next/no-img-element */
import { useGameStateContext } from "providers/game-state/GameStateProvider";
import * as styles from "./GridFooter.styles";
import { useEffect, useRef, useState } from "react";
import { Button } from "components/button/Button";
import { addRandomPieceToGrid } from "utils/addRandomPieceToGrid";

export function GridFooter() {
  const timer = useRef<NodeJS.Timer>();
  const { state: { winner, currentPlayer,grid }, dispatch } = useGameStateContext();

  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    timer.current = setInterval(() => {
      setSeconds((curr) => {
        if (curr - 1 >= 0) {
          return curr - 1;
        }

        return curr;
      });
    }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      dispatch({
        type: "SET_GRID",
        payload: {
          grid: addRandomPieceToGrid(grid, currentPlayer)
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  useEffect(() => {
    setSeconds(15);
  }, [currentPlayer]);

  useEffect(() => {
    if (winner) {
      clearInterval(timer.current);
    }
  }, [winner]);

  if (winner) {
    return (
      <footer css={styles.footer}>
        <div css={styles.winner}>
          <p css={styles.paragraph}>Player {winner}</p>
          <h3 css={styles.heading}>WINS</h3>
          <Button
            variant="tertiary"
            onClick={() => {
              dispatch({
                type: 'START_NEW_TURN'
              });
              
              timer.current = setInterval(() => {
                setSeconds((curr) => {
                  if (curr - 1 >= 0) {
                    return curr - 1;
                  }
          
                  return curr;
                });
              }, 1000);
            }}
          >
            Play again
          </Button>
        </div>
      </footer>
    );
  }

  return (
    <footer css={styles.footer}>
      <div css={styles.marker(currentPlayer)}>
        <p css={styles.paragraph}>Player {currentPlayer}&rsquo;s turn</p>
        <h3 css={styles.heading}>{seconds}s</h3>
      </div>
    </footer>
  );
}
