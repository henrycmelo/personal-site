import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Button, Heading} from "@chakra-ui/react";
import Cards from "./Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAlertContext } from "../context/alertContext";
import ScrollReveal from "../hooks/ScrollReveal";



const projects = [
  {
    title: "Building an online learning platform w/ DJANGO",
    description:
      "Developed using Python/HTML/Bootstrap, a platform where instructors can create their online courses and its exams.",
    getImageSrc: () => require("../images/python.png"),
    path: "/djangopage",
    id:'djangoimage'
   
  },
  {
    title: "Building a dynamic web app with React, Chakra and Formik",
    description:
      "My personal website feature the combination of these libraries allowed for the creation of an interactive and sleek user interface with efficient form management.",
    getImageSrc: () => require("../images/react.png"),
    path: '/mypersonalsite',
    
  },
  {
    title: "Enhancing user experience for better donations on support page",
    description:
      "Conducted a usability testing project on the Archives of American Art donation page, providing recommendations to improve its functionality, navigation, and search capabilities.",
    getImageSrc: () => require("../images/aaa.png"),
    path: "/casestudyarchives",
    
  },
  {
    title: "Designing a food menu app for a steakhouse",
    description:
      "Designed and conducted UX research for a user-friendly menu app for a popular steakhouse. Created intuitive UI to enhance the user experience and enable easy navigation.",
    getImageSrc: () => require("../images/steakhouseHP.png"),
    path:"/steakhouse"
  },
];




const ProjectsSection = ({ isHomePage }) => {
  const {  isLargerThanBase } = useAlertContext();

  const gridColumns = isLargerThanBase
    ? "repeat(2,minmax(0,1fr))"
    : "repeat(1,1fr)";

  return (
    <FullScreenSection
      backgroundColor="blue"
      isDarkBackground
      alignItems={'center'}
      spacing={8}
      width="100vw"
      p={{ base: 8, md: 32 }}
    >
      <ScrollReveal><Heading as="h1" id="projects-section">
        Featured Projects
      </Heading></ScrollReveal>

   
      <Box
        display="grid"
        gridTemplateColumns={gridColumns}
        gridGap={16}
        justifyContent={"center"}
        pb={4}
      >
        {projects.map((project) => (
          <ScrollReveal><Cards
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            to={project.path }
            
          /></ScrollReveal>
        ))}
      </Box>
      {isHomePage &&
      <Box  justifyContent={'center'}>
        
        
      <ScrollReveal><Button  gap={4}>
      <Link to="/projects">
        View Other Projects <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </Button></ScrollReveal>
   
      </Box>
}
     

      
        
   
    </FullScreenSection>
  );
};

export default ProjectsSection;
