import { Grid } from "components/grid/Grid";
import * as styles from "./GameContents.styles";
import { Score } from "components/score/Score";
import { Player } from "types";
import { useEffect, useRef } from "react";
import { Button } from "components/button/Button";
import { useDispatch } from "store/hooks";
import { startTimer } from "store/actions";

export function GameContents() {
  const dispatch = useDispatch();
  const dialog = useRef<HTMLDialogElement>(null);

  function openMenu() {
    if (dialog.current?.open) {
      dialog.current?.close();
    } else {
      dialog.current?.showModal();
    }

    dispatch({
      type: "TOGGLE_PAUSED",
    });
  }

  useEffect(() => {
    dispatch(startTimer());

    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === "Escape") {
        e.preventDefault();
        openMenu();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section css={styles.container}>
      <div css={styles.controls}>
        <Button variant="tertiary" onClick={() => openMenu()}>
          MENU
        </Button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.svg" alt="logo" />
        <Button
          variant="tertiary"
          onClick={() =>
            dispatch({
              type: "RESTART",
            })
          }
        >
          RESTART
        </Button>
      </div>

      <div css={styles.content}>
        <Score player={Player.P1} css={styles.p1} />
        <Grid css={styles.grid} />
        <Score player={Player.P2} css={styles.p2} />
      </div>

      <dialog css={styles.dialog} ref={dialog}>
        <h2>PAUSE</h2>
        <Button
          variant="secondary"
          onClick={() => {
            dispatch({
              type: "TOGGLE_PAUSED",
            });
            dialog.current?.close();
          }}
        >
          Continue Game
        </Button>

        <Button
          variant="secondary"
          onClick={() => {
            dispatch({
              type: "RESTART",
            });

            dialog.current?.close();
          }}
        >
          Restart
        </Button>

        <Button
          variant="danger"
          onClick={() => {
            dispatch({
              type: "RESET",
            });
          }}
        >
          Quit Game
        </Button>
      </dialog>
    </section>
  );
}
