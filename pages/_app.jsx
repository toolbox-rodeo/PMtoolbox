import { ChakraProvider } from "@chakra-ui/react";
import NProgress from "nprogress";
import Router from "next/router";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import theme from "../chakra-theme";
import "../public/global.css";
import "../public/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <Navbar />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
