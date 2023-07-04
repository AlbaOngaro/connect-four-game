import { css } from "@emotion/react";
import { Player } from "types";

export const footer = css`
  position: absolute;
  bottom: -95px;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
`;

export const marker = (currentPlayer: Player) => css`
  width: 191px;
  height: 150px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${currentPlayer === Player.P1 ? "/images/turn-background-red.svg" : "/images/turn-background-yellow.svg"});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: ${currentPlayer === Player.P1 ? "#FFF" : "#000000"};

  & p {
    margin: 36px 0 0;
    font-size: 16px;
    font-family: Space Grotesk;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }

  & h3 {
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }
`;
