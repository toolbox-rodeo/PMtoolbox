import { ChakraProvider } from "@chakra-ui/react";
import { Work_Sans } from "next/font/google";
import NProgress from "nprogress";
import Router from "next/router";

import Meta from "../components/meta";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import theme from "../chakra-theme";
import "../styles/global.css";
import "../styles/nprogress.css";

// Downloaded at build time and served from this site, so visitors' browsers
// never contact Google Fonts. Only the regular weight was ever loaded.
const workSans = Work_Sans({ subsets: ["latin"], weight: "400" });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-work-sans: ${workSans.style.fontFamily};
        }
      `}</style>
      <Meta />
      {/* Tailwind's preflight is the CSS reset, see styles/global.css */}
      <ChakraProvider theme={theme} resetCSS={false}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}
