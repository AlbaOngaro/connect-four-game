import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import * as styles from './Button.styles';

export type Variant = "primary" | "secondary" | "danger";

interface Props
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "ref"
  > {
  variant: Variant;
}

export function Button({ variant, ...rest }: Props) {
  return <button css={styles.button(variant)} {...rest} />;
}
