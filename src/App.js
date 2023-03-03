import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";

import theme from "../src/style/theme.js"
import CaseStudyArchives from "./pages/CaseStudyArchives"
import Home from "./pages/Home"





function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
      <BrowserRouter>
        <main>
          
          <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/casestudyarchives" element={<CaseStudyArchives/>}></Route>
              
          </Routes>
          
        </main>
        </BrowserRouter>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
