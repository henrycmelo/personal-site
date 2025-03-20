import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import theme from "../src/style/theme.js";
import CianaResearchPage from "./pages/CianaResearchPage.js";
import SteakHousePage from "./pages/SteakHousePage.js";
import LandingSection from "./components/LandingSection.js";
import ProjectSectionPage from "./pages/ProjectSectionPage.js";
import ReviewCarouselPage from "./pages/ReviewCarouselPage.js";
import CareerTimelinePage from "./pages/CareerTimelinePage.js";
import AboutmePage from "./pages/AboutmePage.js";
import ContactPage from "./pages/ContactPage.js";
import ArchivesPage from "./pages/ArchivesPage.js";
import { AuthProvider } from "./context/AuthContext.js";
import { LoginPage } from "./components/LoginPage.js";
import { ProtectedRoute } from "./components/ProtectedRoute.js";
import LeaveReviewPage from "./pages/LeaveReviewPage.js";
import { AdminDashboard } from "./components/AdminDashboard.js";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
      <AlertProvider>
        <main>
        
          <Routes>
          
            <Route path="/" element={<LandingSection />} />
            <Route path="/projects/cianaresearch" element={<CianaResearchPage />} />
            <Route path="/projects" element={<ProjectSectionPage />} />
            <Route path="/projects/steakhouse" element={<SteakHousePage />} />
            <Route path="/projects/aaa" element={<ArchivesPage />} />
            <Route path="/reviews" element={<ReviewCarouselPage />} />
            <Route path="/reviews/leavereview" element={<LeaveReviewPage />} />
            <Route path="/career" element={<CareerTimelinePage />} />
            <Route path="/aboutme" element={<AboutmePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin/login" element={<LoginPage />} />
            <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
          </Routes>
        </main>
        
      </AlertProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
