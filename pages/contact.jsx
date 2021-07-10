import Head from "next/head";
import styles from "../public/contact.module.css";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Textarea,
  Box,
  Text,
  useToast,
} from "@chakra-ui/react";

{/*
import {
  Formik,
  Form,
  Field,
  useFormikContext,
  useFormik
} from 'formik';
*/}


export default function contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const toast = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

      let data = {
        name,
        email,
        message
      }

      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
  }

{/*
  function validateEmail(value) {
     let error;
     if (!value) {
       error = 'Required';
     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
       error = 'Invalid email address';
     }
     return error;
   }
*/}

function Submit() {
  document.getElementById("Form").reset();
}

  return (
    <div className={styles.container}>

      <Box align="center">
        <br /><br />
        <Text fontSize="6xl">
          <h1>
            CONTACT US
          </h1>
        </Text>
        <br/><br/>
      </Box>

        <form id="Form" className={styles.main}>

          <FormControl
          id="name"
          className={styles.inputGroup}>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input
            type='text'
            placeholder="Tell us your name..."
            onChange={(e)=>{setName(e.target.value)}}
            name='name'/>
          </FormControl>
          <br/>

          <FormControl
          id="email"
          className={styles.inputGroup}
          isRequired>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
            type='email'
            placeholder="...and your email, so we can get back to you."
            onChange={(e)=>{setEmail(e.target.value)}}
            name='email'/>
            <FormHelperText>We'll never share it🤚</FormHelperText>
          </FormControl>
          <br/>

          <FormControl
          id="message"
          className={styles.inputGroup}
          isRequired>
            <FormLabel htmlFor='message'>Message</FormLabel>
            <Textarea
            type='text'
            placeholder="What do you want to share with us?"
            onChange={(e)=>{setMessage(e.target.value)}}
            name='message'/>
          </FormControl>
          <br/>

          <Box align="center">
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              onClick={(e)=>{
                handleSubmit(e);
                toast({
                  title: "Email sent.",
                  description: "We'll reply soon. Enjoy your day🌈",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
                Submit();
              }}>
              Submit
            </Button>
            <br/><br/><br/><br/><br/><br/>
          </Box>

        </form>
    </div>
  )
}


{/*

  return (
    <div className={styles.container}>
      <Box align="center">
        <br /><br />
        <Text fontSize="6xl">
          <h1>
            CONTACT US
          </h1>
        </Text>
        <br/><br/>
      </Box>

      <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
        }}
        onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
      >
        {(props) => (
        <Box margin="auto" width="75%" maxWidth="700px">
          <Form>

            <Field>
              {({ field, form }) => (
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                  type="text"
                  placeholder="Tell us your name..."
                  onChange={(e)=>{setName(e.target.value)}}
                  name='name'/>
                </FormControl>
              )}
            </Field>
            <br />

              <Field
              validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl
                  isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel>Email</FormLabel>
                    <Input
                    type="email"
                    placeholder="bruce@wayne.com"
                    onChange={(e)=>{setMessage(e.target.value)}}
                    name='email' />
                    <FormHelperText>Email is required to reply. We'll never share it ✋.</FormHelperText>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <br />

              <Field>
                {({ field, form }) => (
                  <FormControl id="text">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                    type="text"
                    placeholder="What do you want to share with us?"
                    onChange={(e)=>{setMessage(e.target.value)}}
                    name='message'/>
                  </FormControl>
                )}
              </Field>

              <Box align="center">
                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={props.isSubmitting}
                  type="submit"
                  onClick={(e)=>{handleSubmit(e)}}>
                  Submit
                </Button>
              </Box>

            </Form>
            <br /><br />
          </Box>
        )}
      </Formik>
    </div>
  )
}
*/}
