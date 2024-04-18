import {
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Badge,
  Flex,
  Box,
} from "@chakra-ui/react";
import React from "react";
import SecondaryButton from "./SecondaryButton";
import { Link } from "react-router-dom";
import { useAlertContext } from "../context/alertContext";
import { formatDate } from "../utils/formatDate";
import { isProjectDateRecent } from "../utils/recent";

const Cards = ({
  title,
  description,
  imageSrc,
  to,
  date,
}) => {
  const { colorMode } = useAlertContext();

  return (
    <Card
      maxW={["100%", "md"]}
      backgroundColor={colorMode === "light" ? "light" : "dark"}
      boxShadow="xl"
    >
      <CardBody>
        <Flex alignItems="center" justifyContent={'right'}>
          {date ? (
            <Text
              fontSize="xs"
             
              color={colorMode === "light" ? "gray" : "grayDarkMode"}
              px="2"
              py="1"
              mb={2}
            >
              {formatDate(date)}
            </Text>
          ) : null}

         
        </Flex>

        <Box
          style={{
            position: "relative",
            display: "inline-block",
            paddingTop: "20px",
          }}
        >
          {date && isProjectDateRecent(date) ? (
            <Badge
              position="absolute"
              right="-5px"
              top="20px"
              px="2"
              py="1"
              mb={2}
              ml={2}
              fontSize="2xs"
              variant={colorMode === "light" ? "light" : "dark"}
              borderRadius="full"
              
              
            >
              New
            </Badge>
          ) : null}
          <Image
            src={imageSrc}
            alt={title}
            objectFit="cover"
            boxSize="100%"
            h="auto"
            borderRadius="5px"
            backgroundColor={
              colorMode === "light" ? "secondLight" : "darkDarkMode"
            }
          />
        </Box>
        <Stack mt="6" spacing="3">
          <Heading
            as="h6"
            fontSize="xl"
            color={colorMode === "light" ? "dark" : "light"}
          >
            {title}
          </Heading>
          <Text
            m={4}
            fontSize="md"
            color={colorMode === "light" ? "gray" : "grayDarkMode"}
            textStyle="body"
          >
            {description}
          </Text>
        </Stack>
        
      </CardBody>

      <CardFooter justify="flex-end">
        <Link to={to}>
          <SecondaryButton>View Project</SecondaryButton>{" "}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Cards;
