import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'

import NavBar from "../components/navbar";
import theme from '../chakra-theme'
import '../public/tailwind.css'

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
