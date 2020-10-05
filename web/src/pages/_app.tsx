import { ChakraProvider } from "@chakra-ui/core";

import theme from "../theme";
import { AppProps } from "next/app";
import MSTProvider from "../components/MSTProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <MSTProvider>
        <Component {...pageProps} />
      </MSTProvider>
    </ChakraProvider>
  );
}

export default MyApp;
