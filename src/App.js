import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import theme from "../src/style/theme.js"
import CaseStudyArchives from "./pages/CaseStudyArchives"
import Home from "./pages/Home"
import DjangoPage from './pages/DjangoPage';
import ProjectPage from './pages/ProjectPage';
import AboutMePage from './pages/AboutMePage';
import ContactMePage from './pages/ContactPage';
import MyPersonalSite from './pages/MyPersonalSite';





function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
      <BrowserRouter>
        <main>
          
          <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/projects" element={<ProjectPage/>}></Route>
              <Route exact path="/aboutme" element={<AboutMePage/>}></Route>
              <Route exact path="/contactme" element={<ContactMePage/>}></Route>
              <Route exact path="/casestudyarchives" element={<CaseStudyArchives/>}></Route>
              <Route exact path="/projects/casestudyarchives" element={<CaseStudyArchives/>}></Route>
              <Route exact path="/projects/djangopage" element={<DjangoPage/>}></Route>
              <Route exact path="/djangopage" element={<DjangoPage/>}></Route>
              <Route exact path="/projects/mypersonalsite" element={<MyPersonalSite/>}></Route>
              <Route exact path="/mypersonalsite" element={<MyPersonalSite/>}></Route>
              
          </Routes>
          
        </main>
        </BrowserRouter>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
