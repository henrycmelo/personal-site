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
  Grid
} from "@chakra-ui/react";
import Header from "../components/Header";
import FullScreenSection from "../components/FullScreenSection";
import Footer from "../components/Footer";
import CustomizedButton from "../components/CustomizedButton";
import SecondaryButton from "../components/SecondaryButton";
import { useAlertContext } from "../context/alertContext";

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
      
    }
  ]

  const journey = [
    {
      title: "Journey Map",
      tool: "User Journey: ",
      descriptiontool: `Mapping the user’s journey revealed how helpful would for 
                        users to have access to a detailed food menu app. `,
      getImageSrc: () => require("../images/journeymap.png"),
      userquoation: ` "Frustrated with basic descriptions"`,
      
    }
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
      

     
         
     
    },
  ];

  const conclusion = [
    {
      title: "Conclusion",
      subtitle: "Presentation: ",
      subtitle2: "Feedback",
      presentation: `I presented the final report to the client in a virtual meeting through Zoom. 
                    We went from the methodology used to the recommendations. 
                    I explained in detail how we arrived at our recommendations and why they aligned with 
                    the client's goal of improving the support page.`,
      feedback: `The client was happy with the results and the recommendations. They asked me for the final report, presentation video and slides. 
              I am looking forward to continued work with them.`,
      getImageSrc: () => require("../images/conclusion.png"),
    },
  ];

  const takeaways = [
    {
      title: "Going Forward",
      subtitle: "Takeaways: ",
      subtitle2: "Next steps: ",
      learned: `While working on this project, I learned that working in teams is very important and being open-minded 
              played a key role in the development of it. I also learned that usability studies and peer feedback influence each iteration of website designs.
              It is important to take into account the users and leave bias on the side.`,
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
          <br/>
          <Grid 
            templateColumns='repeat(5, 1fr)' 
            templateRows='1/2fr 1/2fr 2fr'
            gap={1}
            align='center'
            
           
            >
          <GridItem><Circle number={1} /> </GridItem>
          <GridItem ><Circle number={2} /> </GridItem>
          <GridItem ><Circle number={3} /> </GridItem>
          <GridItem ><Circle number={4} /> </GridItem>
          <GridItem ><Circle number={5} /> </GridItem>
          <GridItem ><Text fontSize="sm" color='blue' textStyle="body">Time</Text> </GridItem>
          <GridItem ><Text fontSize="sm" color='blue' textStyle="body">Cost</Text> </GridItem>
          <GridItem ><Text fontSize="sm" color='blue' textStyle="body">Accuracy</Text> </GridItem>
          <GridItem ><Text fontSize="sm" color='blue' textStyle="body">Reviews</Text> </GridItem>
          <GridItem ><Text fontSize="sm" color='blue' textStyle="body">Steps</Text> </GridItem>
          <GridItem ><Text fontSize="xs" color='dark' textStyle="body">Working adults are too busy to spend time cooking.</Text> </GridItem>
          <GridItem ><Text fontSize="xs" color='dark' textStyle="body">The delivery fee that the user has to pay is too high.</Text> </GridItem>
          <GridItem ><Text fontSize="xs" color='dark' textStyle="body">Expectations unmet due to unclear or inaccurate food descriptions or pictures.</Text> </GridItem>
          <GridItem ><Text fontSize="xs" color='dark' textStyle="body">No reviews or customization guidance makes trying new menu items difficult.</Text> </GridItem>
          <GridItem ><Text fontSize="xs" color='dark' textStyle="body">Ordering is time-consuming for busy users due to excessive steps.</Text> </GridItem>
          
          
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
            {design[0].analyze2}{" "}
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
                  <b>{design[0].tool2}</b>
                </span>
              </Text>{" "}
            </CardFooter>
          </Card>

          

          </VStack>

      </FullScreenSection>
       
         
              

      {/*conclusion */}

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
            {conclusion[0].title}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{conclusion[0].subtitle}</b>
            </span>{" "}
            {conclusion[0].presentation}{" "}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{conclusion[0].subtitle2}</b>
            </span>{" "}
            {conclusion[0].feedback}{" "}
          </Text>
          <Card boxShadow="xl">
            <CardBody>
              <Image
                src={conclusion[0].getImageSrc()}
                alt="mockup lato"
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body">
                {" "}
                <span style={{ color: "#007183" }}>
                  <b>Zoom meeting</b>
                </span>
              </Text>{" "}
            </CardFooter>
          </Card>
        </VStack>
      </FullScreenSection>

      {/*going forward*/}

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
      </FullScreenSection>

      <FullScreenSection
        backgroundColor="light"
        alignItems={"center"}
        spacing={8}
        width="100vw"
        p={{ base: 8, md: 32 }}
      >
        <Stack direction={"row"}>
          <CustomizedButton> Contact me </CustomizedButton>
          <SecondaryButton>View other projects</SecondaryButton>
        </Stack>
      </FullScreenSection>

      <Footer />
    </main>
  );
};

export default SteakHouse;
