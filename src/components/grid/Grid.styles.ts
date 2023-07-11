import { css } from "@emotion/react";

export const container = css`
  background-image: url("/images/board-layer-black-large.svg");
  background-repeat: no-repeat;
	background-size: cover;
  position: relative;
  width: 100%;
  max-width: 632px;
  aspect-ratio: 1.06/1;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: url("/images/board-layer-white-large.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(6, minmax(0, 1fr));
  grid-gap: 3%;
  height: 100%;
  width: 100%;
  padding: 3% 3% 11.5%;
`;
