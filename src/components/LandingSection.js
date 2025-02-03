import React from "react";
import "animate.css";
import VerticalProgressBar from "./VerticalProgressBar";
import {
  Box,
  Grid,
  Divider,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Footer from "./Footer";
import LandingText from "./LandingText";
import ProjectSection from "./ProjectSection";
import ReviewsCarousel from "./ReviewCarousel";
import TimelineCareer from "./TimelineCareer";
import ContactMeSection from "./ContactMeSection";
import AboutMeSection from "./AboutMeSection";
import ResponsiveMenu from "./ResponsiveMenu";
import { useAlertContext } from "../context/alertContext";


const LandingSection = () => {
  const showMenu = useBreakpointValue({base:false, md:true})
  const {sections}  = useAlertContext()

  return (
    <Grid
        templateColumns={{ base: "1fr", md:"230px 3px 1fr", lg: "320px 3px 1fr" }}
        height="100vh"
        alignItems="start"
        w={"100%"}
        overflow={"hidden"}
      >
        {showMenu ? (
        <Stack
          display={{ base: "none", md: "block" }}
          visibility={{ base: "hidden", md: "visible" }}
          position={"sticky"}
          height="fit-content"
          spacing={48}
          
          
          
        >
          <VerticalProgressBar isHomePage sections={sections} />
          
        </Stack>
        ):(
        <ResponsiveMenu isHomePage sections={sections} /> 
        )}

        
        
        <Divider orientation="vertical" variant="thick" />

        <Box overflowY="auto" height={"100%"} data-scroll-container='true'>
          {/* ALL CONTENT HERE */}

         
          <section>
            <Box id="home" py={24} px={12}>
              <LandingText />    
            </Box>
          </section>
          <Divider variant={'dividerSection'}/>
          <section>
            <Box id="projects" py={24} px={12}>
              <ProjectSection />    
            </Box>
          </section>

          <Divider variant={'dividerSection'}/>

          <section>
            <Box id="reviews"  py={24} px={12}>
            <ReviewsCarousel />    
            </Box>
          </section>

          <Divider variant={'dividerSection'}/>

          <section>
            <Box id="career"  py={24} px={12} >
            <TimelineCareer />   
            </Box>
          </section>
          <Divider variant={'dividerSection'}/>

          <section>
            <Box id="aboutme"  py={24} px={12} >
              <AboutMeSection />
              
            </Box>
          </section>
          <Divider variant={'dividerSection'}/>

          <section>
            <Box id="contact"  py={24} px={12} >
            <ContactMeSection />
            </Box>
          </section>

          
          <Divider variant="thick" />
          <footer>
            <Box   >
            <Footer />
            </Box>
          </footer>
            </Box>
            </Grid>

  )
};

export default LandingSection;