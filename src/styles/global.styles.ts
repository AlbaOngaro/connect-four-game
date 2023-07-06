import { css } from "@emotion/react";
import { Player } from "types";

export const globalStyles = (isGamePage: boolean, winner: Player | null) => [
  css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      font-family: "Space Grotesk";
    }

    body {
      background-color: #7945ff;

      &::after {
        content: "";
        width: 100%;
        height: ${isGamePage ? "15%" : "100%"};
        display: block;
        position: fixed;
        z-index: -1;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: ${isGamePage ? "60px 60px 0px 0px" : 0};
        transition: all 0.5s ease-in-out;
        background-color: #5c2dd5;
      }
    }
  `,
  winner === Player.P1 &&
    css`
      &::after {
        background-color: #fd6687;
      }
    `,
  winner === Player.P2 &&
    css`
      &::after {
        background-color: #ffce67;
      }
    `,
];
