import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `Work Sans` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    brown: {
      100: "#E2DDD5",
      500: "#8E877B",
    }
  },
  textStyles: {
    sm:{
      fontSize: "13px",
      fontWeight: "semibold",
    },
    xs:{
      fontSize: "12px",
      fontWeight: "semibold",
    }
  },
  fonts,
  breakpoints,
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "bold",
      },
      sizes: {
        md: {
          fontSize: "lg",
        },
      },
    },
  },
})

export default theme