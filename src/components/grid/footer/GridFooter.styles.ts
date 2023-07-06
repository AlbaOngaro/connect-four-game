import { css } from "@emotion/react";
import { Player } from "types";

export const footer = css`
  position: absolute;
  bottom: -110px;
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
  background-image: url(${currentPlayer === Player.P1? "/images/turn-background-red.svg" : "/images/turn-background-yellow.svg"});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: ${currentPlayer === Player.P1 ? "#FFF" : "#000000"};
`;

export const paragraph = css`
  margin: 36px 0 0;
  font-size: 16px;
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const heading = css`
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

export const winner = css`
  border-radius: 20px;
  border: 3px solid var(--black, #000);
  background: var(--white, #fff);
  box-shadow: 0px 10px 0px 0px #000;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 285px;
  flex-shrink: 0;

  & p {
    margin: 0;
  }
`;
