import { css } from "@emotion/react";

export const globalStyles = (isGamePage: boolean) => css`
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
    background-color: #7945FF; 

		&::after {
			content: "";
			width: 100%;
			height: ${isGamePage ? "15%" : "100%"};
			display: block;
			position: fixed;
			background-color: #5C2DD5;
			z-index: -1;
			bottom: 0;
			left: 0;
			right: 0;
			border-radius: ${isGamePage ? "60px 60px 0px 0px": 0};
			transition: all .5s ease-in-out;
		}
  }
`;
