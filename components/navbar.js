import {
  Box,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Container from "./container";
import Link from "next/link";

export default function NavBar() {
  return (
    <Box boxShadow="0px 1px 0px #E2DDD5" mb="20">
      <Container>
          <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'72px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            align={'center'}>
            <Link href="/">
              <a className="hover:underline font-bold">
                <Text fontSize="lg">
                  PRODUCT TOOLBOX
                </Text>
              </a>
            </Link>
          </Flex>
      </Container>
    </Box>
  );
}
