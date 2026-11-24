import { Box, Flex, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import Container from "./container";

export default function Navbar() {
  return (
    <Box
      as="header"
      background="white"
      borderBottomWidth="1px"
      borderBottomColor="brown.100"
    >
      <Container>
        <Flex as="nav" minH="72px" align="center">
          <Link href="/" className="mx-3 lg:text-xl">
            Product Toolbox
          </Link>
          <Spacer />
          <Link href="/about" className="mx-3 lg:text-xl hover:underline">
            About
          </Link>
          <Link href="/contact" className="mx-3 lg:text-xl hover:underline">
            Contact
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
