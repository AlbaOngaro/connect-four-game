import { Global } from "@emotion/react";
import type { AppProps } from "next/app";

import { GameStateProvider } from "providers/game-state/GameStateProvider";
import { globalStyles } from "styles/global.styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <GameStateProvider>
        <Component {...pageProps} />
      </GameStateProvider>
    </>
  );
}
