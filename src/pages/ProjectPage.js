import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import { Heading, VStack, Box } from "@chakra-ui/react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";
import { useAlertContext } from "../context/alertContext";

const programmingProjects = [
  {
    title:
      "Exploring Restaurant Violations in NYC with Python, Plotly, and Dash",
    description:
      "This project utilizes Python, Plotly, and Dash to explore and visualize restaurant violations in New York City using the dataset from the Department of Health and Mental Hygiene.",
    getImageSrc: () => require("../images/dashHP.png"),
    path: "/dash",
    id: "dash",
  },
];

function ProjectPage() {
  const {  isLargerThanBase } = useAlertContext();

  const gridColumns = isLargerThanBase
    ? "repeat(2,minmax(0,1fr))"
    : "repeat(1,1fr)";
  return (
    <main>
      <Header />
      <FullScreenSection
        backgroundColor="light"
        alignContent="center"
        alignItems={{ base: "center", md: "center", xl: "center" }}
        spacing={8}
        width="100vw"
        pt={48}
        pl={{ base: 8, md: 32 }}
        pb={32}
        pr={{ base: 8, md: 32 }}
      >
        <VStack alignItems="start" justifyContent="left">
          <Heading
            color="dark"
            size={{ base: "3xl", md: "4xl" }}
            textStyle="h2"
          >
            All Projects
          </Heading>
        </VStack>
      </FullScreenSection>
      <ProjectsSection />
      <FullScreenSection
        backgroundColor="secondLight"
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >
        <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Heading as="h1">Programming Projects</Heading>
        </VStack>

        <Box
          display="grid"
          gridTemplateColumns={gridColumns}
          gridGap={16}
          justifyContent={"center"}
          pb={4}
        >
          {programmingProjects.map((project) => (
            <Cards
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
              to={project.path}
            />
          ))}
        </Box>
      </FullScreenSection>
      <Footer />
    </main>
  );
}

export default ProjectPage;
