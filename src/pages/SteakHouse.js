import {
  Image,
  Box,
  VStack,
  Text,
  Card,
  CardBody,
  CardFooter,
  Stack,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import Header from "../components/Header";
import FullScreenSection from "../components/FullScreenSection";
import Footer from "../components/Footer";
import CustomizedButton from "../components/CustomizedButton";
import SecondaryButton from "../components/SecondaryButton";
import { useAlertContext } from "../context/alertContext";
import { Link } from "react-router-dom";

const SteakHouse = () => {
  const { isLargerThanBase } = useAlertContext();
  const image = isLargerThanBase ? "" : "400px";
  const projectInfo = [
    {
      title: "Design a Food Menu App for a Steakhouse",
      client: "The Steakhouse",
      getImageSrc: () => require("../images/steakhousepage.png"),
      role: "UX researcher and designer. Designing the food menu app for the Steakhouse from conception to delivery. ",
      tools: "Figma, Zoom, MiroBoard.",
      date: "Dec 2021 - July 2022.",
    },
  ];
  const projectOverview = [
    {
      title: "Project Overview",
      product: `The Steakhouse is a regional restaurant located in one of the major city of United States. 
                The Steakhouse strives to delivery mouth-watering steaks, and other entree selections including seafood and pasta.
                 Building a solid reputation on the strength of its service and standards, They offer high quality products with 
                 competitive prices to target business professional and/or customers who lack the time or ability to prepare a family’s dinner.`,

      challenge: `Design a food menu app from ideation to implementation for busy workers and families who lack the time necessary to prepare a meal`,
      solution: `A food menu app for a Steakhouse that allows users to easily order any dish from work or home.`,
    },
  ];

  const research = [
    {
      title: "Research",
      subtitle: `Understand the user:`,
      description: `I conducted interviews and created empathy maps to understand the users I am designing for and their needs. 
                    A primary user group identified through research was working professionals in their mid-thirties with busy schedule
                     and no time to cook. Also, research revealed that time was not only factor. Other user problems included delivery fees 
                     too high, and the expectations have never been met. `,

      description2: `On the other hand, a secondary group was known as business people with kids that through research as well were identified for having the time,
                      but not wanting to cook, and ordering everything online. Plus other user difficulties such as not having 
                      a review of the food, nor a detailed description of it. `,
      subtitle2: "User pain points:",
    },
  ];

  const personas = [
    {
      title: `Personas`,
      subtitle: `Understanding the users:`,
      description: `I have created personas based on real data to understand needs and behaviors.
                     This helps me create a user-centered design and better user experience. `,
      getImageSrc: () => require("../images/persona1.png"),
      imagedescription: `Persona 1`,
      getImageSrc2: () => require("../images/persona2.png"),
      imagedescription2: `Persona 2`,
    },
  ];

  const journey = [
    {
      title: "Journey Map",
      tool: "User Journey: ",
      descriptiontool: `Mapping the user’s journey revealed how helpful would for 
                        users to have access to a detailed food menu app. `,
      getImageSrc: () => require("../images/journeymap.png"),
      userquoation: ` "Frustrated with basic descriptions"`,
    },
  ];

  const design = [
    {
      title: "Starting the Design",
      tool: "Paper wireframes",
      analyze: ` Taking the time to draft iterations of each screen of the Steakhouse app, 
                and making that the elements that will make it to digital are well-suited 
                to address user pain point. I prioritized a quick and easy way to check the menu and past orders.`,
      getImageSrc: () => require("../images/paper.png"),

      tool2: "Digital wireframes",
      analyze2: ` As the initial design phase continued, I made sure to base screen designs 
                on feedback and findings from the user research.`,
      getImageSrc2: () => require("../images/digital.png"),
      getImageSrc3: () => require("../images/digital2.png"),

      tool3: "Low fidelity prototype",
      analyze3: ` The low-fidelity prototype connected to the primary user flow of the checkout process from the restaurant nearby, 
                  so the prototype could be used in a usability study with users.`,
      getImageSrc4: () => require("../images/lowfi.png"),
      link: "https://www.figma.com/proto/jTg5y0K73FjmiGZxtmegGA/My-project-(steakhouse)?page-id=0%3A1&node-id=51-110&viewport=410%2C48%2C0.5&scaling=scale-down&starting-point-node-id=51%3A110",
    },
  ];

  const testing = [
    {
      title: "User Testing",
      subtitle: "Findings ",
      description: `I have conducted two rounds of usability studies, which aided in the development 
                  process from wireframes to mockups. The first study provided valuable insights, 
                  which helped to guide the direction of the mockups. In the second study, a 
                  high-fidelity prototype was used to identify areas that required further refinement or
                   modification in the mockups.`,
      
    },
  ];

  const refine= [
    {
      title: "Refining the Design",
      subtitle: "Mockups ",
      description: `Early designs allowed to see on the main page recent orders, 
              the menu and the preview of the current order. After the usability studies, 
              I decided to minimize navigation and added a carousel for the menu category 
              and item. Plus, a search bar for easy finding of any food item.`,
      getImageSrc: () => require("../images/refine1.png"),
      subtitle2: "After the second round user testing ",
      description2: `The second usability study showed frustration with the menu item card because 
                  it was too small and busy. To improve this, I made the menu item card bigger 
                  and reduced other customers’ rating to only the number.  Also, I created a menu category for 
                  Specials and other for Popular for easy find, and added icons to the menu category to make it more accessible.`,
      getImageSrc2: () => require("../images/refine2.png"),
      getImageSrc3: () => require("../images/refine3.png"),
      getImageSrc4: () => require("../images/hifi.gif")

      
    },
  ];

  const hifi= [
    {
      title: "High-fidelity Prototype",
      subtitle: "the final mockup ",
      description: `The final high-fidelity prototype presented user flows for ordering
                     a item from a Steakhouse. It also met user needs such as estimate time, 
                    customizable modifications for an item, and having the option to either checkout or 
                    come back to the menu after adding an item to the cart.`,
      getImageSrc: () => require("../images/hifi.gif"),
      link:'https://www.figma.com/proto/jTg5y0K73FjmiGZxtmegGA/My-project-(steakhouse)?page-id=1184%3A9871&node-id=1184-9872&viewport=35%2C689%2C0.5&scaling=scale-down&starting-point-node-id=1184%3A9872'

    }]

    const takeaways = [
      {
        title: "Going Forward",
        subtitle: "Takeaways: ",
        subtitle2: "Next steps: ",
        learned: `While designing the Steakhouse food menu app, I learned that the first ideas for the app are only the beginning 
                of the process. Usability studies and peer feedback influence each iteration of the app’s designs`,
        subtitle3:'Impact:',
        impact:'The food menu app makes users feel the Steakhouse think how to meet their needs in a easy and intuitive way.',
        quote:'“The app made it so easy and detailed to order from The Steakhouse! This food menu app would definitely make my life easier when I want to try something new and taking into account I am gluten free’’',
        nextsteps1: `- Conduct another round of usability studies to validate whether the user’s needs and frustrations experienced previously have been effectively addressed.`,
        nextsteps2: `- Conduct more user research to determine any new area of need.`,
      },
    ];

  function Circle(props) {
    const circleStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#007183",
      color: "#E8EBED",
      fontSize: "24px",
      fontWeight: "bold",
    };

    return <Box style={circleStyle}>{props.number}</Box>;
  }

  return (
    <main>
      <Header />
      {/*image */}
      <FullScreenSection
        backgroundColor="light"
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
            src={projectInfo[0].getImageSrc()}
            alt="laptop"
            background="none"
            maxWidth={image}
          />
        </Box>
      </FullScreenSection>

      {/*Title */}

      <FullScreenSection
        backgroundColor="dark"
        isDarkBackground
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >
        <VStack alignItems={"center"} justifyContent={"center"}>
          <Text textStyle="h2" fontSize={"4xl"} align={"center"}>
            {" "}
            {projectInfo[0].client}
          </Text>
          <Text textStyle="body" fontSize={"2xl"} align={"center"}>
            {" "}
            {projectInfo[0].title}
          </Text>

          <Text size="sm" textStyle="body" align={"center"}>
            {" "}
            <span style={{ color: "#007183" }}>
              <b>Role:</b>
            </span>{" "}
            {projectInfo[0].role}
          </Text>

          <Text size="sm" textStyle="body" align={"center"}>
            {" "}
            <span style={{ color: "#007183" }}>
              <b>Tools:</b>
            </span>{" "}
            {projectInfo[0].tools}
          </Text>
          <Text size="sm" textStyle="body" align={"center"}>
            {" "}
            <span style={{ color: "#007183" }}>
              <b>Date: </b>
            </span>
            {projectInfo[0].date}
          </Text>
        </VStack>
      </FullScreenSection>

      {/*Project Overview section */}
      <FullScreenSection
        backgroundColor="secondLight"
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >
        <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text textStyle="h2" fontSize={"4xl"}>
            {" "}
            {projectOverview[0].title}
          </Text>

          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>Client:</b>
            </span>{" "}
            {projectOverview[0].product}
          </Text>

          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>Challenge:</b>
            </span>{" "}
            {projectOverview[0].challenge}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>Solution:</b>
            </span>{" "}
            {projectOverview[0].solution}
          </Text>
        </VStack>
      </FullScreenSection>

      {/*Research */}

      <FullScreenSection
        backgroundColor="light"
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >
        <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text textStyle="h2" fontSize={"4xl"}>
            {" "}
            {research[0].title}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{research[0].subtitle}</b>
            </span>{" "}
            {research[0].description}{" "}
          </Text>
          <Text size="sm" textStyle="body">
            {research[0].description2}
          </Text>
          <br />

          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{research[0].subtitle2}</b>
            </span>{" "}
          </Text>
          <br />
          <Grid
            templateColumns="repeat(5, 1fr)"
            templateRows="1/2fr 1/2fr 2fr"
            gap={1}
            align="center"
          >
            <GridItem>
              <Circle number={1} />{" "}
            </GridItem>
            <GridItem>
              <Circle number={2} />{" "}
            </GridItem>
            <GridItem>
              <Circle number={3} />{" "}
            </GridItem>
            <GridItem>
              <Circle number={4} />{" "}
            </GridItem>
            <GridItem>
              <Circle number={5} />{" "}
            </GridItem>
            <GridItem>
              <Text fontSize="sm" color="blue" textStyle="body">
                Time
              </Text>{" "}
            </GridItem>
            <GridItem>
              <Text fontSize="sm" color="blue" textStyle="body">
                Cost
              </Text>{" "}
            </GridItem>
            <GridItem>
              <Text fontSize="sm" color="blue" textStyle="body">
                Accuracy
              </Text>{" "}
            </GridItem>
            <GridItem>
              <Text fontSize="sm" color="blue" textStyle="body">
                Reviews
              </Text>{" "}
            </GridItem>
            <GridItem>
              <Text fontSize="sm" color="blue" textStyle="body">
                Steps
              </Text>{" "}
            </GridItem>
            <GridItem>
              <Text fontSize="xs" color="dark" textStyle="body">
                Working adults are too busy to spend time cooking.
              </Text>{" "}
            </GridItem>
            <GridItem>
              <Text fontSize="xs" color="dark" textStyle="body">
                The delivery fee that the user has to pay is too high.
              </Text>{" "}
            </GridItem>
            <GridItem>
              <Text fontSize="xs" color="dark" textStyle="body">
                Expectations unmet due to unclear or inaccurate food
                descriptions or pictures.
              </Text>{" "}
            </GridItem>
            <GridItem>
              <Text fontSize="xs" color="dark" textStyle="body">
                No reviews or customization guidance makes trying new menu items
                difficult.
              </Text>{" "}
            </GridItem>
            <GridItem>
              <Text fontSize="xs" color="dark" textStyle="body">
                Ordering is time-consuming for busy users due to excessive
                steps.
              </Text>{" "}
            </GridItem>
          </Grid>
        </VStack>
      </FullScreenSection>

      {/*personas */}

      <FullScreenSection
        backgroundColor="secondLight"
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >
        <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text textStyle="h2" fontSize={"4xl"}>
            {" "}
            {personas[0].title}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{personas[0].subtitle}</b>
            </span>{" "}
            {personas[0].description}{" "}
          </Text>

          <Card boxShadow="xl" align={"center"}>
            <CardBody>
              <Image
                src={personas[0].getImageSrc()}
                alt="persona1 description"
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body">
                {" "}
                <span style={{ color: "#007183" }}>
                  <b>{personas[0].imagedescription}</b>
                </span>
              </Text>{" "}
            </CardFooter>
          </Card>
          <Card boxShadow="xl" align={"center"}>
            <CardBody>
              <Image
                src={personas[0].getImageSrc2()}
                alt="persona1 description"
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body">
                {" "}
                <span style={{ color: "#007183" }}>
                  <b>{personas[0].imagedescription2}</b>
                </span>
              </Text>{" "}
            </CardFooter>
          </Card>
        </VStack>
      </FullScreenSection>

      {/*journey map*/}

      <FullScreenSection
        backgroundColor="light"
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >
        <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text textStyle="h2" fontSize={"4xl"}>
            {" "}
            {journey[0].title}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{journey[0].tool}</b>
            </span>{" "}
            {journey[0].descriptiontool}{" "}
          </Text>

          <Card boxShadow="xl" align="center">
            <CardBody>
              <Image
                src={journey[0].getImageSrc()}
                alt={journey[0].tool}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body">
                {" "}
                <span style={{ color: "#007183" }}>
                  <b>{journey[0].userquoation}</b>
                </span>
              </Text>{" "}
            </CardFooter>
          </Card>
        </VStack>
      </FullScreenSection>

      {/*starting the design */}

      <FullScreenSection
        backgroundColor="secondLight"
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >
        <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text textStyle="h2" fontSize={"4xl"}>
            {" "}
            {design[0].title}
          </Text>

          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{design[0].tool}:</b>
            </span>{" "}
            {design[0].analyze}{" "}
          </Text>

          <Card boxShadow="xl" align="center">
            <CardBody>
              <Image
                src={design[0].getImageSrc()}
                alt={design[0].tool}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body">
                {" "}
                <span style={{ color: "#007183" }}>
                  <b>{design[0].tool}</b>
                </span>
              </Text>{" "}
            </CardFooter>
          </Card>
        </VStack>

        <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{design[0].tool2}:</b>
            </span>{" "}
            {design[0].analyze2}{" "}
          </Text>

          <Card boxShadow="xl" align="center">
            <CardBody>
              <Image
                src={design[0].getImageSrc2()}
                alt={design[0].tool2}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body">
                {" "}
                <span style={{ color: "#007183" }}>
                  <b>{design[0].tool2}</b>
                </span>
              </Text>{" "}
            </CardFooter>
          </Card>

          <Card boxShadow="xl" align="center">
            <CardBody>
              <Image
                src={design[0].getImageSrc3()}
                alt={design[0].tool2}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body">
                {" "}
                <span style={{ color: "#007183" }}>
                  <b>{design[0].tool2} 2</b>
                </span>
              </Text>{" "}
            </CardFooter>
          </Card>
        </VStack>

        <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{design[0].tool3}:</b>
            </span>{" "}
            {design[0].analyze3}{" "}
          </Text>

          <Card boxShadow="xl" align="center">
            <CardBody>
              <Image
                src={design[0].getImageSrc4()}
                alt={design[0].tool3}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body">
                {" "}
                <span style={{ color: "#007183" }}>
                  <a href={design[0].link} rel="noreferrer" target="_blank">
                    <b>
                      <u>Clcik here to view the low-fi prototype</u>
                    </b>
                  </a>
                </span>
              </Text>{" "}
            </CardFooter>
          </Card>
        </VStack>
      </FullScreenSection>

      {/*testing */}

      <FullScreenSection
        backgroundColor="light"
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >
        <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text textStyle="h2" fontSize={"4xl"}>
            {" "}
            {testing[0].title}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{testing[0].subtitle}:</b>
            </span>{" "}
            {testing[0].description}{" "}
          </Text>
          <br/>

          <Grid
            templateColumns="repeat(2, 1fr)"
            templateRows="1/2fr 1fr"
            gap={1}
            align="center"
            pl={8}
            columnGap={16}
          >
            <GridItem>
              {" "}
              <Text fontSize="sm" color="blue" textStyle="body">
                Round 1 findings{" "}
              </Text>
            </GridItem>
            <GridItem>
              {" "}
              <Text fontSize="sm" color="blue" textStyle="body">
                Round 2 findings{" "}
              </Text>{" "}
            </GridItem>
            <GridItem>
              <ol>
                <Text fontSize="sm" color="dark" textStyle="body">
                  <li>
                    Users want a better path to follow in order to complete the
                    checkout process{" "}
                  </li>
                </Text>
                <Text fontSize="sm" color="dark" textStyle="body">
                  <li>Users want a more minimalist design per page </li>
                </Text>
                <Text fontSize="sm" color="dark" textStyle="body">
                  <li>
                    User wants a more visible button to localize the nearest
                    restaurant{" "}
                  </li>
                </Text>
              </ol>
            </GridItem>
            <GridItem>
              <ol>
                <Text fontSize="sm" color="dark" textStyle="body">
                  <li>
                    The menu category “ALL” is overwhelming for most users
                  </li>
                </Text>
                <Text fontSize="sm" color="dark" textStyle="body">
                  <li>Finding the specials of the day is not easy for most users </li>
                </Text>
                <Text fontSize="sm" color="dark" textStyle="body">
                  <li>
                  Users want a button to checkout after adding to the cart instead of coming back to the main menu{" "}
                  </li>
                </Text>
              </ol>
            </GridItem>
          </Grid>
        </VStack>
      </FullScreenSection>

      {/*refining*/}

      <FullScreenSection
        backgroundColor="secondLight"
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >
        <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text textStyle="h2" fontSize={"4xl"}>
            {" "}
            {refine[0].title}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{refine[0].subtitle}:</b>
            </span>{" "}
            {refine[0].description}{" "}
          </Text>

          <Card boxShadow="xl" align="center">
            <CardBody>
              <Image
                src={refine[0].getImageSrc()}
                alt={refine[0].subtitle}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body">
                {" "}
                <span style={{ color: "#007183" }}>
                  <b>Mockup 1</b>
                </span>
              </Text>{" "}
            </CardFooter>
            </CardFooter>
            </Card>
          
        </VStack>

        <VStack alignItems={"flex start"} justifyContent={"center"}>
          
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{refine[0].subtitle2}:</b>
            </span>{" "}
            {refine[0].description2}{" "}
          </Text>

          <Card boxShadow="xl" align="center">
            <CardBody>
              <Image
                src={refine[0].getImageSrc2()}
                alt={refine[0].subtitle2}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body">
                {" "}
                <span style={{ color: "#007183" }}>
                  <b>Mockup 2</b>
                </span>
              </Text>{" "}
            </CardFooter>
            </CardFooter>
            </Card>

            <Card boxShadow="xl" align="center">
            <CardBody>
              <Image
                src={refine[0].getImageSrc3()}
                alt={refine[0].subtitle2}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body">
                {" "}
                <span style={{ color: "#007183" }}>
                  <b>Mockup 3</b>
                </span>
              </Text>{" "}
            </CardFooter>
            </CardFooter>
            </Card>

            
          
        </VStack>
      </FullScreenSection>

      <FullScreenSection
        backgroundColor="light"
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >

      <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text textStyle="h2" fontSize={"4xl"}>
            {" "}
            {hifi[0].title}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{hifi[0].subtitle}:</b>
            </span>{" "}
            {hifi[0].description}{" "}
          </Text>

          <Card boxShadow="xl" align="center">
            <CardBody>
              <Image
                src={hifi[0].getImageSrc()}
                alt={hifi[0].subtitle}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            
            <CardFooter justify={"center"}>
            <Text fontSize="lg" textStyle="body">
                {" "}
                <span style={{ color: "#007183" }}>
                  <a href={hifi[0].link} rel="noreferrer" target="_blank">
                    <b>
                      <u>Clcik here to view the hi-fi prototype</u>
                    </b>
                  </a>
                </span>
              </Text>{" "}
            
            
            </CardFooter>
            </Card>
          
        </VStack>

        </FullScreenSection>

        <FullScreenSection
        backgroundColor="secondLight"
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >
         <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text textStyle="h2" fontSize={"4xl"}>
            {" "}
            {takeaways[0].title}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{takeaways[0].subtitle}</b>
            </span>{" "}
            {takeaways[0].learned}{" "}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{takeaways[0].subtitle3}</b>
            </span>{takeaways[0].impact}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>One quote from a participant feedback: </b>
            </span><i>{takeaways[0].quote}</i>
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{takeaways[0].subtitle2}</b>
            </span>{" "}
          </Text>
          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            {takeaways[0].nextsteps1}{" "}
          </Text>
          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            {takeaways[0].nextsteps2}{" "}
          </Text>
        </VStack>

        <br/>
        <br/>
      

        <Stack direction={"row"}>
          <Link to='/contactme'><CustomizedButton> Contact me </CustomizedButton></Link>
          <Link to='/projects'><SecondaryButton>View other projects</SecondaryButton></Link>
        </Stack>


      </FullScreenSection>


      <Footer />
    </main>
  );
};

export default SteakHouse;
