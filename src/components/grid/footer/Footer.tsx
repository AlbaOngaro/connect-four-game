/* eslint-disable @next/next/no-img-element */
import { useGameState } from "providers/game-state/GameStateProvider";
import * as styles from "./Footer.styles";
import { Value } from "types";
import { useEffect, useState } from "react";

export function Footer() {
  const { currentPlayer, setCurrentPlayer } = useGameState();

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
      setCurrentPlayer((curr) => (curr === Value.P1 ? Value.P2 : Value.P1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  useEffect(() => {
    setSeconds(15);
  }, [currentPlayer]);

  return (
    <footer css={styles.footer}>
      <div css={styles.marker(currentPlayer)}>
        <p>Player {currentPlayer}&rsquo;s turn</p>
        <h3>{seconds}s</h3>
      </div>
    </footer>
  );
}
