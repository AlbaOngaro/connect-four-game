/* eslint-disable @next/next/no-img-element */
import { useGameStateContext } from "providers/game-state/GameStateProvider";
import * as styles from "./GridFooter.styles";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { hasFourInARow } from "utils/hasFourInARow";
import { getInitialGrid } from "utils/getInitialGrid";
import { Button } from "components/button/Button";
import { Player } from "types";

interface Props {
  grid: number[][];
  setGrid: Dispatch<SetStateAction<number[][]>>;
}

export function GridFooter({ grid, setGrid }: Props) {
  const timer = useRef<NodeJS.Timer>();
  const { state, dispatch } = useGameStateContext();

  const [seconds, setSeconds] = useState(15);
  const [isWinScreen, setIsWinScreen] = useState(false);

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
        type: "TOGGLE_CURRENT_PLAYER",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  useEffect(() => {
    setSeconds(15);
  }, [state.currentPlayer]);

  useEffect(() => {
    if (hasFourInARow(grid)) {
      dispatch({
        type: "INCREASE_CURRENT_PLAYER_SCORE",
      });
      setIsWinScreen(true);
      clearInterval(timer.current);
    } else {
      dispatch({
        type: "TOGGLE_CURRENT_PLAYER",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid]);

  if (isWinScreen) {
    return (
      <footer css={styles.footer}>
        <div css={styles.winner}>
          <p css={styles.paragraph}>Player {state.currentPlayer}</p>
          <h3 css={styles.heading}>WINS</h3>
          <Button
            variant="tertiary"
            onClick={() => {
              setIsWinScreen(false);
              dispatch({
                type: "SET_CURRENT_PLAYER",
                payload: {
                  player: Player.P1
                }
              });
              setGrid(getInitialGrid());
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
      <div css={styles.marker(state.currentPlayer)}>
        <p css={styles.paragraph}>Player {state.currentPlayer}&rsquo;s turn</p>
        <h3 css={styles.heading}>{seconds}s</h3>
      </div>
    </footer>
  );
}
