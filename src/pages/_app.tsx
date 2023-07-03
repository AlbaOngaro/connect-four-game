import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { GameStateProvider } from "providers/game-state/GameStateProvider";
import { globalStyles } from "styles/global.styles";

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <>
      <Global styles={globalStyles(asPath === "/game")} />
      <GameStateProvider>
        <Component {...pageProps} />
      </GameStateProvider>
    </>
  );
}
