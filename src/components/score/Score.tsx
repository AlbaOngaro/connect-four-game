import { Player } from "types";
import * as styles from "./Score.styles";
import { useSelector } from "store/hooks";

interface Props {
  player: Player;
  className?: string;
}

export function Score({ player, className }: Props) {
  const { score, cpu } = useSelector((state) => ({
    cpu: state.cpu,
    score: state.score,
  }));

  return (
    <article css={styles.container(player, cpu)} className={className}>
      <p css={styles.paragraph}>Player {player}</p>
      <h3 css={styles.h3}>{score[player]}</h3>
    </article>
  );
}
