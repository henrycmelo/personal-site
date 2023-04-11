import React from "react";
import FullScreenSection from "./FullScreenSection";
import loaderHenry from "../images/hc_logos_black.png";
import 'animate.css';
import logoblue from "../images/hc_logo_blue.png";
import { useAlertContext } from "../context/alertContext";



const Loader = () => {
  const { colorMode } = useAlertContext();

  return (
    <FullScreenSection
      backgroundColor={colorMode === "light" ? "light" : "dark"}
      alignItems={'center'}
      justifyContent={'center'}
      height="100vh"
      spacing={8}
      width="100vw"
   
    >
      <img className={colorMode==='light'? 'loader':'loader-dark'} style={{ width: "82px", height: "82px" }}  src={colorMode==='light'? loaderHenry:logoblue} alt="Logo brand" />
      
       
    
    </FullScreenSection>
  );
};

export default Loader;
