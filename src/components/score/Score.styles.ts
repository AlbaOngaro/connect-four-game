import { css } from "@emotion/react";
import { Player } from "types";

function getPlayerImg(player: Player, cpu: Player | null) {
  if (player === cpu) {
    return 'url("/images/cpu.svg")';
  }

  return player === Player.P1
    ? 'url("/images/player-one.svg")'
    : 'url("/images/player-two.svg")';
}

export const container = (player: Player, cpu: Player | null) => css`
  border-radius: 20px;
  border: 3px solid var(--black, #000);
  background: var(--white, #fff);
  box-shadow: 0px 10px 0px 0px #000;
  height: fit-content;
  width: 100%;
  margin-top: 60%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1440px) {
    width: 16ch;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  &::before {
    content: ${getPlayerImg(player, cpu)};
    display: block;
    position: absolute;
  }

  &:nth-of-type(1) {
    justify-self: flex-end;

    @media (min-width: 426px) {
      padding: 16px 24px 16px 42px;
      flex-direction: row;
    }

    @media (min-width: 1440px) {
      padding: 42px 42px 16px;
      flex-direction: column;
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

    @media (min-width: 426px) {
      padding: 16px 42px 16px 24px;
      flex-direction: row-reverse;
    }

    @media (min-width: 1440px) {
      padding: 42px 42px 16px;
      flex-direction: column;
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
