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
  Text
} from "@chakra-ui/react";
import {
  Formik,
  Form,
  Field,
  useFormikContext,
  useFormik
} from 'formik';


export default function contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

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


  function validateInput(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
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

      <Formik>
        <Form className={styles.main}>

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
              onClick={(e)=>{handleSubmit(e)}}>
              Submit
            </Button>
            <br/><br/><br/><br/><br/><br/>
          </Box>

        </Form>
      </Formik>
    </div>
  )
}

*/}


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

      <Formik>
        {(props) => (
          <Box margin="auto" width="75%" maxWidth="700px">
          <br />

            <Field name="name">
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

            <Form>
              <Field name="email" validate={validateInput}>
                {({ field, form }) => (
                  <FormControl id="email" isInvalid={form.errors.email && form.touched.email} isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input {...field}
                    id="email"
                    type="email"
                    placeholder="bruce@wayne.com"
                    onChange={(e)=>{setMessage(e.target.value)}}
                    name='message' />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    <FormHelperText>Email is required to reply. We'll never share it ✋.</FormHelperText>
                  </FormControl>
                )}
              </Field>
              <br />

              <Field name="text">
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
