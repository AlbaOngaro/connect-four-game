import { css } from "@emotion/react";

export const header = css`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-gap: 24px;
  padding: 0 20px 0;
  width: 100%;
`;

export const button = css`
  display: block;
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0;
  opacity: 0;

  &:hover:not(:disabled) {
    outline: none;
    opacity: 1;
  }
`;
