import NextLink from "next/link";
import { Button, Center } from "@chakra-ui/react";

function Success() {
  return (
    <div className="container">
      <br />
      <br />

      <Center
        bg="green"
        maxWidth="25%"
        p={4}
        color="white"
        align="center"
        margin="auto"
      >
        Message sent 👍. We'll reply soon. Enjoy your day!
      </Center>

      <br />
      <br />

      <Center margin="auto" align="center">
        <Button
          as={NextLink}
          href="/contact"
          mt={4}
          colorScheme="teal"
          margin="auto"
        >
          OK
        </Button>
      </Center>

      <br />
      <br />
    </div>
  );
}

export default Success;
