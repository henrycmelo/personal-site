import {
 
    Stack,
   
  } from "@chakra-ui/react";
  import React from "react";
  import FullScreenSection from "../components/FullScreenSection";
  import ScrollReveal from "../hooks/ScrollReveal";
  import CustomizedButton from "../components/CustomizedButton";
import SecondaryButton from "../components/SecondaryButton";
import { Link } from "react-router-dom";

const ButtonsBottom=({button1, button2, path1, path2, backgroundColor})=>{
    return(
        <FullScreenSection
        backgroundColor={backgroundColor}
        alignItems={"center"}
        spacing={8}
        width="100vw"
        pb={{ base: 8, md: 32 }}
      >
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
      </FullScreenSection>
    )
}

export default ButtonsBottom;