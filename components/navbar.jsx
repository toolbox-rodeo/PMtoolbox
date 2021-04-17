import { Box, Flex, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import Container from "./container";

export default function Navbar() {
  return (
    <Box
      borderBottomColor="#E2DDD5"
      borderWidth="1px"
      borderLeft="0"
      borderRight="0"
      borderTop="0"
      background="white"
    >
      <Container>
        <Flex
          minH="72px"
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          align="center"
        >
          <Link href="/">
           <a>
            <img src="/favicon/favicon-32x32.png" alt="Logo" />
           </a>
          </Link>
          <Spacer />
            <h1 className="mx-3 lg:text-5xl">
              🧰 Product Toolbox 🔧&trade;
            </h1>
          <Spacer />
          <Link href="/about">
            <a className="mx-3 lg:text-xl hover:underline">
              About
            </a>
          </Link>
        </Flex>
      </Container>

    </Box>
  );
}
