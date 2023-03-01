import { Heading, Image, Text, Card, CardBody, CardFooter, Stack } from "@chakra-ui/react";
import React from "react";
import SecondaryButton from "./SecondaryButton";

const Cards = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Card maxW='md' backgroundColor='light' shadow='lg'>
      <CardBody>

        <Image src={imageSrc} alt={title} objectFit='cover' boxSize='100%' h='auto' />
        <Stack mt='6' spacing='3'>
          <Heading as='h6' fontSize='xl' color='dark'  >{title}</Heading>
          <Text m={4} fontSize='md' color='gray' textStyle='body'   >{description}</Text>
          
        </Stack>
      </CardBody>

      <CardFooter justify="flex-end">

        <SecondaryButton>View Project</SecondaryButton>


      </CardFooter>




    </Card>



  );
};

export default Cards;
