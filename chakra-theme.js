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
      500: "#8E877B",
    }
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
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
        fontWeight: "bold", // Normally, it is "semibold"
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