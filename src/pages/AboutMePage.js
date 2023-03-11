import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import { Heading, VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import AboutMeSection from "../components/AboutMeSection";
import Footer from "../components/Footer";

const aboutMe = "About Me";

function AboutMePage () {
  return (
    <main>
      <Header/>
      <FullScreenSection
        backgroundColor="light"
        alignContent="center"
        alignItems={{ base: "center", md: "center", xl: "flex-start" }}
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
            {aboutMe}
          </Heading>
        </VStack>
      </FullScreenSection>
      <AboutMeSection />
      <Footer />
    </main>
  );
}

export default AboutMePage;
