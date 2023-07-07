import { Grid } from "components/grid/Grid";
import * as styles from "./GamePage.styles";
import { Score } from "components/score/Score";
import { Player } from "types";
import { useEffect, useRef } from "react";
import { Button } from "components/button/Button";
import { useDispatchGameStateAction } from "providers/game-state/GameStateProvider";
import { useRouter } from "next/router";

export function GamePage() {
  const router = useRouter();
  const dispatch = useDispatchGameStateAction();
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === "Escape") {
        e.preventDefault();

        if (dialog.current?.open) {
          dialog.current?.close();
        } else {
          dialog.current?.showModal();
        }

        dispatch({
          type: "TOGGLE_PAUSED",
        });
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
      <Score player={Player.P1} />
      <Grid />
      <Score player={Player.P2} />
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
              type: "RESET",
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
            router.push("/");
          }}
        >
          Quit Game
        </Button>
      </dialog>
    </section>
  );
}
