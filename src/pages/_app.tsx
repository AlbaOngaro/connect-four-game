import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store";
import { useSelector } from "store/hooks";
import { getMode } from "store/selectors";

import { globalStyles } from "styles/global.styles";

function GlobalStylesWrapper() {
  const { mode } = useSelector((state) => ({
    mode: getMode(state),
  }));

  return <Global styles={globalStyles(mode !== null, null)} />;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStylesWrapper />
      <Component {...pageProps} />
    </Provider>
  );
}
