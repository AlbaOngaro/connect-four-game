import { css } from "@emotion/react";

export const container = css`
  width: 100vw;
  height: 100vh;
  padding-top: 32px;
`;

export const controls = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 632px;
  margin: 0 auto 16px;

  & button {
    height: fit-content;
  }
`;

export const grid = css`
  display: grid;
  grid-template-columns: 1fr 632px 1fr;
  grid-gap: 40px;
`;

export const dialog = css`
  &[open] {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    border-radius: 40px;
    border: 3px solid var(--black, #000);
    background: var(--purple, #7945ff);
    box-shadow: 0px 10px 0px 0px #000;
    padding: 50px 40px;
    width: 100%;
    max-width: 480px;

    &::backdrop {
      background: rgba(0, 0, 0, 0.5);
    }

    & h2 {
      color: var(--white, #fff);
      text-align: center;
      font-family: Space Grotesk;
      font-size: 56px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin: 0;
    }

    & button {
      width: 100%;
    }
  }
`;
