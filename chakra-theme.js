import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // The site is designed for a light background only. Following the system
  // colour mode rendered dark Chakra components on the light page.
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  breakpoints: {
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em",
  },
  colors: {
    black: "#16161D",
    brown: {
      100: "#E2DDD5",
      500: "#8E877B",
    },
    // Chakra v2 dropped its social media palettes. Tag badges still use them
    // (see components/constants.jsx), so they are kept here with v1's values.
    whatsapp: {
      50: "#dffeec",
      100: "#b9f5d0",
      200: "#90edb3",
      300: "#65e495",
      400: "#3cdd78",
      500: "#22c35e",
      600: "#179848",
      700: "#0c6c33",
      800: "#01421c",
      900: "#001803",
    },
    twitter: {
      50: "#E5F4FD",
      100: "#C8E9FB",
      200: "#A8DCFA",
      300: "#83CDF7",
      400: "#57BBF5",
      500: "#1DA1F2",
      600: "#1A94DA",
      700: "#1681BF",
      800: "#136B9E",
      900: "#0D4D71",
    },
    facebook: {
      50: "#E8F4F9",
      100: "#D9DEE9",
      200: "#B7C2DA",
      300: "#6482C0",
      400: "#4267B2",
      500: "#385898",
      600: "#314E89",
      700: "#29487D",
      800: "#223B67",
      900: "#1E355B",
    },
  },
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
});

export default theme;
