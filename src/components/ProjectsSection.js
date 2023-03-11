import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Button, Heading} from "@chakra-ui/react";
import Cards from "./Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAlertContext } from "../context/alertContext";

const projects = [
  {
    title: "Building an online learning platform w/ DJANGO",
    description:
      "Developed using Python/HTML/Bootstrap, a platform where instructors can create their online courses and its exams.",
    getImageSrc: () => require("../images/python.jpg"),
    path: "djangopage",
    path2: '/projects/djangopage'
  },
  {
    title: "Building a dynamic web app with React, Chakra and Formik",
    description:
      "My personal website feature the combination of these libraries allowed for the creation of an interactive and sleek user interface with efficient form management.",
    getImageSrc: () => require("../images/react.jpg"),
    path: '/mypersonalsite',
    path2: '/projects/mypersonalsite'
  },
  {
    title: "Enhancing user experience for better donations on support page",
    description:
      "Conducted a usability testing project on the Archives of American Art donation page, providing recommendations to improve its functionality, navigation, and search capabilities.",
    getImageSrc: () => require("../images/aaa.jpg"),
    path: "casestudyarchives",
    path2: "/projects/casestudyarchives"
  },
  {
    title: "Designing a food menu app for a steakhouse",
    description:
      "Designed and conducted UX research for a user-friendly menu app for a popular steakhouse. Created intuitive UI to enhance the user experience and enable easy navigation.",
    getImageSrc: () => require("../images/steakhouse.jpg"),
  },
];

const ProjectsSection = ({ isHomePage }) => {
  const { handleClickToTop, isLargerThanBase } = useAlertContext();

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
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>

   
      <Box
        display="grid"
        gridTemplateColumns={gridColumns}
        gridGap={16}
        justifyContent={"center"}
        pb={4}
      >
        {projects.map((project) => (
          <Cards
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            to={isHomePage? project.path : project.path2 }
            
          />
        ))}
      </Box>
      {isHomePage &&
      <Box  justifyContent={'center'}>
        
      <Link to="/projects">
              <Button onClick={handleClickToTop} gap={4}>
                {" "}
                View Other Projects <FontAwesomeIcon icon={faArrowRight} />{" "}
              </Button>
            </Link>
      </Box>
}
     

      
        
   
    </FullScreenSection>
  );
};

export default ProjectsSection;
