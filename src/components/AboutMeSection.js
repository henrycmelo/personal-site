import React from "react";
import {
  Text,
  Image,
  Box,
  Grid,
  GridItem,
  Avatar,
  IconButton,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import rafaHenry from "../images/rafa.JPG";
import {
  faHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import headShot from "../images/avatar.jpg";

const AboutMeSection = () => {
  const { capitalizeEachWord } = useAlertContext();
  const titleText = capitalizeEachWord("About me");
  const aboutSections = [
    {
      title: "How I Found My Way Into UX",
      text: "My journey into UX started in an unexpected place—fitness. A few years ago, I built and launched a fitness app that quickly gained interest and a growing user base. Through that experience, I realized my real passion wasn’t just fitness—it was understanding user needs and crafting experiences that truly worked. That spark led me to dive into UX, eventually earning a Master's in Information Experience Design (HCI) at Pratt Institute—best decision ever.",
    },
    {
      title: "Blending Engineering & Design Thinking",
      text: "With a background in industrial engineering, I’ve always loved breaking down complex problems. That analytical mindset now helps me design intuitive user experiences that feel effortless for users. Today, I bring that same approach to my work at CIANA, where we empower immigrant communities in NYC. I’m focused on improving our education programs, ensuring they are more accessible and impactful. It’s inspiring to see how thoughtful design can enhance learning experiences and create new opportunities for those who need them most.",
    },
    {
      title: "Beyond UX: Tennis, Food, and NYC",
      text: "When I’m not designing, you’ll find me on the tennis court—yes, I’m a die-hard Nadal fan (so much so that I named my dog Rafa!). Outside of UX and sports, I’m on a constant mission to uncover NYC’s best hidden food gems. There’s always a new restaurant to try, and discovering those hidden spots has become a bit of an obsession.",
    },
  ];

  return (
    <Box>
      <Text as="h2" textStyle={"h2"} pb={6}>
        {titleText}{" "}
      </Text>
      <Grid
        w={"100%"}
        templateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }}
        gap={{ base: 6, md: 6, '2xl':24 }}
      >
        <GridItem>
          {aboutSections.map((section, index) => (
            <Box key={index} mb={6} color="gray.600">
              <Text as="p" textStyle={"pbold"} mb={2}>
                {section.title}
              </Text>

              <Text key={index} as="p" textStyle={"p"}>
                {section.text}
              </Text>
            </Box>
          ))}
        </GridItem>
        <GridItem >
          {/* <Image src={rafaHenry} alt='photo of a dog with Henry' /> */}
          <Box
            maxW="400px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            bg="white"
            
          >
            {/* Profile Header */}
            <HStack p={4} spacing={3} alignItems="center">
              <Avatar src={headShot} alt="Profile" name="Henry"  />
              <Text textStyle={"captionbold"}>henrycmelo</Text>
            </HStack>

            {/* Post Image */}

            <Image
              src={rafaHenry}
              alt="Post"
              objectFit="cover"
              boxSize="400px"
            />

            {/* Action Buttons */}
            <HStack p={4} spacing={4}>
              <IconButton
                icon={<FontAwesomeIcon icon={faHeart} />}
                aria-label="Like"
                variant="ghost"
                fontSize="20px"
                color={"red"}
              />
              <IconButton
                icon={<FontAwesomeIcon icon={faComment} />}
                aria-label="Comment"
                variant="ghost"
                fontSize="20px"
              />
              <IconButton
                icon={<FontAwesomeIcon icon={faPaperPlane} />}
                aria-label="Share"
                variant="ghost"
                fontSize="20px"
              />
            </HStack>

            {/* Post Caption */}
            <VStack align="start" p={4}>
              <Text textStyle={"captionbold"}>henrycmelo</Text>
              <Text textStyle={"caption"}>
                Enjoying some quality time with my dog Rafa! 🐾❤️
              </Text>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AboutMeSection;
