import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Cards from "./Cards";

const projects = [
  {
    title: "Building an Online Learning Platform w/ DJANGO",
    description:
      "Developed using Python/HTML/Bootstrap, a platform where instructors can create their online courses and its exams",
    getImageSrc: () => require("../images/python.jpg"),
  },
  {
    title: "Building a dynamic web app with React, Chakra and Formik",
    description:
      "My personal website feature he combination of these libraries allowed for the creation of an interactive and sleek user interface with efficient form management",
    getImageSrc: () => require("../images/react.jpg"),
  },
  {
    title: "Enhancing User Experience for Better Donations on Support Page",
    description:
      "Conducted a usability testing project on the Archives of American Art donation page, providing recommendations to improve its functionality, navigation, and search capabilities",
    getImageSrc: () => require("../images/aaa.jpg"),
    path: '/casestudyarchives'
  },
  {
    title: "Designing a food menu app for a steakhouse",
    description:
      "Designed and conducted UX research for a user-friendly menu app for a popular steakhouse. Created intuitive UI to enhance the user experience and enable easy navigation.",
    getImageSrc: () => require("../images/steakhouse.jpg"),
  },
];

const ProjectsSection = () => {

  return (
    <FullScreenSection
      backgroundColor="blue"
      isDarkBackground
      alignItems={{ base: 'center', md: "flex-start", lg: 'center' }}
      spacing={8}
      width='100vw'
      p={{ base: 8, md: 32 }}

    >
      <Heading as="h1" id="projects-section">Featured Projects</Heading>



      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,minmax(0,1fr))" }}
        // The md breakpoint is a default breakpoint in Chakra UI that corresponds to screens with a width of 48em (768px) or larger
        gridGap={16}
        
        justifyContent={'center'}
        
        pb={4}
      >



        {projects.map((project) => (
          <Cards
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            to={project.path}
            a

          />
        ))}


      </Box>



    </FullScreenSection>
  );
};

export default ProjectsSection;
