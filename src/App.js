import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import theme from "../src/style/theme.js";
import CianaResearchPage from "./pages/CianaResearchPage.js";
import ContactPage from "./pages/ContactPage";
import LandingSection from "./components/LandingSection.js";
import ProjectSectionPage from "./pages/ProjectSectionPage.js";
import ReviewCarouselPage from "./pages/ReviewCarouselPage.js";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <main>
          <Routes>
            <Route path="/" element={<LandingSection />} />
            <Route path="/contactme" element={<ContactPage />} />
            <Route path="/cianaresearch" element={<CianaResearchPage />} />
            <Route path="/projects" element={<ProjectSectionPage />} />
            <Route path="/reviews" element={<ReviewCarouselPage />} />
          </Routes>
        </main>
        
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
