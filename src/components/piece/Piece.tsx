import { PropsWithChildren } from "react";

import { Value } from "types";

import * as styles from "./Piece.styles";

interface Props extends PropsWithChildren {
  value: Value;
  row: number;
}

export function Piece({ value, row }: Props) {
  if (value === Value.Empty) {
    return <span />;
  }

  return <span css={styles.piece(value, row)} />;
}
