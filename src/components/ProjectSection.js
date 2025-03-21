// import React, { useState, useEffect } from "react";
import { Box, Grid, GridItem,Text} from "@chakra-ui/react";
import "animate.css";
import { useAlertContext } from "../context/alertContext";
// import { projectsAPI } from "../api/projectsApi";
import Cards from "./Cards";
import projects from "../utils/projects";
const ProjectSection = () => {
  const { capitalizeEachWord } = useAlertContext();
  const titleText = capitalizeEachWord("Recent Projects");
//   const [projects, setProjects] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const data = await projectsAPI.getAllEntries();
//         console.log(data);
//         setProjects(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

  return (
    <Box>
      <Text as="h2" textStyle={"h2"} pb={6}>
        {titleText}{" "}
      </Text>

      <Grid
        w={"100%"}
        templateColumns={{ base: "1fr", lg:"repeat(2, 1fr)", '2xl': "repeat(3, 1fr)" }}
        gap={{ base: 6, md: 6 }}
      >
        {projects.map((project, index) => (
          
          <GridItem key={index}>
            <Cards
              
              title={project.title}
              description={project.description}
              keywords={project.keywords}
              path={project.path}
              imageSrc={project.getImageSrc()}
              logoSrc={project.getLogosSrc()}
              type={project.type}
               
            />
          </GridItem>
        ))}
      </Grid>

      
    </Box>
  );
};

export default ProjectSection;
