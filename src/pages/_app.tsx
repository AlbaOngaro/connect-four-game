import { Global } from "@emotion/react";
import type { AppProps } from "next/app";

import { CurrentPlayerProvider } from "providers/current-player/CurrentPlayerProvider";
import { globalStyles } from "styles/global.styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <CurrentPlayerProvider>
        <Component {...pageProps} />
      </CurrentPlayerProvider>
    </>
  );
}
