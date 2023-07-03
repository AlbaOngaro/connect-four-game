import { css } from "@emotion/react";

export const globalStyles = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html,
	body {
		margin: 0;
		background-color: #5C2DD5;
		font-family: "Space Grotesk";
	}
`;