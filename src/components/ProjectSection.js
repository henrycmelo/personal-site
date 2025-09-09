import React, { useState, useEffect } from "react";
import { Box, Grid, GridItem, Text, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import "animate.css";
import { useAlertContext } from "../context/alertContext";
import { projectsAPI } from "../api/projectsApi";
import Cards from "./Cards";

const ProjectSection = () => {
  const { capitalizeEachWord } = useAlertContext();
  const titleText = capitalizeEachWord("Recent Projects");
  
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await projectsAPI.getAllProjects();
        setProjects(data);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error('Error loading projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading projects...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box py={10}>
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Text as="h2" textStyle={"h2"} pb={6}>
        {titleText}
      </Text>

      <Grid
        w={"100%"}
        templateColumns={{ base: "1fr", lg:"repeat(2, 1fr)", '2xl': "repeat(3, 1fr)" }}
        gap={{ base: 6, md: 6 }}
      >
        {projects.map((project) => (
          <GridItem key={project.id}>
            <Cards
              title={project.title}
              description={project.description}
              keywords={project.keywords}
              path={project.path}
              imageSrc={project.image_url} // Now using Supabase URL
              logoSrc={project.logo_urls || []} // Now using Supabase URLs array
              type={project.type}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectSection;