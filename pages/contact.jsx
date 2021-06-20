import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react";
import { Formik,
  Form,
  Field
} from 'formik';


function Contact() {
  function validateName(value) {
    let error
    if (!value) {
      error = "Email is required"
    }
    return error
  }


  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}>
      {(props) => (
        <Form>
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl id="email" isInvalid={form.errors.name}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="bruce@wayne.com" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                <FormHelperText>We need your email to reply. We'll never share it 🤞.</FormHelperText>
              </FormControl>
            )}
          </Field>

          <Field name="message">
            {({ field, form }) => (
              <FormControl id="first-name">
                <FormLabel>Message</FormLabel>
                <Input placeholder="type your message here..." />
              </FormControl>
            )}
          </Field>

          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit">
            Submit
          </Button>
        </Form>
      )}
      </Formik>
)}

export default Contact
