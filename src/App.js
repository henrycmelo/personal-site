import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import theme from "../src/style/theme.js";
import Home from "./pages/Home";
import CianaResearch from "./pages/CianaResearch.js";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactme" element={<ContactPage />} />
            <Route path="/cianaresearch" element={<CianaResearch />} />
          </Routes>
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
