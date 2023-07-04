import { css, keyframes } from "@emotion/react";
import { Player } from "types";

const slideIn = (row: number) => keyframes`
	from {
		transform: translateY(-${(row + 2) * 100}%);
	}

	to {
		transform: translateY(0);
}
`;

export const piece = (value: Player, row: number) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 100vw;
  background-color: ${value === Player.P1 ? "#FD6687" : "#FFCE67"};
  animation: ${slideIn(row)} 0.3s forwards;
`;
