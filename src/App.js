import { Route, Routes } from 'react-router-dom';
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





function App() {
  
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
                <Route path='dash' element={<Dash/>} />
              </Route>
              <Route path="/aboutme" element={<AboutMePage />} />
              <Route path="/contactme" element={<ContactPage />} />
              <Route path="/casestudyarchives" element={<CaseStudyArchives />} />
              <Route path="/djangopage" element={<DjangoPage />} />
              <Route path="/mypersonalsite" element={<MyPersonalSite />} />
              <Route path='/steakhouse' element={<SteakHouse/>} />
              <Route path='/dash' element={<Dash/>} />
            </Routes>
          
        </main>
        
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
