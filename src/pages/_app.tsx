import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "store";

import { globalStyles } from "styles/global.styles";

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <Provider store={store}>
      <Global styles={globalStyles(asPath === "/game", null)} />
      <Component {...pageProps} />
    </Provider>
  );
}
