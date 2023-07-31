import { css } from "@emotion/react";

import { Variant } from "./Button";

export const button = (variant: Variant) => [
  css`
    border-radius: 20px;
    border: 3px solid var(--black, #000);
    box-shadow: 0px 10px 0px 0px #000;
    padding: 16px;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition: all 0.3s ease-in-out;

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: pointer;
      border: 3px solid var(--dark-purple, #5c2dd5);
      box-shadow: 0px 10px 0px 0px #5c2dd5;
    }
  `,
  variant === "primary" &&
    css`
      background: var(--yellow, #ffce67);
      color: var(--black, #000);
    `,
  variant === "secondary" &&
    css`
      background: var(--white, #fff);
      color: var(--black, #000);
    `,
  variant === "danger" &&
    css`
      background: var(--red, #fd6687);
      color: var(--white, #fff);
    `,
  variant === "tertiary" &&
    css`
      border-radius: 20px;
      background: var(--dark-purple, #5c2dd5);
      color: var(--white, #fff);
      border: none;
      box-shadow: none;
      color: var(--white, #fff);
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
      padding: 10px 20px;

      &:hover {
        cursor: pointer;
        border: none;
        box-shadow: none;
        background: var(--dark-purple, #fd6687);
      }
    `,
];
