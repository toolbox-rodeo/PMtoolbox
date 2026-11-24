import { useState } from "react";
import { useRouter } from "next/router";
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

// Netlify Forms picks up submissions that are POSTed to a static file. The
// form itself is declared in public/__forms.html; keep the field names in sync.
const NETLIFY_FORM_ENDPOINT = "/__forms.html";

export default function Contact() {
  const router = useRouter();
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    const body = new URLSearchParams(new FormData(event.currentTarget));
    try {
      const response = await fetch(NETLIFY_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) {
        throw new Error(`Form submission failed with ${response.status}`);
      }
      await router.push("/success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <div className={styles.container}>
      <Box align="center">
        <br />
        <br />
        <Text as="h1" fontSize="6xl">
          CONTACT US
        </Text>
        <br />
        <br />
      </Box>

      <form name="contact" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <FormControl id="name" className={styles.inputGroup}>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Tell us your name..." name="name" />
        </FormControl>
        <br />

        <FormControl id="email" className={styles.inputGroup} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="...and your email, so we can get back to you."
            name="email"
          />
          <FormHelperText>We'll never share it🤚</FormHelperText>
        </FormControl>
        <br />

        <FormControl id="message" className={styles.inputGroup} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            placeholder="What do you want to share with us?"
            name="message"
          />
        </FormControl>
        <br />

        <Box align="center">
          <br />
          <Text color="gray.400" maxWidth="700px">
            By submitting you agree that these data will be sent via AWS servers
            that may be located outside the EU.
          </Text>
          {status === "error" && (
            <Text color="red.500" mt={4} role="alert">
              Sorry, something went wrong sending your message. Please try
              again.
            </Text>
          )}
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            isLoading={status === "submitting"}
          >
            Submit
          </Button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>
      </form>
    </div>
  );
}
