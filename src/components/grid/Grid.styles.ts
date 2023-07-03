import { css } from "@emotion/react";

export const container = css`
  background-image: url("/images/board-layer-black-large.svg");
  background-repeat: no-repeat;
	background-size: cover;
  width: 632px;
  height: 584px;
  position: relative;

  &::after {
    content: url("/images/board-layer-white-large.svg");
    position: absolute;
    inset: 0;
  }
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 64px));
  grid-template-rows: repeat(6, minmax(0, 64px));
  grid-gap: 24px;
	padding: 20px 20px 60px;
`;
