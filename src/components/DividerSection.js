import { Flex, Text, Divider } from "@chakra-ui/react";
import React from "react";

const DividerSection = ({ children }) => {
    const text = children?.toUpperCase()
  return (
    <Flex align="center" pt={12}>
      <Divider variant={"dividerSection"} flex={1} />
      <Text padding="2" ml={2} textStyle={'caption'} >
        {text?(text):("")}
      </Text>
      <Divider variant={"dividerSection"} flex={10} />
    </Flex>
  );
};

export default DividerSection;
