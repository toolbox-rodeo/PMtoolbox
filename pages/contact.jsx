import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import styles from "../public/contact.module.css";

export default function contact() {


  return (
    <div className={styles.container}>
      <Box align="center">
        <br />
        <br />
        <Text fontSize="6xl">
          <h1>CONTACT US</h1>
        </Text>
        <br />
        <br />
      </Box>

      <form id="Form" className={styles.main} data-netlify="true" name="contact" method="post" data-netlify-honeypot="bot-field">

      <input type="hidden" name="form-name" value="contact" />

        <FormControl id="name" className={styles.inputGroup}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            type="text"
            placeholder="Tell us your name..."
            name="name"
          />
        </FormControl>
        <br />

        <FormControl
          id="email"
          className={styles.inputGroup}
          isRequired
        >
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            placeholder="...and your email, so we can get back to you."
            name="email"
          />
          <FormHelperText>We'll never share it🤚</FormHelperText>
        </FormControl>
        <br />

        <FormControl
          id="message"
          className={styles.inputGroup}
          isRequired
        >
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            type="text"
            placeholder="What do you want to share with us?"
            name='message'/>
          </FormControl>
          <br/>

          <Box align="center">
            <br/>
            <Text
            color="gray.400"
            maxWidth="700px">By submitting you agree that these data will be sent via AWS servers that may be located outside the EU.</Text>
            <Button
              mt={4}
              colorScheme="teal"
              type="submit">
              Submit
            </Button>
            <br/><br/><br/><br/><br/><br/>
          </Box>
      </form>
    </div>
  );
}
