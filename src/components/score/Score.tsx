import { Mode, Player } from "types";
import * as styles from "./Score.styles";
import { useSelector } from "store/hooks";

interface Props {
  player: Player;
  className?: string;
}

export function Score({ player, className }: Props) {
  const { score, cpu, mode } = useSelector((state) => ({
    mode: state.mode,
    cpu: state.cpu,
    score: state.score,
  }));

  if (mode === Mode.PvP) {
    return (
      <article css={styles.container(player, cpu)} className={className}>
        <p css={styles.paragraph}>Player {player}</p>
        <h3 css={styles.h3}>{score[player]}</h3>
      </article>
    );
  }

  return (
    <article css={styles.container(player, cpu)} className={className}>
      <p css={styles.paragraph}>{player === cpu ? "CPU" : "You"}</p>
      <h3 css={styles.h3}>{score[player]}</h3>
    </article>
  );
}
