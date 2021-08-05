import styles from "../public/success.module.css";
import {
  Box,
  Button,
  Center,
} from "@chakra-ui/react";

function Success() {
  return(
    <div className="container">

    <Box
      backgroundImage="url('/public/Duong.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    />

      <br /><br />

      <Center
      bg="green"
      maxWidth="25%"
      p={4} color="white"
      align="center"
      margin="auto">
        Message sent 👍. We'll reply soon. Enjoy your day!
      </Center>

      <br /><br />

      <Center
      margin="auto"
      align="center">
        <a
        href="/contact">
          <Button
            mt={4}
            colorScheme="teal"
            margin="auto">
            OK
          </Button>
        </a>
      </Center>

      <br /><br />

    </div>
);
}

export default Success
