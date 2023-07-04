import { PropsWithChildren } from "react";

import { Player } from "types";

import * as styles from "./Piece.styles";

interface Props extends PropsWithChildren {
  value: Player;
  row: number;
}

export function Piece({ value, row }: Props) {
  if (!value) {
    return <span />;
  }

  return <span css={styles.piece(value, row)} />;
}
