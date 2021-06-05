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
            <a className="mx-3 lg:text-xl">Product Toolbox</a>
          </Link>
          <Spacer />

          <Spacer />
          <Link href="/about">
            <a className="mx-3 lg:text-xl hover:underline">About</a>
          </Link>
          <Link href="/contact">
            <a className="mx-3 lg:text-xl hover:underline">Contact</a>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
