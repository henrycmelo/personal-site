import {
 
    Stack,
   
  } from "@chakra-ui/react";
  import React from "react";
  import FullScreenSection from "../components/FullScreenSection";
  import ScrollReveal from "../hooks/ScrollReveal";
  import CustomizedButton from "../components/CustomizedButton";
import SecondaryButton from "../components/SecondaryButton";
import { Link } from "react-router-dom";

const ButtonsBottom=({button1, button2, path1, path2, backgroundColor, hasLinkToOtherPages, href1, href2})=>{
    return(
        <FullScreenSection
        backgroundColor={backgroundColor}
        alignItems={"center"}
        spacing={8}
        width="100vw"
        pb={{ base: 8, md: 32 }}
      >
      {hasLinkToOtherPages?(

        <ScrollReveal>
        <Stack direction={"row"}>
        <a
            href={href1}
            rel="noreferrer"
            target="_blank"
          >
            <CustomizedButton>{button1} </CustomizedButton>
          </a>
          <a
            href={href2}
            rel="noreferrer"
            target="_blank"
          >
            <SecondaryButton>{button2}</SecondaryButton>
          </a>
        </Stack>
        </ScrollReveal>
        
      ):(
      <ScrollReveal>
        <Stack direction={"row"}>
          <Link to={path1}>
            <CustomizedButton>{button1} </CustomizedButton>
          </Link>
          <Link to={path2}>
            <SecondaryButton>{button2}</SecondaryButton>
          </Link>
        </Stack>
        </ScrollReveal>
        )}
        
      </FullScreenSection>
    )
}

export default ButtonsBottom;