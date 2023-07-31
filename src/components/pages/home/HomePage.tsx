/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";

import { useSelector } from "store/hooks";
import { getMode } from "store/selectors";

import { MenuContents } from "./contents/menu/MenuContents";
import Head from "next/head";

const DynamicGameContents = dynamic(
  () => import("./contents/game/GameContents").then((mod) => mod.GameContents),
  {
    loading: () => <p>Loading...</p>,
  },
);

export function HomePage() {
  const { mode } = useSelector((state) => ({
    mode: getMode(state),
  }));

  return (
    <>
      <Head>
        <title>Connect Four</title>
      </Head>

      {mode !== null ? <DynamicGameContents /> : <MenuContents />}
    </>
  );
}
