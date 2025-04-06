import React from "react";
import {
  Box,
  VStack,
  Text,
  Image,
  Grid,
  GridItem,
  Divider,
  HStack,
  ListItem,
  UnorderedList,
  Flex,
  SimpleGrid,
  Heading,
  Container,
  Card,
  CardBody,
  List,
  Tag,
} from "@chakra-ui/react";
import mockupImage from "../assets/steakhouse/mockup1.png";
import { useAlertContext } from "../context/alertContext";
import competitors from "../assets/steakhouse/data/competitors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faFileAlt,
  faLightbulb,
  faPencilRuler,
  faPeopleGroup,
  faRocket,
  faClock,
  faForward,
  faUniversalAccess,
  faExclamationTriangle,
  faCheckCircle,
  faStar,
  faHandPointDown,
  faMapMarkedAlt,
  faEdit,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import evolutiionImage from "../assets/steakhouse/evolution.svg";
import interview from "../assets/steakhouse/interview.svg";
import testingImage from "../assets/steakhouse/testing.svg";
import processImage from "../assets/steakhouse/process.png";
import DividerSection from "../components/DividerSection";
import keyImage from "../assets/steakhouse/key.svg";
import market from "../assets/steakhouse/market.svg";
import decisionImage from "../assets/steakhouse/Decision.svg";
import banner from "../assets/steakhouse/steakhousebanner.png";
import ResponsiveMenu from "../components/ResponsiveMenu";
import mockupBrief from "../assets/steakhouse/steakhousemockup.png";
import CompetitiveAnalysis from "../components/CompetitiveAnalysis";
import PersonasSection from "../components/PersonasSection";
import personas from "../assets/steakhouse/data/personas";
import JourneyMap from "../components/JourneyMap";
import PaperWireframes from "../components/PaperWireFrames";
import DigitalWireframes from "../components/DigitalWireframes";
import digitalWireframes from "../assets/steakhouse/data/digitalWireframes";
import LofiPrototype from "../components/LofiPrototype";
import UsabilityStudy from "../components/UsabilityStudy";
import usabilityData from "../assets/steakhouse/data/usabilityData";
import DesignRefinement from "../components/DesignRefinement";
import Footer from "../components/Footer";
import CaseStudyLayout from "../style/CaseStudyLayout";

const SteakHousePage = () => {
  const { sections, handleClick } = useAlertContext();

  const sectionsProject = [
    { id: "theproject", label: "The Project Brief", icon: faFileAlt },
    {
      id: "understanding",
      label: "understanding the user",
      icon: faPeopleGroup,
    },
    { id: "starting", label: "starting the design", icon: faPencilRuler },
    { id: "refining", label: "refining the design", icon: faBrush },
    { id: "going", label: "going forward", icon: faRocket },
  ];

  return (
    <>
      <ResponsiveMenu isOtherPage sections={sections} />
      <Box position="relative" overflow="hidden" pt={32} px={12}>
        {/* Hero section with dark background and centered headline */}
        <Box
          bg={`linear-gradient(rgba(73,80,87,0.5), rgba(73,80,87,0.8)), url(${banner})`}
          bgSize={"cover"}
          color="semantic.background.primary"
          bgPosition="center"
          bgRepeat="no-repeat"
          py={20}
          px={4}
        >
          <Container
            maxW="container.xl"
            textAlign="center"
            textShadow="0 2px 4px rgba(0,0,0,0.8)"
          >
            <Text as="span" textStyle={"pbold"}>
              A mobile UX Case Study
            </Text>

            <Text
              as="h1"
              textStyle={"h2"}
              lineHeight="1.2"
              mb={8}
              fontWeight="bold"
            >
              How Metropolitan Grill used mobile ordering for $45K+ revenue
              protection & increased customer satisfaction 92%
            </Text>
          </Container>
        </Box>
        {/* Key metrics panel with white background */}
        <Container maxW="container.lg" mt={-8} centerContent>
          <Box
            bg="semantic.background.secondary"
            rounded="lg"
            width="full"
            shadow="xl"
            overflow="hidden"
          >
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={8}
              p={{ base: 8, md: 12 }}
            >
              <Box>
                <Text textStyle={"pbold"} color="semantic.accent" mb={2}>
                  Customer
                </Text>
                <Text textStyle={"pbold"}>Metropolitan Grill</Text>
              </Box>

              <Box>
                <Text textStyle={"pbold"} color="semantic.accent" mb={2}>
                  Description
                </Text>
                <Text color="gray.600">
                  Metropolitan Grill needed a way to preserve their premium
                  dining experience while eliminating dependency on costly
                  third-party delivery platforms.
                </Text>
              </Box>

              <Box>
                <Text textStyle={"pbold"} color="semantic.accent" mb={4}>
                  Key Results
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <Box>
                    <Text textStyle={"h3bold"} color="semantic.accent">
                      92%
                    </Text>
                    <Text textStyle={"caption"} color="gray.600">
                      first-time completion rate
                    </Text>
                  </Box>
                  <Box>
                    <Text textStyle={"h3bold"} color="semantic.accent">
                      $45K
                    </Text>
                    <Text textStyle={"caption"} color="gray.600">
                      in savings on platform fees
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </SimpleGrid>
          </Box>
        </Container>

        <Container maxW="1200px" py={10}>
          <Flex direction={{ base: "column", lg: "row" }} gap={8}>
            {/* Left Side - Problem, Solution, Results */}
            <Box flex="3" minW={{ base: "100%", lg: "60%" }}>
              <VStack align="stretch" spacing={10}>
                {/* Problem Section */}
                <Box color="gray.600">
                  <Heading
                    textStyle="pbold"
                    textTransform={"capitalize"}
                    color="semantic.text.primary"
                    pb={4}
                  >
                    Problem
                  </Heading>
                  <Text textStyle="p">
                    Fine-dining restaurants lose 30% of revenue to delivery
                    platforms while lacking digital infrastructure for direct
                    ordering, compromising their premium brand experience.
                  </Text>
                  <List spacing={2} mt={4} color="semantic.accent">
                    <ListItem
                      display="flex"
                      alignItems="center"
                      color="semantic.accent"
                    >
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        30% revenue loss to third parties
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">Lack of digital ownership</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">Compromised brand experience</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Customer relationship fragmentation
                      </Text>
                    </ListItem>
                  </List>
                </Box>

                {/* Solution Section */}
                <Box color="gray.600">
                  <Heading
                    textStyle="pbold"
                    textTransform={"capitalize"}
                    color="semantic.text.primary"
                    pb={4}
                  >
                    Solution
                  </Heading>

                  <Text textStyle="p">
                    An intuitive mobile ordering system allowing steakhouses to
                    maintain direct customer relationships while preserving
                    their premium dining experience.
                  </Text>
                  <List spacing={2} mt={4} color="semantic.accent">
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Custom-branded mobile experience
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">Streamlined ordering flow</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">Direct customer relationship</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">Premium service features</Text>
                    </ListItem>
                  </List>
                </Box>

                {/* Results Section */}
                <Box color="gray.600">
                  <Heading
                    textStyle="pbold"
                    textTransform={"capitalize"}
                    color="semantic.text.primary"
                    pb={4}
                  >
                    Results
                  </Heading>

                  <Text fontSize="lg" mb={4}>
                    The solution projects to save restaurants 30% in platform
                    fees with remarkably high user satisfaction and task
                    completion rates.
                  </Text>

                  <List spacing={2} mt={4} color="semantic.accent">
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">95% task success rate</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">87% user satisfaction</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        92% first-time completion rate
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">$45K+ in fee savings</Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "8px" }}
                      />
                      <Text color="gray.600">
                        Direct customer data ownership
                      </Text>
                    </ListItem>
                  </List>
                </Box>
              </VStack>
            </Box>

            {/* Right Side - My Role & Approach Card */}
            <Card
              flex="1"
              minW={{ base: "100%", lg: "300px" }}
              maxW={{ base: "100%", lg: "340px" }}
              bg="semantic.background.secondary"
              shadow="xl"
              borderRadius="lg"
              h="fit-content"
            >
              {/* My Role Section */}

              <CardBody>
                <Text textStyle={"pbold"} color="semantic.accent" pb={2}>
                  My Role
                </Text>
                <Text textStyle={"caption"} color="gray.600">
                  Position
                </Text>
                <Text
                  textStyle={"pbold"}
                  textTransform={"capitalize"}
                  color={"semantic.text.primary"}
                  mb={4}
                >
                  Product designer
                </Text>

                <Text textStyle={"caption"} color="gray.600" mb={2}>
                  Responsibilities
                </Text>

                <Flex flexWrap="wrap" gap={2} mb={6}>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    User Research
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    UI Design
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Wireframing
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Usability Testing
                  </Tag>
                  <Tag
                    size="md"
                    variant={"outline"}
                    color={"semantic.text.primary"}
                  >
                    Prototyping
                  </Tag>
                </Flex>

                <Divider variant="regular" />

                {/* Approach Section */}
                <Box pt={2} borderColor="gray.200">
                  <Text textStyle={"pbold"} color="semantic.accent" py={2}>
                    Approach
                  </Text>

                  <Text textStyle={"caption"} color="gray.600">
                    Methodology
                  </Text>
                  <Text
                    textStyle={"pbold"}
                    mb={4}
                    textTransform={"capitalize"}
                    color={"semantic.text.primary"}
                  >
                    User-Centered Design
                  </Text>

                  <Text textStyle={"caption"} color="gray.600">
                    Timeline
                  </Text>
                  <Text
                    textStyle={"pbold"}
                    mb={4}
                    textTransform={"capitalize"}
                    color={"semantic.text.primary"}
                  >
                    8 weeks
                  </Text>

                  <Text textStyle={"caption"} color="gray.600">
                    Team Size
                  </Text>
                  <Text
                    textStyle={"pbold"}
                    textTransform={"capitalize"}
                    color={"semantic.text.primary"}
                  >
                    Solo Designer
                  </Text>
                </Box>
              </CardBody>
            </Card>
          </Flex>
        </Container>
      </Box>
      <Divider variant="dividerSection" />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        w={"100%"}
        p={24}
        textAlign="center"
      >
        <Text textStyle="h3" color="semantic.text.primary">
          Read the full case study below
        </Text>
        <Text textStyle="p" color="gray.600">
          Explore the detailed process, user research insights, and design
          decisions
        </Text>
        <Text textStyle="caption" color="gray.500" pb={4}>
          5 mins read
        </Text>
        <Box
          onClick={() => handleClick("theproject")}
          cursor="pointer"
          color="semantic.accent"
        >
          <FontAwesomeIcon icon={faHandPointDown} size="2x" />
        </Box>
      </Box>
      <Divider variant="dividerSection" />
      <Box position="relative" pt={16} px={12}>
        <CaseStudyLayout sections={sectionsProject}>
          <VStack align="stretch" spacing={10} pb={12} id="theproject">
            {/* Overview Section */}
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                Overview
              </Heading>
              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  Background
                </Text>
                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    McKinsey reports 62% of fine-dining establishments lost
                    market share to digital competitors, while 92% of
                    millennials prefer restaurants with digital ordering. This
                    project bridges the gap between traditional steakhouse
                    service and modern dining preferences through innovative
                    mobile ordering.
                  </Text>
                </Box>
              </Box>
              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  Relevance
                </Text>
                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    As consumer behavior continues to favor digital convenience,
                    restaurants must adapt to maintain direct relationships with
                    customers. The gap between premium dining experiences and
                    digital accessibility represents a critical business
                    challenge.
                  </Text>
                </Box>
              </Box>
              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  My Impact
                </Text>
                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    I led user research, created wireframes, and conducted
                    iterative testing to design an intuitive ordering system.
                    Beginning with contextual interviews of staff and diners, I
                    mapped the existing experience to identify key pain points.
                    My design process involved collaborative sketching sessions,
                    rapid prototyping in Figma, and weekly user testing with
                    Metropolitan Grill's regular customers.
                  </Text>
                </Box>
              </Box>
              <HStack
                justifyContent="center"
                width="100%"
                alignItems="center"
                spacing={12}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  pb={4}
                >
                  <Image
                    src={mockupImage}
                    alt="Location selection screen"
                    height={"auto"}
                    maxHeight={"600px"}
                  />
                  <Text as="p" textStyle="caption" textAlign="center" mt={2}>
                    Main screen showing location selection interface
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  pb={4}
                >
                  <Image
                    src={mockupBrief}
                    alt="Modifications Screen"
                    height={"auto"}
                    maxHeight={"600px"}
                  />
                  <Text as="p" textStyle="caption" textAlign="center" mt={2}>
                    Food item modification screen
                  </Text>
                </Box>
              </HStack>
            </Box>
            <Box
              rounded="lg"
              width="full"
              bg="semantic.background.secondary"
              p={{ base: 8, md: 12 }}
            >
              <Box textAlign="center">
                <Heading
                  textStyle="pbold"
                  textTransform={"capitalize"}
                  color="semantic.text.primary"
                  
                >
                  Quick Stats
                </Heading>
                <Text textStyle={"caption"} color="gray.600">
                  Usability testing results overview
                </Text>
              </Box>
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={6}
                textAlign="center"
                textTransform="capitalize"
              >
                <Box>
                  <Text textStyle={"h3bold"} color="semantic.accent">
                    95%
                  </Text>
                  <Text textStyle={"caption"} color="gray.600">
                    first-time completion rate
                  </Text>
                </Box>
                <Box>
                  <Text textStyle={"h3bold"} color="semantic.accent">
                    87%
                  </Text>
                  <Text textStyle={"caption"} color="gray.600">
                    user satisfaction
                  </Text>
                </Box>
                <Box>
                  <Text textStyle={"h3bold"} color="semantic.accent">
                    92%
                  </Text>
                  <Text textStyle={"caption"} color="gray.600">
                    first-time completion
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>

            {/* MVP */}

            <Box pb={4}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                Minimum Viable Product (MVP)
              </Text>
              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color="gray.600">
                  The initial release focuses on core ordering functionality to
                  provide immediate value and reduce third-party platform
                  dependency. Starting with essential features allows quick
                  market entry while gathering user feedback for future
                  iterations.
                </Text>
              </Box>
            </Box>
            <Box pb={4}>
              <SimpleGrid
                columns={{ base: 1, md: 4 }}
                spacing={6}
                textAlign="center"
                textTransform="capitalize"
              >
                <Box
                  bg="semantic.background.secondary"
                  p={4}
                  borderRadius="lg"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FontAwesomeIcon
                    icon={faMapMarkedAlt}
                    color="#107c7c"
                    size="2xl"
                  />
                  <Text
                    textStyle={"captionbold"}
                    color="semantic.text.primary"
                    textTransform="uppercase"
                    py={4}
                  >
                    Restaurant Localization
                  </Text>
                </Box>

                <Box
                  bg="semantic.background.secondary"
                  p={4}
                  borderRadius="lg"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FontAwesomeIcon icon={faEdit} color="#107c7c" size="2xl" />
                  <Text
                    textStyle={"captionbold"}
                    color="semantic.text.primary"
                    textTransform="uppercase"
                    py={4}
                  >
                    Order Modification System
                  </Text>
                </Box>

                <Box
                  bg="semantic.background.secondary"
                  p={4}
                  borderRadius="lg"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FontAwesomeIcon icon={faClock} color="#107c7c" size="2xl" />
                  <Text
                    textStyle={"captionbold"}
                    color="semantic.text.primary"
                    textTransform="uppercase"
                    py={4}
                  >
                    Order Tracking
                  </Text>
                </Box>

                <Box
                  bg="semantic.background.secondary"
                  p={4}
                  borderRadius="lg"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    color="#107c7c"
                    size="2xl"
                  />
                  <Text
                    textStyle={"captionbold"}
                    color="semantic.text.primary"
                    textTransform="uppercase"
                    py={4}
                  >
                    Streamlined Checkout
                  </Text>
                </Box>
              </SimpleGrid>
              <Text as="p" textStyle="caption" textAlign="center" mt={2}>
                Key features
              </Text>
            </Box>

            {/* Process */}

            <Box pb={4}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                Process
              </Text>
              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color="gray.600">
                  The design process followed a user-centered approach, starting
                  with research to understand user needs and pain points. This
                  was followed by ideation, prototyping, and iterative testing
                  to refine the solution.
                </Text>
              </Box>
              <Box pt={4} textAlign="center">
                <Box
                  rounded="lg"
                  width="full"
                  bg="semantic.background.secondary"
                  p={{ base: 8, md: 12 }}
                >
                  <Image src={processImage} />
                  <Text textStyle={"caption"} color="gray.600">
                    My UX design process approach
                  </Text>
                </Box>
              </Box>
            </Box>
          </VStack>
          <DividerSection icon={faPeopleGroup} />

          <VStack align="stretch" spacing={10} py={12} id="understanding">
            {/* phase 1 Section */}
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 1: understanding the user
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                My research phase focused on understanding user behaviors, pain
                points, and expectations in the premium dining space. This phase
                included conducting interviews, competitive analysis, creating
                user personas, and journey mapping.
              </Text>
              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  user interviews
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    Conducted in-depth interviews with 5 target users who
                    frequently order from high-end restaurants, supplemented
                    with a survey of 50 potential users. The research focused on
                    understanding ordering habits, platform preferences, and
                    pain points.
                  </Text>
                  <HStack>
                    <a
                      href="https://docs.google.com/document/d/1_bSvOb4faRBJYChBRK_NEP-MLRGCa-rKMXR8q6mRnuk/edit?tab=t.0#heading=h.8cpmn7co03qe"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text
                        as="p"
                        textStyle={"p"}
                        decoration={"underline"}
                        textTransform={"capitalize"}
                      >
                        View Interview script
                      </Text>
                    </a>
                    <Text>•</Text>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSd8DqP5SgzPKancNsTKjiiPY6tROzt2gcNHvwdfWJTbPA-1bA/viewform"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text
                        as="p"
                        textStyle={"p"}
                        decoration={"underline"}
                        textTransform={"capitalize"}
                      >
                        View survey questions
                      </Text>
                    </a>
                  </HStack>
                </Box>
              </Box>
            </Box>
            {/* Key Findings */}
            <Box
              rounded="lg"
              width="full"
              bg="semantic.background.secondary"
              p={{ base: 8, md: 12 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
              >
                <Image
                  src={interview}
                  alt="interview Illustration"
                  maxW="100px"
                />
              </Box>
              <Box textAlign="center">
                <Heading
                  textStyle="pbold"
                  textTransform={"capitalize"}
                  color="semantic.accent"
                  pb={2}
                >
                  Key findings
                </Heading>
                <Text textStyle={"caption"} color="gray.600">
                  Research results overview
                </Text>
              </Box>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {/* Finding 1 */}
                <VStack align="center" spacing={4}>
                  <Text textStyle="h3bold" color="semantic.accent">
                    80%
                  </Text>
                  <Text
                    textStyle="caption"
                    color="gray.600"
                    textTransform="capitalize"
                    textAlign="center"
                  >
                    of users abandon orders due to complex modification systems
                  </Text>
                  <Divider variant={"regular"} />
                  <UnorderedList
                    spacing={2}
                    alignSelf="start"
                    pl={4}
                    mt={2}
                    textStyle={"caption"}
                    color="gray.600"
                  >
                    <ListItem>
                      Users struggle with current platforms' limited
                      customization options
                    </ListItem>
                    <ListItem>
                      Special requests are often mishandled or overlooked
                    </ListItem>
                    <ListItem>
                      Lack of clear confirmation for modifications
                    </ListItem>
                  </UnorderedList>
                </VStack>

                {/* Finding 2 */}
                <VStack align="center" spacing={4}>
                  <Text textStyle="h3bold" color="semantic.accent">
                    73%
                  </Text>
                  <Text
                    textStyle="caption"
                    color="gray.600"
                    textTransform="capitalize"
                    textAlign="center"
                  >
                    of users prefer ordering directly from restaurants
                  </Text>
                  <Divider variant={"regular"} />
                  <UnorderedList
                    spacing={2}
                    alignSelf="start"
                    pl={4}
                    mt={2}
                    textStyle={"caption"}
                    color="gray.600"
                  >
                    <ListItem>
                      High delivery platform fees are a major concern
                    </ListItem>
                    <ListItem>
                      Users want to support restaurants directly
                    </ListItem>
                    <ListItem>
                      Quality assurance is higher with direct ordering
                    </ListItem>
                  </UnorderedList>
                </VStack>

                {/* Finding 3 */}
                <VStack align="center" spacing={4}>
                  <Text textStyle="h3bold" color="semantic.accent">
                    65%
                  </Text>
                  <Text
                    textStyle="caption"
                    color="gray.600"
                    textTransform="capitalize"
                    textAlign="center"
                  >
                    of users value real-time order tracking
                  </Text>
                  <Divider variant={"regular"} />
                  <UnorderedList
                    spacing={2}
                    alignSelf="start"
                    pl={4}
                    mt={2}
                    textStyle={"caption"}
                    color="gray.600"
                  >
                    <ListItem>
                      Current platforms provide limited status updates
                    </ListItem>
                    <ListItem>
                      Users want accurate preparation time estimates
                    </ListItem>
                    <ListItem>
                      Clear communication about delays is essential
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </SimpleGrid>
            </Box>

            {/* Competitive analysis */}

            <Box pb={4}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                competitive analysis
              </Text>

              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color="gray.600">
                  To understand the current market landscape, I analyzed both
                  direct competitors (premium restaurant apps) and indirect
                  competitors (food delivery platforms). The analysis focused on
                  user experience, feature sets, and business models to identify
                  opportunities for differentiation.
                </Text>
              </Box>
              <CompetitiveAnalysis competitors={competitors} />

              {/*Market Opportunity */}
              <Box
                rounded="lg"
                width="full"
                bg="semantic.background.secondary"
                p={{ base: 8, md: 12 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                >
                  <Image
                    src={market}
                    alt="interview Illustration"
                    maxW="100px"
                  />
                </Box>
                <Box textAlign="center">
                  <Heading
                    textStyle="pbold"
                    textTransform={"capitalize"}
                    color="semantic.accent"
                    pb={2}
                  >
                    market opportunity
                  </Heading>

                  <Text textStyle={"caption"} color="gray.600">
                    Based on this analysis, there's a clear opportunity to
                    combine premium restaurant quality with the technical
                    convenience of delivery platforms, while eliminating high
                    fees and maintaining food quality.
                  </Text>
                </Box>
              </Box>
            </Box>

            {/* Personas */}

            <Box pb={3}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                User personas
              </Text>

              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color="gray.600">
                  Based on user interviews and survey data, I developed two
                  distinct personas representing our core user groups. These
                  personas helped guide design decisions and feature
                  prioritization throughout the project.
                </Text>
              </Box>
              <PersonasSection personas={personas} />
            </Box>

            {/* user journey */}

            <Box pb={4}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                Journey Map
              </Text>

              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color="gray.600">
                  Mapping the current ordering experience to identify pain
                  points and opportunities for improvement.
                </Text>
              </Box>
              <JourneyMap />
            </Box>
          </VStack>
          <DividerSection icon={faPencilRuler} />

          <VStack align="stretch" spacing={10} py={12} id="starting">
            {/* phase 2 Section */}
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 2: starting the design
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                After conducting user research and identifying key
                opportunities, I began the design process with paper wireframes.
                This phase focused on rapidly exploring different concepts and
                layouts before moving into digital wireframes and prototypes.
                The design process included:
              </Text>

              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  paper wireframes
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    Using the Crazy 8 method, I explored different approaches to
                    the main ordering interface. After sketching five
                    variations, I refined the most promising concept that best
                    addressed user needs and business goals.
                  </Text>
                </Box>
                <PaperWireframes />
                {/*Design Decisions */}
                <Box
                  rounded="lg"
                  width="full"
                  bg={"semantic.background.secondary"}
                  p={{ base: 8, md: 12 }}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                  >
                    <Image
                      src={decisionImage}
                      alt="Decision Illustration"
                      maxW="100px"
                    />
                  </Box>
                  <Box textAlign="center">
                    <Heading
                      textStyle="pbold"
                      textTransform={"capitalize"}
                      color="semantic.accent"
                      pb={2}
                    >
                      Design decisions
                    </Heading>

                    <Text textStyle={"caption"} color="gray.600">
                      After exploring multiple layouts, I selected and refined
                      the most effective design that prioritized easy location
                      selection and clear menu navigation. This approach best
                      addressed our users' need for quick and efficient
                      ordering.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* Digital wireframes */}
            <Box pb={4}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                digital wireframes
              </Text>

              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color="gray.600">
                  Taking the refined paper concepts into Figma, I created
                  detailed digital wireframes to establish clear user flows and
                  interface hierarchy. These wireframes focused on implementing
                  key features identified during user research while maintaining
                  simplicity and usability.
                </Text>
              </Box>
              <DigitalWireframes digital={digitalWireframes} />
              {/*Design Evolution */}
              <Box
                rounded="lg"
                width="full"
                bg={"semantic.background.secondary"}
                p={{ base: 8, md: 12 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                >
                  <Image
                    src={evolutiionImage}
                    alt="evolution image"
                    maxW="100px"
                  />
                </Box>
                <Box textAlign="center">
                  <Heading
                    textStyle="pbold"
                    textTransform={"capitalize"}
                    color="semantic.accent"
                    pb={2}
                  >
                    Design evolution
                  </Heading>

                  <Text textStyle={"caption"} color="gray.600">
                    The digital wireframes expanded upon the paper concepts,
                    adding detailed interactions and refined user flows. Key
                    improvements included enhanced location filtering,
                    streamlined customization options, and clearer order
                    tracking visualization.
                  </Text>
                </Box>
              </Box>
            </Box>

            {/* Low FI Prototype */}

            <Box pb={4}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                Low-fidelity prototype
              </Text>

              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color="gray.600">
                  I created a clickable prototype in Figma to test the core user
                  flows and gather feedback on the basic interface structure.
                  This helped validate our design direction before moving into
                  high-fidelity designs.
                </Text>
              </Box>
              <LofiPrototype />
              {/*Prototype testing */}
              <Box
                rounded="lg"
                width="full"
                // border="1px"
                // borderColor="semantic.divider"
                p={{ base: 8, md: 12 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                bg="semantic.background.secondary"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                >
                  <Image
                    src={testingImage}
                    alt="evolution image"
                    maxW="100px"
                  />
                </Box>
                <Box textAlign="center">
                  <Heading
                    textStyle="pbold"
                    textTransform={"capitalize"}
                    color="semantic.accent"
                    pb={2}
                  >
                    prototype testing
                  </Heading>

                  <Text textStyle={"caption"} color="gray.600">
                    This low-fidelity prototype connected key screens to create
                    a clickable experience, allowing us to test the core
                    functionalities of location selection, menu customization,
                    and checkout process. User feedback from these tests
                    informed our next design iterations.
                  </Text>
                </Box>
              </Box>
            </Box>

            {/*Test*/}
            <Box pb={4}>
              <Text
                textStyle="pbold"
                textTransform="uppercase"
                color="gray.600"
                pb={3}
                as="h3"
              >
                Usability study
              </Text>

              <Box
                pl={5}
                py={4}
                borderLeftWidth="2px"
                borderLeftColor="semantic.background.tertiary"
              >
                <Text textStyle="p" color="gray.600">
                  Conducted two rounds of usability studies with 5 participants
                  per round. The findings helped identify key areas for
                  improvement in the ordering experience.
                </Text>
              </Box>
              <UsabilityStudy usabilityData={usabilityData} />
              {/*Key Improvments */}
              <Box
                rounded="lg"
                width="full"
                p={{ base: 8, md: 12 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                bg="semantic.background.secondary"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                >
                  <Image src={keyImage} alt="key image" maxW="100px" />
                </Box>
                <Box textAlign="center">
                  <Heading
                    textStyle="pbold"
                    textTransform={"capitalize"}
                    color="semantic.accent"
                    pb={2}
                  >
                    Key Improvements
                  </Heading>

                  <Text textStyle={"caption"} color="gray.600">
                    After implementing changes based on Round 1 feedback, Round
                    2 testing showed significant improvements in user navigation
                    and task completion. The refined interface led to better
                    understanding of customization options and a more confident
                    checkout process.
                  </Text>
                </Box>
              </Box>
            </Box>
          </VStack>

          <DividerSection icon={faBrush} />

          <VStack align="stretch" spacing={10} py={12} id="refining">
            {/* phase 3 Section */}
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 3: refining the design
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                Through two rounds of usability testing and iteration, the
                design evolved from a basic ordering system to an intuitive
                dining experience that puts users' needs first.
              </Text>

              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  mockups
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    The final mockups incorporated usability feedback to improve
                    navigation, accessibility, and clarity. The design focused
                    on creating a seamless ordering experience that aligns with
                    user expectations and enhances the overall dining journey.
                  </Text>
                </Box>
                <DesignRefinement />
                {/*Design Decisions */}
                <Box
                  rounded="lg"
                  width="full"
                  bg={"semantic.background.secondary"}
                  p={{ base: 8, md: 12 }}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                  >
                    <Image
                      src={decisionImage}
                      alt="Decision Illustration"
                      maxW="100px"
                    />
                  </Box>
                  <Box textAlign="center">
                    <Heading
                      textStyle="pbold"
                      textTransform={"capitalize"}
                      color="semantic.accent"
                      pb={2}
                    >
                      Design Impact
                    </Heading>

                    <Text textStyle={"caption"} color="gray.600">
                      Through iterative design and user testing, I created an
                      intuitive ordering system that significantly improved the
                      user experience. The final design successfully addresses
                      key user pain points while maintaining the premium feel of
                      the steakhouse brand.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </VStack>

          <DividerSection icon={faRocket} />

          <VStack align="stretch" spacing={10} py={12} id="going">
            {/* phase 3 Section */}
            <Box color="gray.600">
              <Heading
                textStyle="pbold"
                textTransform={"capitalize"}
                color="semantic.text.primary"
                pb={4}
              >
                phase 4: going forward
              </Heading>
              <Text as="p" textStyle="p" pb={4}>
                This project provided valuable insights about user-centered
                design and the importance of iterative development in creating
                impactful solutions.
              </Text>
              <Box w="100%" color={"gray.600"} py={8}>
                <VStack align="stretch" spacing={8}>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={4}
                    overflowX="auto"
                  >
                    {/* Accessibility */}
                    <GridItem>
                      <VStack
                        align="stretch"
                        bg="semantic.background.secondary"
                        p={4}
                        h="100%"
                        spacing={4}
                        rounded="lg"
                      >
                        <VStack>
                          <Box color="semantic.accent">
                            <FontAwesomeIcon
                              icon={faUniversalAccess}
                              size="xl"
                            />
                          </Box>
                          <Text
                            textStyle={"captionbold"}
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Accessibility Considerations
                          </Text>
                        </VStack>
                        <Divider variant={"dividerSection"} />

                        <UnorderedList spacing={3}>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              WCAG 2.1 compliant design system
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              Screen reader optimization
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              Keyboard navigation support
                            </Text>
                          </ListItem>
                        </UnorderedList>
                      </VStack>
                    </GridItem>

                    {/* Key Learnings */}
                    <GridItem>
                      <VStack
                        align="stretch"
                        bg="semantic.background.secondary"
                        p={4}
                        h="100%"
                        spacing={4}
                        rounded="lg"
                      >
                        <VStack>
                          <Box color="semantic.accent">
                            <FontAwesomeIcon icon={faLightbulb} size="xl" />
                          </Box>
                          <Text
                            textStyle={"captionbold"}
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Key Learnings
                          </Text>
                        </VStack>
                        <Divider variant={"dividerSection"} />

                        <UnorderedList spacing={3}>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              Balancing business requirements with user needs
                              creates the most effective solutions
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              Early user testing saves development time and
                              improves final outcomes
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              Designing for accessibility from the start
                              benefits all users
                            </Text>
                          </ListItem>
                        </UnorderedList>
                      </VStack>
                    </GridItem>

                    {/* Next Steps */}
                    <GridItem>
                      <VStack
                        align="stretch"
                        bg="semantic.background.secondary"
                        p={4}
                        h="100%"
                        spacing={4}
                        rounded="lg"
                      >
                        <VStack>
                          <Box color="semantic.accent">
                            <FontAwesomeIcon icon={faForward} size="xl" />
                          </Box>
                          <Text
                            textStyle={"captionbold"}
                            color="semantic.text.primary"
                            textTransform="uppercase"
                          >
                            Next Steps
                          </Text>
                        </VStack>
                        <Divider variant={"dividerSection"} />
                        <UnorderedList spacing={3}>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              Develop personalized recommendation system
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              Implement loyalty program features
                            </Text>
                          </ListItem>
                          <ListItem gap={2}>
                            <Text textStyle="caption">
                              Add multi-language support
                            </Text>
                          </ListItem>
                        </UnorderedList>
                      </VStack>
                    </GridItem>
                  </Grid>
                </VStack>
              </Box>

              <Box pb={4}>
                <Text
                  textStyle="pbold"
                  textTransform="uppercase"
                  color="gray.600"
                  pb={3}
                  as="h3"
                >
                  Takeaways
                </Text>

                <Box
                  pl={5}
                  py={4}
                  borderLeftWidth="2px"
                  borderLeftColor="semantic.background.tertiary"
                >
                  <Text textStyle="p">
                    This project transformed my approach to UX design in several
                    key ways:
                  </Text>
                  <VStack align="stretch">
                    <UnorderedList textStyle={"p"} pb={4}>
                      <ListItem>
                        <Text>
                          <strong>Research Impact:</strong> Learned how early
                          user insights can significantly reduce development
                          time and improve final outcomes.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text>
                          <strong>Business Thinking:</strong> Developed ability
                          to balance user needs with business requirements while
                          maintaining design integrity.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text>
                          <strong>Leadership Growth:</strong> Gained confidence
                          in presenting design decisions and leading stakeholder
                          discussions.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text>
                          <strong>Technical Understanding:</strong> Deepened
                          knowledge of accessibility standards and responsive
                          design principles.
                        </Text>
                      </ListItem>
                    </UnorderedList>
                    <Text textStyle={"p"}>
                      These insights have fundamentally shaped my design
                      philosophy, emphasizing the importance of user-centered
                      design, iterative development, and inclusive thinking in
                      creating impactful digital experiences.
                    </Text>
                  </VStack>
                </Box>
              </Box>
            </Box>
          </VStack>
        </CaseStudyLayout>
      </Box>

      <Divider variant="section" />

      {/* FIFTH SECTION SYNTHESIS CLOSE*/}

      <Footer />
    </>
  );
};

export default SteakHousePage;
