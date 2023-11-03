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
  badgeAlt,
  badgeSrc,
  date,
  role,
}) => {
  const { colorMode } = useAlertContext();

  return (
    <Card
      maxW={["100%", "md"]}
      backgroundColor={colorMode === "light" ? "light" : "dark"}
      boxShadow="xl"
    >
      <CardBody>
        <Flex alignItems="center">
          {date ? (
            <Badge
              fontSize="2xs"
              backgroundColor={
                colorMode === "light" ? "yellow" : "blueDarkMode"
              }
              color={colorMode === "light" ? "dark" : "darkDarkMode"}
              borderRadius="full"
              px="2"
              py="1"
              mb={2}
            >
              {formatDate(date)}
            </Badge>
          ) : null}

          {role
            ? role.map((role, index) => (
                <Badge
                  fontSize="2xs"
                  key={index}
                  backgroundColor={
                    colorMode === "light" ? "secondDark" : "yellow"
                  }
                  color={colorMode === "light" ? "yellow" : "darkDarkMode"}
                  borderRadius="full"
                  px="2"
                  py="1"
                  mb={2}
                  ml={2}
                >
                  {role}
                </Badge>
              ))
            : null}
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
              fontSize="2xs"
              variant='outline'
              border={
                colorMode === "light"
                  ? "1px solid #696773 "
                  : "1px solid #00A4BD "
              }
              
              color={colorMode === "light" ? "gray" : "blueDarkMode"}
              borderRadius="full"
              px="2"
              py="1"
              mb={2}
              ml={2}
              style={{ position: "absolute", right: "-5px", top: "20px" }}
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
        <Flex
          direction="row"
          alignItems="flex-start"
          flexWrap="wrap"
          maxWidth="100%"
          gap={2}
        >
          {badgeSrc
            ? badgeSrc.map((badge, index) => (
                <img key={index} src={badge} alt={badgeAlt} />
              ))
            : null}
        </Flex>
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
