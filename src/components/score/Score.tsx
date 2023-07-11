import { Player } from "types";
import * as styles from "./Score.styles";
import { useGameState } from "providers/game-state/GameStateProvider";

interface Props {
  player: Player;
  className?: string;
}

export function Score({ player, className }: Props) {
  const state = useGameState();

  return (
    <article css={styles.container(player)} className={className}>
			<p css={styles.paragraph}>Player {player}</p>
      <h3 css={styles.h3}>{state.score[player]}</h3>
    </article>
  );
}
