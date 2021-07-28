import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import styles from "../public/contact.module.css";

export default function contact() {
  const valuesDefault = {
    name: "",
    email: "",
    message: "",
  };
  const defaultInvalids = Object.keys(valuesDefault).reduce((acc, key) => {
    acc[key] = null;
    return acc;
  }, {});
  const [values, setValues] = useState({ ...valuesDefault });
  const [invalids, setInvalids] = useState({ ...defaultInvalids });
  const [submitted, setSubmitted] = useState(false);
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Re-validate
    const isValid = Object.keys(values).reduce(
      (acc, key) => acc && !validate(key, values[key]),
      true
    );
    // Block if invalid
    if (!isValid) {
      // Show toast
      toast({
        title: "Hold your horses. ✋",
        description:
          "There seems to be something off here. Please check your inputs and try again.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    // Go ahead otherwise
    console.log("Sending");
    const data = {
      ...values,
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("Response received");
    if (res.status === 200) {
      console.log("Request succeeded!");
      // Show toast
      toast({
        title: "Message sent. 👍",
        description: "We'll reply soon. Enjoy your day!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      debugger;
      // Update state
      setSubmitted(true);
      setValues({ ...valuesDefault });
      setInvalids({ ...defaultInvalids });
      // Reset form
      document.getElementById("Form").reset();
    } else {
      console.log("Request failed!");
      // Show toast
      toast({
        title: "Failed to send. 😳",
        description: "Sorry, something went wrong here. Please try again.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  function setValue(key, value) {
    switch (key) {
      case "name":
        break;
      case "email":
      case "message":
        validate(key, value);
        break;
    }
    setValues({
      ...values,
      [key]: value,
    });
  }

  function updateInvalids(update) {
    if (typeof update !== "object") return;
    setInvalids({
      ...invalids,
      ...update,
    });
  }

  function validate(key, value) {
    let error = null;
    const ERROR_REQUIRED = "Required field.";
    switch (key) {
      case "email":
        if (value === "") {
          error = ERROR_REQUIRED;
        } else {
          const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
          if (!emailRegex.test(value)) {
            error = "Invalid email address";
          }
        }
        break;
      case "message":
        if (value === "") {
          error = ERROR_REQUIRED;
        }
        break;
    }
    updateInvalids({
      [key]: error,
    });
    return error;
  }

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

      <form id="Form" className={styles.main}>
        <FormControl id="name" className={styles.inputGroup}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            type="text"
            placeholder="Tell us your name..."
            onChange={(e) => {
              setValue("name", e.target.value);
            }}
            name="name"
          />
        </FormControl>
        <br />

        <FormControl
          id="email"
          className={styles.inputGroup}
          isInvalid={!!invalids.email}
          isRequired
        >
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            placeholder="...and your email, so we can get back to you."
            onChange={(e) => {
              setValue("email", e.target.value);
            }}
            name="email"
          />
          <FormErrorMessage>{invalids.email}</FormErrorMessage>
          <FormHelperText>We'll never share it🤚</FormHelperText>
        </FormControl>
        <br />

        <FormControl
          id="message"
          className={styles.inputGroup}
          isInvalid={!!invalids.message}
          isRequired
        >
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            type="text"
            placeholder="What do you want to share with us?"
            onChange={(e) => {
              setValue("message", e.target.value);
            }}
            name="message"
          />
          <FormErrorMessage>{invalids.message}</FormErrorMessage>
        </FormControl>
        <br />

        <Box align="center">
          <br />
          <Text color="gray.400" maxWidth="300px">
            By submitting you agree that these data will be sent via AWS servers
            that may be located outside the EU.
          </Text>
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            onClick={handleSubmit}
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
