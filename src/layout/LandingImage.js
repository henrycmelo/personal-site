import { useAlertContext } from "../context/alertContext";
import {
    Image,
    Box,
    
  } from "@chakra-ui/react";
  import FullScreenSection from "../components/FullScreenSection";
const LandingImage=({imageSrc,alt})=>{
const { isLargerThanBase, colorMode } = useAlertContext();
  const image = isLargerThanBase ? "" : "400px";
    return (

<FullScreenSection
backgroundColor={colorMode==='light'? "light":'dark'}
alignItems={"center"}
spacing={8}
width="100vw"
pt={48}
pl={32}
pb={32}
pr={32}
>
<Box>
  <Image
    src={imageSrc}
    alt={alt}
    background="none"
    maxWidth={image}
  />
</Box>
</FullScreenSection>

    )}

export default LandingImage;