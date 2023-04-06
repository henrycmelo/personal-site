import React from "react";
import FullScreenSection from "./FullScreenSection";
import loaderHenry from "../images/hc_logos_black.png";
import 'animate.css';

const preLoader = [
  {
    id: "preloader",
    src: loaderHenry,
    alt: "logo spining",
  },
];
const Logo = ({ id, src, alt }) => (
    <img className="loader" style={{ width: "82px", height: "82px" }} key={id} src={src} alt={alt} />
  );

const Loader = () => {

  return (
    <FullScreenSection
      backgroundColor="light"
      alignItems={'center'}
      justifyContent={'center'}
      height="100vh"
      spacing={8}
      width="100vw"
   
    >
      {preLoader.map(
        (
          load // rendering the list of icons using .map () method
        ) => (
          <Logo key={load.id} src={load.src} alt={load.alt} />
        )
      )}
    </FullScreenSection>
  );
};

export default Loader;
