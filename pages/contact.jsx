import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Textarea
} from "@chakra-ui/react";
import {
  Formik,
  Form,
  Field,
  useFormikContext,
  useFormik
} from 'formik';
import React from 'react'


{/*https://chakra-ui.com/docs/form/form-control
https://formik.org/docs/overview
https://chakra-ui.com/docs/form/textarea
https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645
  */}


function Contact() {

  const formik = useFormik({
     initialValues: {
       email: '',
       text: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

  function validateInput(value) {
    let error
    if (!value) {
      error = "Email is required"
    } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
         ) {
           error = "Invalid email address"
         }
    return error
  }

  return (
    <Formik>
      {(props) => (
        <Form onSubmit={formik.handleSubmit}>
          <Field name="email" validate={validateInput}>
            {({ field, form }) => (
              <FormControl id="email" isInvalid={form.errors.email && form.touched.email} isRequired>
                <FormLabel>Email</FormLabel>
                <Input {...field} id="email" type="email" placeholder="bruce@wayne.com" {...formik.getFieldProps('email')} />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                <FormHelperText>Email is required to reply. We'll never share it ✋.</FormHelperText>
              </FormControl>
            )}
          </Field>

          <Field name="text">
            {({ field, form }) => (
              <FormControl id="text">
                <FormLabel>Message</FormLabel>
                <Textarea type="text" placeholder="what do you want to tell us?" {...formik.getFieldProps('text')} />
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
