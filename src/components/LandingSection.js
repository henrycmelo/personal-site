import React from "react";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";
import "animate.css";
import { dataLanding } from "../utils/dataLanding";
import CustomizedButton from "./CustomizedButton";
import VerticalProgressBar from "./VerticalProgressBar";
import {
  Box,
  VStack,
  Text,
  Image,
  Grid,
  GridItem,
  Divider,
  HStack,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Flex,
  Stack
} from "@chakra-ui/react";
import { faBriefcase, faComment, faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import LandingText from "./LandingText";
import DividerSection from "./DividerSection";
import ProjectSection from "./ProjectSection";
import ReviewsCarousel from "./ReviewCarousel";
import TimelineCareer from "./TimelineCareer";
import ContactMeSection from "./ContactMeSection";


const LandingSection = () => {
  const sections = [
    { id: "home", label: "Home", icon:faHome },
    { id: "projects", label: "Projects", icon:faBriefcase },
    { id: "reviews", label: "What people say about me", icon:faComment },
    { id: "career", label: "Career timeline", icon:faUser },
    { id: "contact", label: "contact", icon:faEnvelope },
    
  ]

  return (
    <Grid
        templateColumns={{ base: "1fr", md: "320px 3px 1fr" }}
        height="100vh"
        alignItems="start"
        w={"100%"}
        overflow={"hidden"}
      >
        <Stack
          display={{ base: "none", md: "block" }}
          visibility={{ base: "hidden", md: "visible" }}
          position={"sticky"}
          height="fit-content"
          spacing={48}
          
          
        >
          <VerticalProgressBar isHomePage sections={sections} />
          
        </Stack>
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
            <Box id="contact"  py={24} px={12} >
            <ContactMeSection />
            </Box>
          </section>
            </Box>
            </Grid>

  )
};

export default LandingSection;