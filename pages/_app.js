import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'

import '../styles/index.css'
import theme from '../chakra-theme'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider resetCSS theme={theme}>
    <ColorModeProvider
      options={{
        useSystemColorMode: true,
      }}
    >
      <Component {...pageProps} />
    </ColorModeProvider>
  </ChakraProvider>
}

export default MyApp
