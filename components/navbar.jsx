import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Container from "./container";

export default function Navbar() {
  return (
    <Box boxShadow="0px 1px 0px #E2DDD5">
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
