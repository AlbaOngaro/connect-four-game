import * as styles from "./Grid.styles";
import { Piece } from "components/piece/Piece";
import { GridHeader } from "components/grid/header/GridHeader";
import { GridFooter } from "components/grid/footer/GridFooter";
import { useSelector } from "store/hooks";

interface Props {
  className?: string;
}

export function Grid({ className }: Props) {
  const { grid } = useSelector((state) => ({
    grid: state.grid,
  }));

  return (
    <div className={className}>
      <GridHeader />

      <article css={styles.container}>
        <div css={styles.grid}>
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <Piece key={`${i}-${j}`} row={i} value={cell} />
            )),
          )}
        </div>

        <GridFooter />
      </article>
    </div>
  );
}
