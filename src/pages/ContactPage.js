import React, {useState, useEffect} from "react";
import FullScreenSection from "../components/FullScreenSection";
import { Heading, VStack, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import ContactMeSection from "../components/ContactMeSection";
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import { useAlertContext } from "../context/alertContext";



function ContactPage () {
  const {  colorMode} = useAlertContext();
  const [isLoading, setIsLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 1500)
  }, []);
  return (
    <main>
      <Header/>
      <FullScreenSection
        backgroundColor={colorMode==='light'? "light":'dark'}
        alignContent="center"
        alignItems='center'
        spacing={8}
        width="100vw"
        pt={48}
        pl={{ base: 8, md: 32 }}
        pb={32}
        pr={{ base: 8, md: 32 }}
      >
        <VStack alignItems="start" justifyContent="left">
          <Heading
            color={colorMode==='light'? "dark":'light'}
            size={{ base: "3xl", md: "4xl" }}
            textStyle="h2"
          >
            Contact Me
          </Heading>
        </VStack>
      </FullScreenSection>
      <FullScreenSection
        layerStyle={colorMode==='light'?'normalDark':'gradientBack'}
       color='light'
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >
         <VStack alignItems={"center"} justifyContent={"center"}>
          <Text textStyle="body" fontSize={"xl"} align={"center"}>
          Get in touch with me to discuss your project and see how we can work together. 
          Fill out the contact form or send me an email at <a href="mailto:hcasti40@pratt.edu" style={{ color: colorMode==='light'? "#007183" : '#00A4BD'}}>hcasti40@pratt.edu </a> 
          and I'll get back to you as soon as possible.
          </Text>
          </VStack>

      </FullScreenSection>
      <ContactMeSection />
     
      <Footer />
      <Alert />
     
      
    </main>
  );
}

export default ContactPage;
