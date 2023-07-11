import { css } from "@emotion/react";
import { Player } from "types";

export const container = (player: Player) => css`
  border-radius: 20px;
  border: 3px solid var(--black, #000);
  background: var(--white, #fff);
  box-shadow: 0px 10px 0px 0px #000;
  height: fit-content;
  width: 100%;
  margin-top: 60%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media (min-width: 1440px) {
    width: fit-content;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  &::before {
    content: ${player === Player.P1
      ? 'url("/images/player-one.svg")'
      : 'url("/images/player-two.svg")'};
    display: block;
    position: absolute;
  }

  &:nth-of-type(1) {
    justify-self: flex-end;
    padding: 16px 24px 16px 42px;

    @media (min-width: 1440px) {
      padding: 42px 42px 16px;
    }

    &::before {
      left: 0;
      transform: translateX(-50%);

      @media (min-width: 1440px) {
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &:nth-of-type(2) {
    justify-self: flex-start;
    padding: 16px 42px 16px 24px;

		@media (min-width: 1440px) {
      padding: 42px 42px 16px;
    }

    &::before {
      right: 0;
      transform: translateX(50%);

      @media (min-width: 1440px) {
        top: 0;
        right: initial;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
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
