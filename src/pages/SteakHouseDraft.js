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
  AspectRatio,
  Show,
  Hide,
  useColorModeValue,
  SimpleGrid,
  Heading,
  Circle,
  Icon,
  Container,
  Card,
  CardHeader,
  CardBody,
  ListIcon,
  List,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import mockupImage from "../assets/steakhouse/mockup1.png";
import { useAlertContext } from "../context/alertContext";
import competitors from "../assets/steakhouse/data/competitors";
import VerticalProgressBar from "../components/VerticalProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faCheck,
  faFileAlt,
  faLightbulb,
  faPencilRuler,
  faPeopleGroup,
  faRocket,
  faZap,
  faThumbsUp,
  faMobile,
  faSackDollar,
  faClock,
  faForward,
  faUniversalAccess,
  faWarning,
  faExclamationTriangle,
  faCheckCircle,
  faStar,
  faArrowDownUpAcrossLine,
  faArrowDown91,
  faArrowsDownToLine,
  faHandPointDown,
  faMapMarkedAlt,
  faEdit,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiThumbsUp,
  FiTrendingUp,
  FiX,
  FiAlertCircle,
  FiCalendar,
} from "react-icons/fi";
import Badges from "../components/Badges";
import problemImage from "../assets/steakhouse/Question.svg";
import evolutiionImage from "../assets/steakhouse/evolution.svg";
import goalImage from "../assets/steakhouse/Checklist.svg";
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
import impactImage from "../assets/steakhouse/impact.svg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import mockupOverview from "../assets/steakhouse/mockup1.png";
import metropolitanLogo from "../assets/steakhouse/metropolitan-grill-high-resolution-logo-grayscale-transparent.png";
import cdxLogo from "../assets/archives/dxcenterlogo_color.png";
import OverlayImage from "../components/OverlayImage";
import MuteButton from "../components/MuteButton";
import CustomizedButton from "../components/CustomizedButton";

const SteakHousePage = () => {
  const { sections, handleClick } = useAlertContext();
  const prototypeUrl =
    "https://embed.figma.com/proto/jTg5y0K73FjmiGZxtmegGA/My-project-(steakhouse)?page-id=1184%3A9871&node-id=1184-9872&viewport=502%2C578%2C0.5&scaling=scale-down&starting-point-node-id=1184%3A9872&show-proto-sidebar=0&embed-host=share&hide-ui=1";

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

  const problemColor = "red.600";
  const solutionColor = "yellow.600";
  const resultColor = "green.600";
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const bgDark = "gray.900";
  const bgLight = "white";
  const textDark = "red";
  const textLight = "gray.700";
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("#4a7c59", "#6da47e");
  const iconBg = useColorModeValue("#f5f5f5", "gray.600");
  const accentColor = useColorModeValue("#4a7c59", "#6da47e");
  const sectionNumberBg = useColorModeValue("gray.100", "gray.700");
  const tagBg = "semantic.background.secondary";
  const sidebarBg = useColorModeValue("gray.50", "gray.800");
  const highlightTagBg = useColorModeValue("green.50", "green.900");
  const highlightTagColor = useColorModeValue("green.700", "green.200");

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
                  <List spacing={2} mt={4} color="semantic.text.primary">
                    <ListItem display="flex" alignItems="center">
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
                  <List spacing={2} mt={4} color="semantic.text.primary">
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

                  <List spacing={2} mt={4} color="semantic.text.primary">
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
        <Box onClick={() => handleClick("theproject")} cursor="pointer">
          <FontAwesomeIcon icon={faHandPointDown} size="2x" />
        </Box>
      </Box>
      <Divider variant="dividerSection" />
      <Box position="relative" overflow="hidden" pt={16} px={12}>
        <Container maxW="1200px" py={10}>
          <Flex direction={{ base: "column", lg: "row" }} gap={8}>
            {/* Left Side - Problem, Solution, Results */}
            <Box flex="3" minW={{ base: "100%", lg: "60%" }}>
              <VStack align="stretch" spacing={10}>
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
                        millennials prefer restaurants with digital ordering.
                        This project bridges the gap between traditional
                        steakhouse service and modern dining preferences through
                        innovative mobile ordering.
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
                        As consumer behavior continues to favor digital
                        convenience, restaurants must adapt to maintain direct
                        relationships with customers. The gap between premium
                        dining experiences and digital accessibility represents
                        a critical business challenge.
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
                        iterative testing to design an intuitive ordering
                        system. Beginning with contextual interviews of staff
                        and diners, I mapped the existing experience to identify
                        key pain points. My design process involved
                        collaborative sketching sessions, rapid prototyping in
                        Figma, and weekly user testing with Metropolitan Grill's
                        regular customers.
                      </Text>
                    </Box>
                  </Box>
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
                </Box>
                <Box
                  rounded="lg"
                  width="full"
                  border="1px"
                  borderColor="semantic.divider"
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
                    <Text textStyle="p">
                      The initial release focuses on core ordering functionality
                      to provide immediate value and reduce third-party platform
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
                      <FontAwesomeIcon
                        icon={faEdit}
                        color="#107c7c"
                        size="2xl"
                      />
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
                      <FontAwesomeIcon
                        icon={faClock}
                        color="#107c7c"
                        size="2xl"
                      />
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
                    <Text textStyle="p">
                      The design process followed a user-centered approach,
                      starting with research to understand user needs and pain
                      points. This was followed by ideation, prototyping, and
                      iterative testing to refine the solution.
                    </Text>
                  </Box>
                  <Box pt={4} textAlign="center">
                  <Box
                    rounded="lg"
                    width="full"
                    border="1px"
                    borderColor="semantic.divider"
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

      <Divider variant="section" />

      <Grid
        templateColumns={{ base: "1fr", md: "320px 3px 1fr" }}
        height="100vh"
        alignItems="start"
        w={"100%"}
        overflow={"hidden"}
      >
        <Box
          display={{ base: "none", md: "block" }}
          visibility={{ base: "hidden", md: "visible" }}
          position={"sticky"}
          top="4"
          height="fit-content"
          pt={12}
        >
          <VerticalProgressBar sections={sectionsProject} />
        </Box>
        <Divider orientation="vertical" variant="thick" />

        <Box overflowY="auto" height={"100%"} data-scroll-container="true">
          {/* ALL CONTENT HERE */}

          {/* FIRST SECTION OVERVIEW*/}
          <section>
            <Box id="theproject">
              <Box px={12}>
                <VStack alignItems="start" pt={12}>
                  <Text textStyle="h2">Overview</Text>

                  <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={6}
                    color="gray.600"
                    pb={12}
                  >
                    {/* Text Columns */}
                    <GridItem>
                      <Box pb={4}>
                        <Text
                          textStyle="pbold"
                          textTransform={"uppercase"}
                          color="semantic.text.primary"
                        >
                          Background
                        </Text>
                        <Text textStyle="p">
                          McKinsey reports 62% of fine-dining establishments
                          lost market share to digital competitors, while 92% of
                          millennials prefer restaurants with digital ordering.
                          This project bridges the gap between traditional
                          steakhouse service and modern dining preferences
                          through innovative mobile ordering.
                        </Text>
                      </Box>

                      <Box pb={4}>
                        <Text
                          textStyle="pbold"
                          textTransform={"uppercase"}
                          color="semantic.text.primary"
                        >
                          Relevance
                        </Text>
                        <Text textStyle="p">
                          With delivery platforms charging 30% per order on
                          $150+ steakhouse transactions, restaurants lose $45+
                          per sale. This project creates a proprietary system
                          that eliminates costly third-party dependencies while
                          maintaining premium standards.
                        </Text>
                      </Box>

                      <Box pb={4}>
                        <Text
                          textStyle="pbold"
                          textTransform={"uppercase"}
                          color="semantic.text.primary"
                        >
                          My impact
                        </Text>
                        <Text textStyle="p">
                          I led user research, created wireframes, and conducted
                          iterative testing to design an intuitive ordering
                          system. The solution projects to save restaurants 30%
                          in platform fees through direct-to-consumer ordering.
                        </Text>
                      </Box>
                    </GridItem>

                    {/* image Column */}
                    <GridItem display="flex" justifyContent="center">
                      <Box pb={4}>
                        <Show above="md">
                          <Text textStyle="pbold" mb={4}>
                            Interact with the prototype and complete an order!
                          </Text>
                        </Show>

                        {/* Mobile Text */}
                        <Hide above="md">
                          <Text textStyle="pbold" mb={4}>
                            Click below to try the prototype!
                          </Text>
                          <a
                            href={prototypeUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Text
                              as="p"
                              textStyle="p"
                              decoration="underline"
                              textTransform="capitalize"
                              mt={2}
                            >
                              Click here to start
                            </Text>
                          </a>
                        </Hide>

                        {/* Desktop: Show Prototype */}
                        <Show above="md">
                          <AspectRatio ratio={9 / 16} maxH="650px">
                            <iframe
                              title="figma-prototype"
                              src={prototypeUrl}
                              style={{
                                border: "1px solid rgba(0, 0, 0, 0.1)",
                                width: "100%",
                              }}
                              allowFullScreen
                            />
                          </AspectRatio>
                        </Show>

                        {/* Mobile: Show Image with Link */}
                        <Hide above="md">
                          <Link href={prototypeUrl} isExternal>
                            <Image
                              src={mockupOverview} // Replace with your mockup image path
                              alt="Steakhouse Prototype Mockup"
                              objectFit="cover"
                            />
                          </Link>
                        </Hide>
                      </Box>
                    </GridItem>
                  </Grid>
                </VStack>
              </Box>

              {/* Quick stats */}

              <Box
                backgroundColor={"semantic.background.secondary"}
                w={"100%"}
                p={12}
              >
                <VStack alignItems="center">
                  <Text textStyle="h2">Quick Stats</Text>

                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    textAlign={"center"}
                    color="gray.600"
                  >
                    <GridItem>
                      <Box pb={4}>
                        <HStack
                          align={"center"}
                          justifyContent={"center"}
                          color={"semantic.accent"}
                        >
                          <FontAwesomeIcon icon={faCheck} size="xl" />
                          <Text as="p" textStyle="h3">
                            95%
                          </Text>
                        </HStack>

                        <Text textStyle={"caption"} textTransform="capitalize">
                          Task success rate
                        </Text>
                      </Box>
                    </GridItem>

                    {/* Text Column 2 */}
                    <GridItem>
                      <Box pb={4}>
                        <HStack
                          align={"center"}
                          justifyContent={"center"}
                          color={"semantic.accent"}
                        >
                          <FontAwesomeIcon icon={faThumbsUp} size="xl" />
                          <Text as="p" textStyle="h3">
                            87%
                          </Text>
                        </HStack>
                        <Text textStyle={"caption"} textTransform="capitalize">
                          User satisfaction
                        </Text>
                      </Box>
                    </GridItem>

                    {/* Text Column 4 */}
                    <GridItem>
                      <Box pb={4}>
                        <HStack
                          align={"center"}
                          justifyContent={"center"}
                          color={"semantic.accent"}
                        >
                          <FontAwesomeIcon icon={faZap} size="xl" />
                          <Text as="p" textStyle="h3">
                            92%
                          </Text>
                        </HStack>
                        <Text textStyle={"caption"} textTransform="capitalize">
                          First-time completion
                        </Text>
                      </Box>
                    </GridItem>
                  </Grid>
                </VStack>
              </Box>

              {/* Problem & Goal */}

              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap={6}
                pt={12}
                px={12}
                color={"gray.600"}
              >
                {/* Text Column 1 */}
                <GridItem>
                  <Box pb={4}>
                    <Text
                      textStyle="pbold"
                      textAlign={"center"}
                      textTransform={"uppercase"}
                      color="semantic.text.primary"
                    >
                      Problem
                    </Text>
                    <Box maxW="300px" mx="auto">
                      <Image src={problemImage} alt="problem Illustration" />
                    </Box>
                    <Text textStyle="p">
                      Fine-dining restaurants lose 30% of revenue to delivery
                      platforms while lacking the digital infrastructure to
                      offer direct ordering. This creates a significant barrier
                      for steakhouses trying to meet the growing demand for
                      convenient dining options without compromising their
                      premium brand experience.
                    </Text>
                  </Box>
                </GridItem>

                {/* Text Column 2 */}
                <GridItem>
                  <Box pb={4}>
                    <Text
                      textStyle="pbold"
                      textAlign={"center"}
                      textTransform={"uppercase"}
                      color="semantic.text.primary"
                    >
                      Goal
                    </Text>
                    <Box maxW="300px" mx="auto">
                      <Image src={goalImage} />
                    </Box>
                    <Text textStyle="p">
                      Design an intuitive mobile ordering system that allows
                      steakhouses to maintain direct relationships with
                      customers, preserve their premium dining experience, and
                      eliminate dependency on costly third-party platforms.
                    </Text>
                  </Box>
                </GridItem>
              </Grid>

              {/* QUESTION & SOLUTION OPEN */}

              <Box
                backgroundColor={"semantic.background.secondary"}
                w={"100%"}
                p={12}
              >
                <VStack alignItems="center">
                  <Text
                    textStyle="pbold"
                    textAlign={"center"}
                    color="semantic.text.primary"
                    textTransform={"uppercase"}
                  >
                    Process
                  </Text>
                  <Box>
                    <Image src={processImage} />
                    <figcaption>
                      <Text as="p" textStyle="caption" textAlign="center">
                        Figure 1: UX Design process approach
                      </Text>
                    </figcaption>
                  </Box>
                </VStack>
              </Box>

              {/* QUESTION & SOLUTION CLOSE */}

              {/* IMPACT OPEN */}

              <Box w={"100%"} p={12} color="gray.600">
                <Text
                  as="h2"
                  textStyle={"pbold"}
                  pb={4}
                  color="semantic.text.primary"
                  textTransform={"uppercase"}
                >
                  {" "}
                  Minimum Viable Product (MVP)
                </Text>
                <Text as="p" textStyle={"p"} pb={4}>
                  {" "}
                  The initial release focuses on core ordering functionality to
                  provide immediate value and reduce third-party platform
                  dependency. Starting with essential features allows quick
                  market entry while gathering user feedback for future
                  iterations.
                </Text>
                <Text
                  as="p"
                  textStyle={"pbold"}
                  color="semantic.text.primary"
                  textTransform={"uppercase"}
                  pb={4}
                >
                  project goals
                </Text>
                <Grid
                  templateColumns={{
                    base: "1fr",
                    lg: "1fr 1fr",
                    "2xl": "0.5fr 1fr",
                  }}
                  gap={6}
                  color="gray.600"
                  pb={12}
                >
                  <GridItem>
                    <Box pb={4}>
                      <Text
                        as="p"
                        textStyle={"pbold"}
                        textTransform={"capitalize"}
                      >
                        Restaurant Localization
                      </Text>
                      <UnorderedList textStyle={"p"}>
                        <ListItem>
                          Find nearest locations and view custom menus
                        </ListItem>
                        <ListItem>
                          Display location-specific pricing and availability
                        </ListItem>
                      </UnorderedList>
                    </Box>

                    <Box>
                      <Text
                        as="p"
                        textStyle={"pbold"}
                        textTransform={"capitalize"}
                      >
                        Order Modification System
                      </Text>
                      <UnorderedList textStyle={"p"}>
                        <ListItem>
                          Customize meal preferences and special requests
                        </ListItem>
                        <ListItem>
                          Edit orders before final confirmation
                        </ListItem>
                      </UnorderedList>
                    </Box>

                    <Box>
                      <Text
                        as="p"
                        textStyle={"pbold"}
                        textTransform={"capitalize"}
                      >
                        Order Tracking
                      </Text>
                      <UnorderedList textStyle={"p"}>
                        <ListItem>Real-time status updates</ListItem>
                        <ListItem>Estimated preparation times</ListItem>
                        <ListItem>
                          Push notifications for order changes
                        </ListItem>
                      </UnorderedList>
                    </Box>

                    <Box>
                      <Text
                        as="p"
                        textStyle={"pbold"}
                        textTransform={"capitalize"}
                      >
                        Streamlined Checkout
                      </Text>
                      <UnorderedList textStyle={"p"}>
                        <ListItem>
                          Save multiple payment methods & address
                        </ListItem>
                        <ListItem>Quick reorder from order history</ListItem>
                      </UnorderedList>
                    </Box>
                  </GridItem>

                  <GridItem>
                    <Box display={"flex"} justifyContent="center">
                      <Image
                        src={mockupBrief}
                        alt="mockup"
                        height={"auto"}
                        maxHeight={"500px"}
                        objectFit={"contain"}
                      />
                    </Box>
                  </GridItem>
                </Grid>
              </Box>

              {/* {'IMPACT CLOSE'} */}

              {/* Process */}

              {/* PROCESS IMAGE CLOSE */}
            </Box>
          </section>

          {/* FIRST SECTION CLOSE */}
          <Divider variant="section" />

          {/* SECOND SECTION PLANNING OPEN*/}
          <section>
            <Box id="understanding">
              <Box px={12}>
                <DividerSection>Phase 1 </DividerSection>
                <VStack alignItems="start" pt={12} color="gray.600">
                  <Text
                    textStyle="h2"
                    color="semantic.text.primary"
                    textTransform={"capitalize"}
                  >
                    understanding the user
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    My research phase focused on understanding user behaviors,
                    pain points, and expectations in the premium dining space.
                    This phase included conducting interviews, competitive
                    analysis, creating user personas, and journey mapping.
                  </Text>

                  {/* Items */}
                  <VStack alignItems="start">
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      user interviews
                    </Text>
                    <Text as="p" textStyle="p" pb={4}>
                      Conducted in-depth interviews with 5 target users who
                      frequently order from high-end restaurants, supplemented
                      with a survey of 50 potential users. The research focused
                      on understanding ordering habits, platform preferences,
                      and pain points.
                    </Text>
                    <HStack pb={12}>
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
                  </VStack>
                </VStack>
              </Box>

              {/* Key Findings */}

              <Box
                backgroundColor={"semantic.background.secondary"}
                w={"100%"}
                p={12}
              >
                <VStack alignItems={"center"}>
                  <Text
                    textStyle="h2"
                    textAlign={"center"}
                    color="semantic.text.primary"
                    textTransform={"capitalize"}
                  >
                    key findings
                  </Text>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    color="gray.600"
                    alignItems="center" // Ensures vertical alignment
                  >
                    <GridItem>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        maxW={"300px"}
                      >
                        <Image src={interview} alt="interview Illustration" />
                      </Box>
                    </GridItem>
                    <GridItem>
                      <UnorderedList listStyleType={"none"} textStyle={"p"}>
                        <ListItem>
                          <FontAwesomeIcon icon={faMobile} size="sm" />{" "}
                          <Text as="span" textStyle={"pbold"}>
                            80% of users abandon orders due to complex
                            modification systems
                          </Text>
                          <UnorderedList
                            textStyle={"caption"}
                            pb={4}
                            pl={4}
                            color={"gray.600"}
                          >
                            <ListItem>
                              {" "}
                              Users struggle with current platforms' limited
                              customization options
                            </ListItem>
                            <ListItem>
                              Special requests are often mishandled or
                              overlooked
                            </ListItem>
                            <ListItem>
                              Lack of clear confirmation for modifications
                            </ListItem>
                          </UnorderedList>
                        </ListItem>

                        <ListItem>
                          <FontAwesomeIcon icon={faSackDollar} size="sm" />{" "}
                          <Text as="span" textStyle={"pbold"}>
                            73% of users prefer ordering directly from
                            restaurants{" "}
                          </Text>
                          <UnorderedList
                            textStyle={"caption"}
                            pb={4}
                            pl={4}
                            color={"gray.600"}
                          >
                            <ListItem>
                              {" "}
                              High delivery platform fees are a major concern
                            </ListItem>
                            <ListItem>
                              Users want to support restaurants directly
                            </ListItem>
                            <ListItem>
                              Quality assurance is higher with direct ordering
                            </ListItem>
                          </UnorderedList>
                        </ListItem>

                        <ListItem>
                          <FontAwesomeIcon icon={faClock} size="sm" />{" "}
                          <Text as="span" textStyle={"pbold"}>
                            65% value real-time order tracking{" "}
                          </Text>
                          <UnorderedList
                            textStyle={"caption"}
                            pb={4}
                            pl={4}
                            color={"gray.600"}
                          >
                            <ListItem>
                              {" "}
                              Current platforms provide limited status updates
                            </ListItem>
                            <ListItem>
                              Users want accurate preparation time estimates
                            </ListItem>
                            <ListItem>
                              Clear communication about delays is essential
                            </ListItem>
                          </UnorderedList>
                        </ListItem>
                      </UnorderedList>
                    </GridItem>
                  </Grid>
                </VStack>
              </Box>

              {/* Key Findings  Close*/}
              <Box px={12}>
                <VStack alignItems="start" pt={12} color={"gray.600"}>
                  <Text
                    as="p"
                    textStyle={"pbold"}
                    color="semantic.text.primary"
                    textTransform={"uppercase"}
                  >
                    competitive analysis
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    To understand the current market landscape, I analyzed both
                    direct competitors (premium restaurant apps) and indirect
                    competitors (food delivery platforms). The analysis focused
                    on user experience, feature sets, and business models to
                    identify opportunities for differentiation.
                  </Text>
                  <CompetitiveAnalysis competitors={competitors} />
                  <Text as="p" textStyle={"pbold"} textTransform={"capitalize"}>
                    market opportunity
                  </Text>
                  <Flex gap={6} alignItems="center">
                    <Image src={market} alt="market illustration" w={"100px"} />
                    <Box textStyle={"p"} display="flex" alignItems="center">
                      <Text as="p" textStyle="p">
                        Based on this analysis, there's a clear opportunity to
                        combine premium restaurant quality with the technical
                        convenience of delivery platforms, while eliminating
                        high fees and maintaining food quality.
                      </Text>
                    </Box>
                  </Flex>

                  <VStack alignItems="start" pt={4}>
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      user personas
                    </Text>

                    <Text as="p" textStyle="p" pb={4}>
                      Based on user interviews and survey data, I developed two
                      distinct personas representing our core user groups. These
                      personas helped guide design decisions and feature
                      prioritization throughout the project.
                    </Text>
                    <PersonasSection personas={personas} />
                  </VStack>
                </VStack>
              </Box>
              <Box px={12}>
                <VStack alignItems="start" pt={12}>
                  <Text
                    as="p"
                    textStyle={"pbold"}
                    color="semantic.text.primary"
                    textTransform={"uppercase"}
                  >
                    Journey Map
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    Mapping the current ordering experience to identify pain
                    points and opportunities for improvement.
                  </Text>
                  <JourneyMap />
                </VStack>
              </Box>
            </Box>
          </section>

          {/* SECOND SECTION PLANNING CLOSE*/}
          <Divider variant="section" />

          {/* THIRD SECTION DATA COLLECTION OPEN*/}
          <section>
            <Box id="starting">
              <Box px={12}>
                <DividerSection>Phase 2 </DividerSection>
                <VStack alignItems="start" pt={12} color="gray.600">
                  <Text
                    textStyle="h2"
                    color="semantic.text.primary"
                    textTransform={"capitalize"}
                  >
                    starting the design
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    After conducting user research and identifying key
                    opportunities, I began the design process with paper
                    wireframes. This phase focused on rapidly exploring
                    different concepts and layouts before moving into digital
                    wireframes and prototypes. The design process included:
                  </Text>

                  {/* paper */}
                  <VStack alignItems="start">
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      paper wireframes
                    </Text>
                    <Text as="p" textStyle="p" pb={4}>
                      Using the Crazy 8 method, I explored different approaches
                      to the main ordering interface. After sketching five
                      variations, I refined the most promising concept that best
                      addressed user needs and business goals.
                    </Text>
                    <PaperWireframes />
                    <Box
                      backgroundColor={"semantic.background.secondary"}
                      w={"100%"}
                      p={12}
                      boxShadow={"md"}
                    >
                      <VStack>
                        <Box display="flex" justifyContent={"center"}>
                          <Image
                            src={decisionImage}
                            alt="market illustration"
                            w={"100px"}
                          />
                        </Box>

                        <Text
                          as="p"
                          textStyle={"pbold"}
                          textTransform={"capitalize"}
                        >
                          Design decisions
                        </Text>
                        <Text as="p" textStyle="p">
                          After exploring multiple layouts, I selected and
                          refined the most effective design that prioritized
                          easy location selection and clear menu navigation.
                          This approach best addressed our users' need for quick
                          and efficient ordering.
                        </Text>
                      </VStack>
                    </Box>
                  </VStack>

                  <VStack alignItems="start" pt={4}>
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      Digital wireframes
                    </Text>
                    <Text as="p" textStyle="p" pb={4}>
                      Taking the refined paper concepts into Figma, I created
                      detailed digital wireframes to establish clear user flows
                      and interface hierarchy. These wireframes focused on
                      implementing key features identified during user research
                      while maintaining simplicity and usability.
                    </Text>
                    <DigitalWireframes digital={digitalWireframes} />
                    <Box
                      backgroundColor={"semantic.background.secondary"}
                      w={"100%"}
                      p={12}
                      boxShadow={"md"}
                    >
                      <VStack>
                        <Box display="flex" justifyContent={"center"}>
                          <Image
                            src={evolutiionImage}
                            alt="evolution iamage"
                            w={"100px"}
                          />
                        </Box>

                        <Text
                          as="p"
                          textStyle={"pbold"}
                          textTransform={"capitalize"}
                        >
                          Design evolution
                        </Text>
                        <Text as="p" textStyle="p">
                          The digital wireframes expanded upon the paper
                          concepts, adding detailed interactions and refined
                          user flows. Key improvements included enhanced
                          location filtering, streamlined customization options,
                          and clearer order tracking visualization.
                        </Text>
                      </VStack>
                    </Box>
                  </VStack>

                  <VStack alignItems="start" pt={4}>
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      Low-fidelity prototype
                    </Text>
                    <Text as="p" textStyle="p" pb={4}>
                      I created a clickable prototype in Figma to test the core
                      user flows and gather feedback on the basic interface
                      structure. This helped validate our design direction
                      before moving into high-fidelity designs.
                    </Text>
                    <LofiPrototype />
                    <Box
                      backgroundColor={"semantic.background.secondary"}
                      w={"100%"}
                      p={12}
                      boxShadow={"md"}
                    >
                      <VStack>
                        <Box display="flex" justifyContent={"center"}>
                          <Image
                            src={testingImage}
                            alt="evolution iamage"
                            w={"100px"}
                          />
                        </Box>

                        <Text
                          as="p"
                          textStyle={"pbold"}
                          textTransform={"capitalize"}
                        >
                          Prototype Testing
                        </Text>
                        <Text as="p" textStyle="p">
                          This low-fidelity prototype connected key screens to
                          create a clickable experience, allowing us to test the
                          core functionalities of location selection, menu
                          customization, and checkout process. User feedback
                          from these tests informed our next design iterations.
                        </Text>
                      </VStack>
                    </Box>
                  </VStack>

                  <VStack alignItems="start" py={4}>
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                    >
                      Usability study
                    </Text>
                    <Text as="p" textStyle="p" pb={4}>
                      Conducted two rounds of usability studies with 6
                      participants per round. The findings helped identify key
                      areas for improvement in the ordering experience.
                    </Text>
                    <UsabilityStudy usabilityData={usabilityData} />
                    <Box
                      backgroundColor={"semantic.background.secondary"}
                      w={"100%"}
                      p={12}
                      boxShadow={"md"}
                    >
                      <VStack>
                        <Box display="flex" justifyContent={"center"}>
                          <Image
                            src={keyImage}
                            alt="evolution iamage"
                            w={"100px"}
                          />
                        </Box>

                        <Text
                          as="p"
                          textStyle={"pbold"}
                          textTransform={"capitalize"}
                        >
                          Key Improvements
                        </Text>
                        <Text as="p" textStyle="p">
                          After implementing changes based on Round 1 feedback,
                          Round 2 testing showed significant improvements in
                          user navigation and task completion. The refined
                          interface led to better understanding of customization
                          options and a more confident checkout process.
                        </Text>
                      </VStack>
                    </Box>
                  </VStack>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* THIRD SECTION DATA COLLECTION CLOSE*/}
          <Divider variant="section" />

          {/* FOURTH SECTION ANALYSIS OPEN*/}
          <section>
            <Box id="refining">
              <Box px={12}>
                <DividerSection>Phase 3 </DividerSection>
                <VStack alignItems="start" pt={12} color="gray.600" pb={12}>
                  <Text
                    textStyle="h2"
                    color="semantic.text.primary"
                    textTransform={"capitalize"}
                  >
                    refining the design
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    Through two rounds of usability testing and iteration, the
                    design evolved from a basic ordering system to an intuitive
                    dining experience that puts users' needs first.
                  </Text>

                  {/* Content Empathy map and affinity diagram */}

                  <VStack alignItems="stretch" py={4}>
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      color="semantic.text.primary"
                      textTransform={"uppercase"}
                      pb={4}
                    >
                      mockups
                    </Text>
                    <DesignRefinement />
                    <Box
                      backgroundColor={"semantic.background.secondary"}
                      w={"100%"}
                      p={12}
                      boxShadow={"md"}
                    >
                      <VStack>
                        <Box display="flex" justifyContent={"center"}>
                          <Image
                            src={impactImage}
                            alt="evolution iamage"
                            w={"100px"}
                          />
                        </Box>

                        <Text
                          as="p"
                          textStyle={"pbold"}
                          textTransform={"capitalize"}
                        >
                          Design Impact
                        </Text>
                        <Text as="p" textStyle="p">
                          Through iterative design and user testing, I created
                          an intuitive ordering system that significantly
                          improved the user experience. The final design
                          successfully addresses key user pain points while
                          maintaining the premium feel of the steakhouse brand.
                        </Text>
                      </VStack>
                    </Box>
                  </VStack>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* FOURTH SECTION ANALYSIS CLOSE*/}
          <Divider variant="section" />

          {/* FIFTH SECTION SYNTHESIS OPEN*/}
          <section>
            <Box id="going">
              <Box px={12}>
                <DividerSection>Phase 4 </DividerSection>
                <VStack alignItems="start" pt={12} pb={12} color="gray.600">
                  <Text
                    textStyle="h2"
                    color="semantic.text.primary"
                    textTransform="capitalize"
                  >
                    going forward
                  </Text>
                  <Text as="p" textStyle="p" pb={4}>
                    This project provided valuable insights about user-centered
                    design and the importance of iterative development in
                    creating impactful solutions.
                  </Text>

                  <VStack alignItems="start">
                    <Grid
                      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                      gap={8}
                      color="gray.600"
                    >
                      {/* Accessibility */}
                      <GridItem>
                        <Box
                          bg="semantic.background.secondary"
                          p={6}
                          height="100%"
                        >
                          <Box mb={4}>
                            <FontAwesomeIcon
                              icon={faUniversalAccess}
                              size="xl"
                            />
                          </Box>
                          <Text textStyle="pbold" mb={3}>
                            Accessibility Considerations
                          </Text>
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
                        </Box>
                      </GridItem>

                      {/* Key Learnings */}
                      <GridItem>
                        <Box
                          bg="semantic.background.secondary"
                          p={6}
                          height="100%"
                        >
                          <Box mb={4}>
                            <FontAwesomeIcon icon={faLightbulb} size="xl" />
                          </Box>
                          <Text textStyle="pbold" mb={3}>
                            Key Learnings
                          </Text>
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
                        </Box>
                      </GridItem>

                      {/* Next Steps */}
                      <GridItem>
                        <Box
                          bg="semantic.background.secondary"
                          p={6}
                          height="100%"
                        >
                          <Box mb={4}>
                            <FontAwesomeIcon icon={faForward} size="xl" />
                          </Box>
                          <Text textStyle="pbold" mb={3}>
                            Next Steps
                          </Text>
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
                        </Box>
                      </GridItem>
                    </Grid>
                  </VStack>

                  <VStack alignItems="start" py={12}>
                    <Text
                      as="p"
                      textStyle={"pbold"}
                      textTransform={"uppercase"}
                      color="semantic.text.primary"
                    >
                      Takeaways
                    </Text>
                    <Text as="p" textStyle={"p"}>
                      This project transformed my approach to UX design in
                      several key ways:
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
                            <strong>Business Thinking:</strong> Developed
                            ability to balance user needs with business
                            requirements while maintaining design integrity.
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text>
                            <strong>Leadership Growth:</strong> Gained
                            confidence in presenting design decisions and
                            leading stakeholder discussions.
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
                  </VStack>
                </VStack>
              </Box>
            </Box>
          </section>

          {/* FIFTH SECTION SYNTHESIS CLOSE*/}
          <Divider variant="section" />
          <Footer />

          {/* FIFTH SECTION REFLECTIONS CLOSE*/}
        </Box>
      </Grid>
    </>
  );
};

export default SteakHousePage;
