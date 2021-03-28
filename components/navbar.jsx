import { Box, Flex, Text } from "@chakra-ui/react";
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
            <a className="hover:underline font-bold">
              <Text fontSize="lg">PRODUCT TOOLBOX</Text>
            </a>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
