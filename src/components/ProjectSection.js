import React, { useState, useEffect } from "react";
import { Box, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import "animate.css";
import { useAlertContext } from "../context/alertContext";
import { projectsAPI } from "../api/projectsApi";
import Cards from "./Cards";
import MuteButton from "./MuteButton";
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
      <Text as="h2" textStyle={"h2"}>
        {titleText}{" "}
      </Text>

      <Grid
        w={"100%"}
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={{ base: 2, md: 6 }}
      >
        {projects.map((project, index) => (
          <GridItem>
            <Cards
              key={index}
              title={project.title}
              description={project.description}
              role={project.role}
              to={"cianaresearch"}
              imageSrc={project.getImageSrc()}
            />
          </GridItem>
        ))}
      </Grid>

      <MuteButton>More about me </MuteButton>
    </Box>
  );
};

export default ProjectSection;
