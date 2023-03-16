import {
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import SecondaryButton from "./SecondaryButton";
import { Link } from "react-router-dom";
import { useAlertContext } from "../context/alertContext";

const Cards = ({ title, description, imageSrc, to }) => {
  const { handleClickToTop } = useAlertContext();

  return (
    <Card maxW={["100%", "md"]} backgroundColor="light" boxShadow="xl">
      <CardBody>
        <Image
          src={imageSrc}
          alt={title}
          objectFit="cover"
          boxSize="100%"
          h="auto"
        />
        <Stack mt="6" spacing="3">
          <Heading as="h6" fontSize="xl" color="dark">
            {title}
          </Heading>
          <Text m={4} fontSize="md" color="gray" textStyle="body">
            {description}
          </Text>
        </Stack>
      </CardBody>

      <CardFooter justify="flex-end">
        <Link to={to}>
          <SecondaryButton onClick={handleClickToTop}>
            View Project
          </SecondaryButton>{" "}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Cards;
