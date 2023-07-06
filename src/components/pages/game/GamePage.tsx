import { Grid } from 'components/grid/Grid';
import * as styles from './GamePage.styles';
import { Score } from 'components/score/Score';
import { Player } from 'types';

export function GamePage() {
  return (
    <section css={styles.container}>
      <Score player={Player.P1} />
      <Grid />
      <Score player={Player.P2} />
    </section>
  );
}
