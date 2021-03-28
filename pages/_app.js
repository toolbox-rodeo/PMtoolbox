import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import theme from '../chakra-theme'
import '../styles/index.css'
import NavBar from "../components/navbar";

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {

  return<>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <NavBar/>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </>
}

export default MyApp
