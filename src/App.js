import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import theme from "../src/style/theme.js";
import CianaResearchPage from "./pages/CianaResearchPage.js";
import LandingSection from "./components/LandingSection.js";
import ProjectSectionPage from "./pages/ProjectSectionPage.js";
import ReviewCarouselPage from "./pages/ReviewCarouselPage.js";
import CareerTimelinePage from "./pages/CareerTimelinePage.js";
import AboutmePage from "./pages/AboutmePage.js";
import ContactPage from "./pages/ContactPage.js";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <main>
          <Routes>
            <Route path="/" element={<LandingSection />} />
            <Route path="/projects/cianaresearch" element={<CianaResearchPage />} />
            <Route path="/projects" element={<ProjectSectionPage />} >
            </Route>
            <Route path="/reviews" element={<ReviewCarouselPage />} />
            <Route path="/career" element={<CareerTimelinePage />} />
            <Route path="/aboutme" element={<AboutmePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
