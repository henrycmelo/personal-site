import * as React from "react";
import { Box, Image } from "@chakra-ui/react";

const OverlayImage = ({src, alt, ...props }) => {
  return (
    <Box >
      <Image
        src={src}
        alt={alt}
        filter="grayscale(100%)"
        {...props}
      />
    
    </Box>
  );
};

export default OverlayImage;
