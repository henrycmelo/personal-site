  import React, {useEffect, useState} from "react";
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

  } from "@chakra-ui/react";
  import * as Yup from 'yup';
  import FullScreenSection from "./FullScreenSection";
  import useSubmit from "../hooks/useSubmit";
  import {useAlertContext} from "../context/alertContext";
  import CustomizedButton from "./CustomizedButton";


  const LandingSection = () => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();
    const [isInitialRender, setIsInitialRender] = useState(true) //using this hook to avoid infinite loop of onOpen

    const formik = useFormik({
      initialValues: {
          firstName:'',
          email:'',
          type: '',
          comment: ''
      },
      onSubmit: async (values,  ) => {
          await submit('url',values)
          
      }
          
  
        
      ,
      validationSchema: Yup.object().shape({
          firstName: Yup.string()
              .min(2,'Too Short!')
              .max(15,'Too Long!')
              .required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),

          comment:Yup.string()
              .min(10,'Too Short!')
              .max(200,'Too Long!')
              .required('Required'),

      }),
    });


    

    useEffect(()=>{
      if(isInitialRender){  //so now in this way the onOpen only is called when isInitialRender is true, so in this way the effect is re-run and the onOpen variable will not re-trigger the effect
        if(!isLoading && response){
          setIsInitialRender(false);
          if(response.type==='success'){ 
          onOpen(response.type, response.message)
          formik.resetForm()
        }
          if(response.type==='error'){
            onOpen(response.type, response.message)
          }
      
      }

    }
      
    },[onOpen,isLoading, response,isInitialRender,formik])

  
  

    return (
      <FullScreenSection
        backgroundColor="secondLight"
        
        alignItems={{base:'center', md:"flex-start", lg:'center'}}
        spacing={8}
        width='100vw'
        pt={16}
        pl={16}
        pr={16}
        pb={8}
      >
        <Heading as="h1" id="contactme-section" color='dark'>Contact me</Heading>
        <VStack w='100%'  alignItems='start'justifyContent='flex-start'  >
          
          <Box p={6} rounded="md" w="100%" >

            <form  onSubmit={(e) =>{e.preventDefault();
                                  formik.handleSubmit(); 
                                  setIsInitialRender(true)}} //I am setting this initial render that if I get an error, the use is able to click again and receive a response
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
                  {isLoading? 'Submitting...' : 'Submit'}
                </CustomizedButton>
              </VStack>
            </form>
          </Box>
        </VStack>
      </FullScreenSection>
    );
  };

  export default LandingSection;
