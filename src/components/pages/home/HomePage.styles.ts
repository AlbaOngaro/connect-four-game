import { css } from "@emotion/react";

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const header = css`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

export const main = css`
  display: grid;
  grid-auto-rows: 1fr;
  gap: 24px;
`;

export const button = css`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & img {
    width: 82px;
    height: 42px;
  }
`;

export const dialog = css`
  border-radius: 40px;
  border: 3px solid var(--black, #000);
  background: var(--white, #fff);
  box-shadow: 0px 10px 0px 0px #000;
  width: 480px;
  flex-shrink: 0;
  padding: 32px;
	position: relative;
	overflow: visible;

	&::backdrop {
		background: var(--purple, #7945FF);
	}

	&:focus {
		outline: none;
	}

  & h2 {
    color: var(--black, #000);
    text-align: center;
    font-size: 56px;
    font-family: Space Grotesk;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 0 32px;
  }

  & h6 {
    color: var(--purple, #7945ff);
    font-size: 20px;
    font-family: Space Grotesk;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 0 16px;
  }

  & p {
    color: var(--black, #000);
    font-size: 16px;
    font-family: Space Grotesk;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

	& ol {
		padding: 0 0 0 16px;
		& li {

			&::marker {
				margin-right: 8px;
			}
		}
	}

	& button {
		width: 64px;
		height: 64px;
		padding: 0;
		margin: 0;
		position: absolute;
		bottom: -32px;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 100vw;
		overflow: hidden;
	}
`;
