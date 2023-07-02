import { AppLayout } from "@/components/AppLayout";
import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const customComponents = {
    Link: {
      baseStyle: {
        textDecoration: "underline",
        // color: "blue",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  };

  const theme = extendTheme({
    components: customComponents,
  });

  return (
    <ChakraProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}
