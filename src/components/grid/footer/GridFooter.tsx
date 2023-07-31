/* eslint-disable @next/next/no-img-element */
import * as styles from "./GridFooter.styles";
import { Button } from "components/button/Button";
import { useDispatch, useSelector } from "store/hooks";
import { getGridFooterData } from "store/selectors";

export function GridFooter() {
  const dispatch = useDispatch();
  const { winner, currentPlayer, seconds } = useSelector(getGridFooterData);

  if (winner) {
    return (
      <footer css={styles.footer(true)}>
        <div css={styles.winner}>
          <p css={styles.paragraph}>Player {winner}</p>
          <h3 css={styles.heading}>WINS</h3>
          <Button
            variant="tertiary"
            onClick={() => {
              dispatch({
                type: "START_NEW_TURN",
              });
            }}
          >
            Play again
          </Button>
        </div>
      </footer>
    );
  }

  return (
    <footer css={styles.footer(false)}>
      <div css={styles.marker(currentPlayer)}>
        <p css={styles.paragraph}>Player {currentPlayer}&rsquo;s turn</p>
        <h3 css={styles.heading}>{seconds}s</h3>
      </div>
    </footer>
  );
}
