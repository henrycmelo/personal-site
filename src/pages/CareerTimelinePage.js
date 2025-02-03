import React from "react";
import "animate.css";
import {
  Grid,
  useBreakpointValue,
  Stack,
  Box,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import ResponsiveMenu from "../components/ResponsiveMenu";
import { useAlertContext } from "../context/alertContext";
import VerticalProgressBar from "../components/VerticalProgressBar";
import Footer from "../components/Footer";
import TimelineCareer from "../components/TimelineCareer";

const CareerTimelinePage = () => {
  const showMenu = useBreakpointValue({ base: false, md: true });
  const { sections } = useAlertContext();
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "230px 3px 1fr",
        lg: "320px 3px 1fr",
      }}
      height="100vh"
      alignItems="start"
      w={"100%"}
      overflow={"hidden"}
    >
      {showMenu ? (
        <Stack
          display={{ base: "none", md: "block" }}
          visibility={{ base: "hidden", md: "visible" }}
          position={"sticky"}
          height="fit-content"
          spacing={48}
        >
          <VerticalProgressBar isHomePage isOtherPage sections={sections} />
        </Stack>
      ) : (
        <ResponsiveMenu isHomePage isOtherPage sections={sections} />
      )}

      <Divider orientation="vertical" variant="thick" />

      <Box overflowY="auto" height={"100vh"} data-scroll-container="true" display="flex" flexDirection={'column'}>
        {/* ALL CONTENT HERE */}
        <section>
          <Box id="career" py={24} px={12}>
            <TimelineCareer />
          </Box>
          
        </section>
        <Spacer />
        
        <Divider variant="thick" />
        <footer>
          <Box>
            <Footer />
          </Box>
        </footer>
      </Box>
    </Grid>
  );
};

export default CareerTimelinePage;
