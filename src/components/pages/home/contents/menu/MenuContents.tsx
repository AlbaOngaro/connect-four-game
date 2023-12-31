/* eslint-disable @next/next/no-img-element */
import { Button } from "components/button/Button";
import { Card } from "components/card/Card";

import * as styles from "./MenuContents.styles";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Mode } from "types";

export function MenuContents() {
  const dialog = useRef<HTMLDialogElement>(null);

  const dispatch = useDispatch();

  const start = (mode: Mode) => {
    dispatch({
      type: "SET_MODE",
      payload: {
        mode,
      },
    });
  };

  return (
    <section css={styles.container}>
      <Card>
        <header css={styles.header}>
          <img src="/images/logo.svg" alt="logo" />
        </header>
        <main css={styles.main}>
          <Button
            css={styles.button}
            variant="danger"
            onClick={() => start(Mode.PvC)}
          >
            PLAY VS CPU <img src="/images/player-vs-cpu.svg" alt="PvC" />
          </Button>
          <Button
            css={styles.button}
            variant="primary"
            onClick={() => start(Mode.PvP)}
          >
            PLAY VS PLAYER <img src="/images/player-vs-player.svg" alt="PvP" />
          </Button>
          <Button
            css={styles.button}
            variant="secondary"
            onClick={() => dialog.current?.showModal()}
          >
            GAME RULES
          </Button>
        </main>
      </Card>

      <dialog css={styles.dialog} ref={dialog}>
        <h2>Rules</h2>
        <h6>OBJECTIVE</h6>
        <p>
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
        <h6>HOW TO PLAY</h6>
        <ol>
          <li>Red goes first in the first game.</li>
          <li>
            Players must alternate turns, and only one disc can be dropped in
            each turn.{" "}
          </li>
          <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
          <li>
            The starter of the previous game goes second on the next game.
          </li>
        </ol>
        <Button variant="danger" onClick={() => dialog.current?.close()}>
          ✓
        </Button>
      </dialog>
    </section>
  );
}
