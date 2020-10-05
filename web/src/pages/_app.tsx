import react from "react";
import { ChakraProvider } from "@chakra-ui/core";

import theme from "../theme";
import { AppProps } from "next/app";
import MSTProvider from "../mst";

function MyApp({ Component, pageProps }: AppProps) {
  // Make useLayoutEffect isomorphic...
  if (typeof window === "undefined") {
    react.useLayoutEffect = react.useEffect;
  }

  return (
    <ChakraProvider resetCSS theme={theme}>
      <MSTProvider>
        <Component {...pageProps} />
      </MSTProvider>
    </ChakraProvider>
  );
}

export default MyApp;
