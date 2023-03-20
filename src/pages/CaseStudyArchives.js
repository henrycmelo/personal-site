import {
  Image,
  Box,
  VStack,
  Text,
  Card,
  CardBody,
  CardFooter,
  Stack,
} from "@chakra-ui/react";
import Header from "../components/Header";
import FullScreenSection from "../components/FullScreenSection";
import Footer from "../components/Footer";
import CustomizedButton from "../components/CustomizedButton";
import SecondaryButton from "../components/SecondaryButton";
import { useAlertContext } from "../context/alertContext"

const CaseStudyArchives = () => {
  const { isLargerThanBase } = useAlertContext();
  const image = isLargerThanBase ? '' : '400px'
  const projectInfo = [
    {
      title: "Enhancing User Experience for Better Donations on Support Page",
      client: "ARCHIVES OF AMERICAN ART",
      getImageSrc: () => require("../images/AAlaptop-noBG.png"),
      role: "UX researcher, user testing, UI designer",
      tools: "Figma, Zoom, MiroBoard",
      date: "Oct-Dec 2022",
    },
  ];
  const projectOverview = [
    {
      title: "Project Overview",
      product: `The Archives of American Art is a research center and repository dedicated to collecting, preserving,
       and providing access to primary sources that document the history of the visual arts in the United States. 
       The archives, which is part of the Smithsonian Institution, holds a vast collection of letters, diaries, sketches, 
       photographs, and other documents related to American artists, art galleries, museums, and collectors. Its mission is to 
       support research and scholarship in the field of American art history by making its holdings available to the public and 
       providing educational programs and resources for researchers, students, and the general public.`,
      challenge: `Redesign the Archives of American Art support page to increase overall donations. 
                        Donations are critical to support the Archives' goal of collecting, preserving, 
                        and providing access to primary sources that document the history of the visual arts.`,
      solution: `Create a more friendly user interface (UI) by reorganizing the visual hierarchy of the content,
                        creating more prominent and interactive buttons, and adding personal touches to the page.`,
    },
  ];

  const currentState = [
    {
      title: "Current State",
      description: "Support Page",
      description2: "Support/other-ways-to-give",
      getImageSrc: () => require("../images/currentstate1.png"),
      getImageSrc2: () => require("../images/currentstate2.png"),
    },
  ];

  const research = [
    {
      title: "Research",
      subtitle: `Understand the user target:`,
      description: `I started the project by researching the characteristics of users most likely to make a donation.
                   We used a study published by give.org that measured donor beliefs, feelings, and behavioral intentions 
                   toward charitable giving to help develop our user profile. By analyzing the study, I focused on generations 
                   with a higher rate of giving to Art and Culture charities, taking into account their education 
                   level and employment status as well.`,
      subtitle2: `Create user profile`,
      description2: `In the end, I created a user profile which was referenced to recruit the participants for usability testing.
                   Key points for user profile:
                   `,
      description3: [
        {
          subtitle: "• Three generations:",
          millenials: `- Millenials (Age 25-41).`,
          generationX: `- Generation X (Age 42-57).`,
          boomers: `- Boomers (Age 58-76).`,
        },
      ],
      description4: [
        {
          subtitle: "• Interests:",
          interests: `Art, culture and museums.`,
        },
      ],
      description5: [
        {
          subtitle: "• Preferable ocupations:",
          art: `- Art enthusiast.`,
          collector: `- Collector.`,
          designer: `- Designer.`,
          museumgoer: `- Museum goer.`,
          historyresearcher: `-History researcher.`,
        },
      ],
    },
  ];

  const usertesting = [
    {
      title: `User Testing`,
      subtitle: `Moderate remote & in-person:`,
      description: `To evaluate the usability of the existing Archive of American Art support page I conducted asynchronous 
                sessions with each participant. All participants were guided through three tasks and scenarios in which they 
                were prompted to think aloud. The team asked follow-up questions as needed to provide clarification. `,
      getImageSrc: () => require("../images/usertesting.png"),
      imagedescription: `Remote testing`,
      task1: [
        {
          tasknumber: "• Task 1:",
          description: ` Imagine that you want to  to support The Smithsonian Archives of American Art for its future growth and current mission. 
                    Please go to the support page (https://www.aaa.si.edu/support) and find different ways of donating and specifically find 
                    the IRA Rollover way of donation.`,
          tasknumber2: "• Task 2:",
          description2: ` You are making a gift to Archives of American Art for research in honor of Kevin Baker. 
                    Find how to make a 75 dollar donation and get to the billing page.`,
          tasknumber3: "• Task 3:",
          description3: ` You are a representative of an international company and your company wants to donate money to the Archives of American Art. 
                    Find information on how your company can do that.`,
        },
      ],
      followup: [
        {
          description: `• Follow-up questions:`,
          question1: `- On a scale of 1-5 (1: very easy and 5: very difficult) , how would you rate your experience completing the task? Why do you choose this scale?`,
          question2: `- Why did you choose this rating? `,
          question3: `- Would you want to add or remove any information from this page?`,
        },
      ],
    },
  ];

  const analyze = [
    {
      title: "Analyze",
      tool: "Affinity Diagram: ",
      descriptiontool: `I used the affinity diagram to find patterns and grouped them from the most to least common.  
                    Consequently, we created recommendations based on the findings. `,
      getImageSrc: () => require("../images/affinity.png"),
      userquoation: ` "I wish there will more graphics"`,
      insigths: [
        {
          subtitle: `• Insights:`,
          insigth1: `- Most users found that buttons were outdated and need to look more appealing.`,
          insigth2: `- Many users agreed that the content information should be condensed into on tab rather than having several ways.`,
          insigth3: `- some users thinks that the page should have narrative/personal touch`,
          insigth4: `- Users thought that the font and the font size are inconsistent and should use more imagery.`,
        },
      ],
    },
  ];

  const iterations = [
    {
      title: "Iteration and Recommendations",
      recommendations: [
        {
          uno: "Recommendation 1-",
          description: "Buttons:",
          analyze: ` The current design has small buttons which makes it difficult for the user to find and consequently 
                discourages them from continuing with the donation process. The first thing the usability study revealed 
                is that we should make the buttons larger. Next, I determined the  color of the call-to-action (CTA) button should be changed 
                from blue to purple. We chose purple because it is more consistent with the style of the rest of the website 
                and provides contrast to the secondary CTA buttons that were added to the side panel. 
                Lastly, I moved the location of the donate button from the top of the navigation bar to the end of the navigation bar 
                and changed the CTA from "Donate" to "Donate Now" to increase the urgency.`,
          getImageSrc: () => require("../images/reco1.png"),
          getImageSrc2: () => require("../images/reco2.png"),
          dos: "Recommendation 2-",
          description2: "Hero page:",
          analyze2: ` The usability study showed that people were frustrated because of the lack of personal touch.
                 So I decided to add a carousel in a hero image with ‘donate now’ button and quotes from outside sources.`,
          getImageSrc3: () => require("../images/reco3.png"),
          getImageSrc4: () => require("../images/reco4.png"),
          three: "Recommendation 3-",
          description3: "Visual hierarchy:",
          analyze3: ` The usability study gave us the insight that people found the content too dense and lacking visual cues. 
                  To improve this, we decided to create cards as a common region and a CTA button in each of the cards 
                  to differentiate the information and guide the user for better visual cues. In addition, I added an image to 
                  the top of the landing page with a clear CTA button.`,
          getImageSrc5: () => require("../images/reco5.png"),
          getImageSrc6: () => require("../images/reco6.png"),
          four: "Recommendation 4-",
          description4: "Layout redesign, viewing pattern:",
          analyze4: ` Although I tried to keep the layout consistency with the current one on the website because of the style, 
                  I highly suggest to change this in order to improve the viewing pattern. The viewing pattern that I propose is 
                  the F one because it will guide the users through the website without making them think, 
                  and also leading them to scan the document in a friendly way. `,
          getImageSrc7: () => require("../images/reco7.png"),
          getImageSrc8: () => require("../images/reco8.png"),
          five: "Recommendation 5-",
          description5: "Accessibility considerations",
          analyze5: ` Provided access to users who are vision impaired through text to images for screen readers.`,
          analyze51: `Implemented icons to enhance user navigation and improve accessibility.`,
          analyze52: `Used detailed imagery to aid user understanding of relevant information on the screen`,
          getImageSrc9: () => require("../images/reco9.jpg"),
          getImageSrc10: () => require("../images/reco10.jpg"),
          getImageSrc11: () => require("../images/reco11.jpg"),
        },
      ],
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

      {/*current state */}

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
            {currentState[0].title}
          </Text>
          <Stack direction={{ base: "column", md: "row" }}>
            <Card boxShadow="xl">
              <CardBody>
                <Image
                  src={currentState[0].getImageSrc()}
                  alt="mockup lato"
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body">
                  {" "}
                  <span style={{ color: "#007183" }}>
                    <b>{currentState[0].description}</b>
                  </span>
                </Text>{" "}
              </CardFooter>
            </Card>
            <Card boxShadow="xl">
              <CardBody>
                <Image
                  src={currentState[0].getImageSrc2()}
                  alt="mockup lato"
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body">
                  {" "}
                  <span style={{ color: "#007183" }}>
                    <b>{currentState[0].description2}</b>
                  </span>
                </Text>{" "}
              </CardFooter>
            </Card>
          </Stack>
        </VStack>
      </FullScreenSection>

      {/*Research */}

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
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{research[0].subtitle2}</b>
            </span>{" "}
            {research[0].description2}
          </Text>
          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            <b>{research[0].description3[0].subtitle}</b>
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {research[0].description3[0].millenials}
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {research[0].description3[0].generationX}
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {research[0].description3[0].boomers}
          </Text>

          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            <b>{research[0].description4[0].subtitle}</b>
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {research[0].description4[0].interests}
          </Text>

          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            <b>{research[0].description5[0].subtitle}</b>
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {research[0].description5[0].art}
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {research[0].description5[0].collector}
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {research[0].description5[0].designer}
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {research[0].description5[0].museumgoer}
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {research[0].description5[0].historyresearcher}
          </Text>
        </VStack>
      </FullScreenSection>

      {/*User testing */}

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
            {usertesting[0].title}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{usertesting[0].subtitle}</b>
            </span>{" "}
            {usertesting[0].description}{" "}
          </Text>

          <Card boxShadow="xl" align={"center"}>
            <CardBody>
              <Image
                src={usertesting[0].getImageSrc()}
                alt="usertesting on Zoom"
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body">
                {" "}
                <span style={{ color: "#007183" }}>
                  <b>{usertesting[0].imagedescription}</b>
                </span>
              </Text>{" "}
            </CardFooter>
          </Card>

          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            <b>{usertesting[0].task1[0].tasknumber}</b>
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {usertesting[0].task1[0].description}
          </Text>

          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            <b>{usertesting[0].task1[0].tasknumber2}</b>
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {usertesting[0].task1[0].description2}
          </Text>

          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            <b>{usertesting[0].task1[0].tasknumber3}</b>
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {usertesting[0].task1[0].description3}
          </Text>

          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            <b>{usertesting[0].followup[0].description}</b>
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {usertesting[0].followup[0].question1}
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {usertesting[0].followup[0].question2}
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {usertesting[0].followup[0].question3}
          </Text>
        </VStack>
      </FullScreenSection>

      {/*Analyze */}

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
            {analyze[0].title}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{analyze[0].tool}</b>
            </span>{" "}
            {analyze[0].descriptiontool}{" "}
          </Text>

          <Card boxShadow="xl" align="center">
            <CardBody>
              <Image
                src={analyze[0].getImageSrc()}
                alt={analyze[0].tool}
                background="none"
                borderRadius="lg"
              />{" "}
            </CardBody>

            <CardFooter justify={"center"}>
              <Text fontSize="lg" textStyle="body">
                {" "}
                <span style={{ color: "#007183" }}>
                  <b>{analyze[0].userquoation}</b>
                </span>
              </Text>{" "}
            </CardFooter>
          </Card>

          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            <b>{analyze[0].insigths[0].subtitle}</b>
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {analyze[0].insigths[0].insigth1}
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {analyze[0].insigths[0].insigth2}
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {analyze[0].insigths[0].insigth3}
          </Text>
          <Text size="sm" textStyle="body" pl={16}>
            {" "}
            {analyze[0].insigths[0].insigth4}
          </Text>
        </VStack>
      </FullScreenSection>

      {/*recommendation */}

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
            {iterations[0].title}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{iterations[0].recommendations[0].uno}</b>
              <u>{iterations[0].recommendations[0].description}</u>
            </span>
            {iterations[0].recommendations[0].analyze}{" "}
          </Text>
          <Stack direction={{ base: "column", md: "row" }}>
            <Card boxShadow="xl">
              <CardBody>
                <Image
                  src={iterations[0].recommendations[0].getImageSrc()}
                  alt={iterations[0].recommendations[0].description}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body">
                  {" "}
                  <span style={{ color: "#007183" }}>
                    <b>Before</b>
                  </span>
                </Text>{" "}
              </CardFooter>
            </Card>
            <Card boxShadow="xl">
              <CardBody>
                <Image
                  src={iterations[0].recommendations[0].getImageSrc2()}
                  alt={iterations[0].recommendations[0].description}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body">
                  {" "}
                  <span style={{ color: "#007183" }}>
                    <b>After</b>
                  </span>
                </Text>{" "}
              </CardFooter>
            </Card>
          </Stack>
        </VStack>

        <br />

        {/*recommendation2 */}

        <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{iterations[0].recommendations[0].dos}</b>
              <u>{iterations[0].recommendations[0].description2}</u>
            </span>
            {iterations[0].recommendations[0].analyze2}{" "}
          </Text>
          <Stack direction={{ base: "column", md: "row" }}>
            <Card boxShadow="xl">
              <CardBody>
                <Image
                  src={iterations[0].recommendations[0].getImageSrc4()}
                  alt={iterations[0].recommendations[0].description2}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body">
                  {" "}
                  <span style={{ color: "#007183" }}>
                    <b>Before</b>
                  </span>
                </Text>{" "}
              </CardFooter>
            </Card>
            <Card boxShadow="xl">
              <CardBody>
                <Image
                  src={iterations[0].recommendations[0].getImageSrc3()}
                  alt={iterations[0].recommendations[0].description2}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body">
                  {" "}
                  <span style={{ color: "#007183" }}>
                    <b>After</b>
                  </span>
                </Text>{" "}
              </CardFooter>
            </Card>
          </Stack>
        </VStack>

        <br />

        {/*recommendation3 */}

        <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{iterations[0].recommendations[0].three}</b>
              <u>{iterations[0].recommendations[0].description3}</u>
            </span>
            {iterations[0].recommendations[0].analyze3}{" "}
          </Text>
          <Stack direction={{ base: "column", md: "row" }}>
            <Card boxShadow="xl">
              <CardBody>
                <Image
                  src={iterations[0].recommendations[0].getImageSrc6()}
                  alt={iterations[0].recommendations[0].description3}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body">
                  {" "}
                  <span style={{ color: "#007183" }}>
                    <b>Before</b>
                  </span>
                </Text>{" "}
              </CardFooter>
            </Card>
            <Card boxShadow="xl">
              <CardBody>
                <Image
                  src={iterations[0].recommendations[0].getImageSrc5()}
                  alt={iterations[0].recommendations[0].description3}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body">
                  {" "}
                  <span style={{ color: "#007183" }}>
                    <b>After</b>
                  </span>
                </Text>{" "}
              </CardFooter>
            </Card>
          </Stack>
        </VStack>

        {/*recommendation4 */}

        <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{iterations[0].recommendations[0].four}</b>
              <u>{iterations[0].recommendations[0].description4}</u>
            </span>
            {iterations[0].recommendations[0].analyze4}{" "}
          </Text>
          <Stack direction={{ base: "column", md: "row" }}>
            <Card boxShadow="xl">
              <CardBody>
                <Image
                  src={iterations[0].recommendations[0].getImageSrc8()}
                  alt={iterations[0].recommendations[0].description4}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body">
                  {" "}
                  <span style={{ color: "#007183" }}>
                    <b>Layout redesign</b>
                  </span>
                </Text>{" "}
              </CardFooter>
            </Card>
            <Card boxShadow="xl">
              <CardBody>
                <Image
                  src={iterations[0].recommendations[0].getImageSrc7()}
                  alt={iterations[0].recommendations[0].description4}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body">
                  {" "}
                  <span style={{ color: "#007183" }}>
                    <b>Viewing pattern</b>
                  </span>
                </Text>{" "}
              </CardFooter>
            </Card>
          </Stack>
        </VStack>

        {/*recommendation5 */}

        <VStack alignItems={"flex start"} justifyContent={"center"}>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>{iterations[0].recommendations[0].five}</b>
              <u>{iterations[0].recommendations[0].description5}</u>
            </span>
          </Text>
          <Stack direction={{ base: "column", md: "row" }}>
            <Card boxShadow="xl">
              <CardBody>
                <Image
                  src={iterations[0].recommendations[0].getImageSrc9()}
                  alt={iterations[0].recommendations[0].analyze5}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body">
                  {" "}
                  <span style={{ color: "#007183" }}>
                    <b>{iterations[0].recommendations[0].analyze5}</b>
                  </span>
                </Text>{" "}
              </CardFooter>
            </Card>
            <Card boxShadow="xl" align={"center"}>
              <CardBody>
                <Image
                  src={iterations[0].recommendations[0].getImageSrc10()}
                  alt={iterations[0].recommendations[0].analyze51}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body">
                  {" "}
                  <span style={{ color: "#007183" }}>
                    <b>{iterations[0].recommendations[0].analyze51}</b>
                  </span>
                </Text>{" "}
              </CardFooter>
            </Card>

            <Card boxShadow="xl">
              <CardBody>
                <Image
                  src={iterations[0].recommendations[0].getImageSrc11()}
                  alt={iterations[0].recommendations[0].analyze52}
                  background="none"
                  borderRadius="lg"
                />{" "}
              </CardBody>

              <CardFooter justify={"center"}>
                <Text fontSize="lg" textStyle="body">
                  {" "}
                  <span style={{ color: "#007183" }}>
                    <b>{iterations[0].recommendations[0].analyze52}</b>
                  </span>
                </Text>{" "}
              </CardFooter>
            </Card>
          </Stack>
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
          <Stack direction={{ base: "column", md: "row" }}>
          <Card boxShadow="xl" >
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
          </Stack>
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

export default CaseStudyArchives;
