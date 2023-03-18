import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import { Heading, VStack } from "@chakra-ui/react";

import Header from "../components/Header";

import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";

function ProjectPage() {
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
          <Heading as="h1">Coming soon more projects...</Heading>
        </VStack>
      </FullScreenSection>
      <Footer />
    </main>
  );
}

export default ProjectPage;
