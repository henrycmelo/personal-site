import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import theme from "../src/style/theme.js"
import CaseStudyArchives from "./pages/CaseStudyArchives"
import Home from "./pages/Home"
import DjangoPage from './pages/DjangoPage';
import ProjectPage from './pages/ProjectPage';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';
import MyPersonalSite from './pages/MyPersonalSite';
import SteakHouse from './pages/SteakHouse';
import Dash from './pages/Dash';
import ReactGA from "react-ga";
import MachineLearning from './pages/MachineLearning';
import DatabaseDesign from './pages/DatabaseDesign.js';
import AnchoredAiPage from './pages/AnchoredAiPage.js';



function App() {
  const location = useLocation();
  useEffect(() => {
    // Track page view when location changes
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    

  
    <ChakraProvider theme={theme}>
      <AlertProvider>
      
        <main>
          
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectPage />}>
                <Route path="casestudyarchives" element={<CaseStudyArchives />} />
                <Route path="djangopage" element={<DjangoPage />} />
                <Route path="mypersonalsite" element={<MyPersonalSite />} />
                <Route path='steakhouse' element={<SteakHouse/>} />
                <Route path='anchoredai' element={<AnchoredAiPage/>} />
                <Route path='dash' element={<Dash/>} />
                <Route path='machinelearning' element={<MachineLearning/>} />
                <Route path='databasedesign' element={<DatabaseDesign/>} />
              </Route>
              <Route path="/aboutme" element={<AboutMePage />} />
              <Route path="/contactme" element={<ContactPage />} />
              <Route path="/casestudyarchives" element={<CaseStudyArchives />} />
              <Route path="/djangopage" element={<DjangoPage />} />
              <Route path="/mypersonalsite" element={<MyPersonalSite />} />
              <Route path='/steakhouse' element={<SteakHouse/>} />
              <Route path='/anchoredai' element={<AnchoredAiPage/>} />
              <Route path='/dash' element={<Dash/>} />
              <Route path="/machinelearning" element={<MachineLearning/>} />
              <Route path='/databasedesign' element={<DatabaseDesign/>} />
            </Routes>
          
        </main>
        
      </AlertProvider>
    </ChakraProvider>
    
  );
}

export default App;
