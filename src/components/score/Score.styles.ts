import { css } from "@emotion/react";
import { Player } from "types";

export const container = (player: Player) => css`
	border-radius: 20px;
	border: 3px solid var(--black, #000);
	background: var(--white, #fff);
	box-shadow: 0px 10px 0px 0px #000;
	padding: 36px 24px 16px;
	height: fit-content;
	width: fit-content;
	margin-top: 60%;
	position: relative;

	&::before {
		content: ${player === Player.P1 ? "url(\"/images/player-one.svg\")" : "url(\"/images/player-two.svg\")"};
		display: block;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	&:nth-of-type(1) {
		justify-self: flex-end;
	}

	&:nth-of-type(2) {
		justify-self: flex-start;
	}
`;

export const paragraph = css`
	margin: 0;
  font-size: 16px;
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const h3 = css`
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
	text-align: center;
  margin: 0;
`;
