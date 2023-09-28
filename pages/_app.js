import { globalStyles } from "@/styles/global";
import { Global } from "@emotion/react";
import Nav from "@/src/containers/nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
