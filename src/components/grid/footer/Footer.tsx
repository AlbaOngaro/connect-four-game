/* eslint-disable @next/next/no-img-element */
import {  useGameStateContext } from "providers/game-state/GameStateProvider";
import * as styles from "./Footer.styles";
import { Player } from "types";
import { useEffect, useState } from "react";

export function Footer() {
  const { state, dispatch } = useGameStateContext();

  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    const int = setInterval(() => {
      setSeconds((curr) => {
        if (curr - 1 >= 0) {
          return curr - 1;
        }

        return curr;
      });
    }, 1000);

    return () => {
      clearInterval(int);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      dispatch({
        type: 'SET_CURRENT_PLAYER',
        payload: {
          currentPlayer: state.currentPlayer === Player.P1 ? Player.P2 : Player.P1
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  useEffect(() => {
    setSeconds(15);
  }, [state.currentPlayer]);

  return (
    <footer css={styles.footer}>
      <div css={styles.marker(state.currentPlayer)}>
        <p>Player {state.currentPlayer}&rsquo;s turn</p>
        <h3>{seconds}s</h3>
      </div>
    </footer>
  );
}
