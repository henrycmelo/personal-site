import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  Spinner

} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";
import CustomizedButton from "./CustomizedButton";


const ContactMeSection = () => {

  const { onOpen, onClose } = useAlertContext();
  const [isLoading, setLoading] = useState(false);
  const responses = [
    {
      type: 'error',
      message: 'Something went wrong, please try again later!',
    },
    {
      type: 'success',
      message: `Success, we will get back to you shortly!`
    }
  ]


  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }
  const onSubmit = (values, submitProps) => {

    setLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status)
        } else if (response.ok) {
          const successMessage = responses[1].message
          const successAlert = `${successMessage} Thanks for you submission ${values.firstName}`
          onOpen(responses[1].type, successAlert)
          submitProps.resetForm()
        } else {
          onClose("Something went wrong!")
        }

        return response
      })
      .catch(error => {
        const genericMessage = responses[0].message;
        const specificMessage = error.message;
        const message = `${genericMessage} error ${specificMessage}`
        onOpen(responses[0].type, message)
      })
      .finally(() => setLoading(false));;
  }



  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      comment: ''
    },
    onSubmit,
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),

      comment: Yup.string()
        .min(10, 'Too Short!')
        .max(200, 'Too Long!')
        .required('Required'),

    }),
  });










  return (
    <FullScreenSection
      backgroundColor="secondLight"

      alignItems={{ base: 'center', md: "flex-start", lg: 'center' }}
      spacing={8}
      width='100vw'
      pt={16}
      pl={16}
      pr={16}
      pb={8}
    >
      <Heading as="h1" id="contactme-section" color='dark'>Contact me</Heading>
      <VStack w='100%' alignItems='start' justifyContent='flex-start'  >

        <Box p={6} rounded="md" w="100%" >

          <form onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();

          }} //I am setting this initial render that if I get an error, the use is able to click again and receive a response
            method="post"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="contact" value="contact" />

            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName ? true : false}>
                <FormLabel htmlFor="firstName" textStyle='body'>Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  borderColor='blue'
                  borderWidth='2px'
                  focusBorderColor="yellow"
                  {...formik.getFieldProps('firstName')}

                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>


              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email ? true : false}>
                <FormLabel htmlFor="email" textStyle='body'>Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  borderColor='blue'
                  borderWidth='2px'
                  focusBorderColor="yellow"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && formik.errors.comment ? true : false}>
                <FormLabel htmlFor="comment" textStyle='body'>Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  borderColor='blue'
                  borderWidth='2px'
                  focusBorderColor="yellow"
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <CustomizedButton type="submit" colorScheme="blue" width="full" disabled={isLoading}>
                {isLoading ?  <div>Submitting...<Spinner/></div> : 'Submit'}
              </CustomizedButton>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
