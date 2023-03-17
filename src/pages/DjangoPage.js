import { Image, Box, VStack, Text, Stack } from "@chakra-ui/react";
import Header from "../components/Header";
import FullScreenSection from "../components/FullScreenSection";
import Footer from "../components/Footer";
import CustomizedButton from "../components/CustomizedButton";
import SecondaryButton from "../components/SecondaryButton";
import { useAlertContext } from "../context/alertContext"

const DjangoPage = () => {
  const { isLargerThanBase } = useAlertContext();
  const image = isLargerThanBase ? '' : '400px'
  const projectInfo = [
    {
      getImageSrc: () => require("../images/django1.png"),
      title: "Building an online learning platform w/ DJANGO",
      subtitle:
        "Developed using Python/HTML/Bootstrap, a platform where instructors can create their online courses and its exams.",
      role: "Full-stack developer, UI/UX designer, DevOps Engineer",
      technologies: "Python, Django, Bootstrap,HTML5, AWS S3 bucket, Heroku",
      date: "Dec 2022-March 2023",
      description: `This is an online course platform built with Django and Bootstrap. It allows students to enroll in courses,
                             view the number of enrolled students, login, sign up, and take exams. Instructors can set up their courses, lessons, 
                             and exams. The project uses AWS S3 bucket for storage and is deployed on Heroku.`,

      features: [
        {
          1: "• Student enrollment in courses",
          2: "• Real-time updates on the number of enrolled students",
          3: "• User authentication for students and instructors",
          4: "• Exam taking functionality",
          5: "•  Course creation and management for instructors",
        },
      ],

      developmentProcess: `The biggest challenge I faced during the development process was integrating AWS S3 bucket with Heroku for storage. 
                                    I also had an issue with retrieving uploaded images from the admin panel. To overcome these challenges, I had to
                                     read through the documentation for both AWS S3 and Heroku and use trial and error to find the correct configurations`,
      design:
        "The project has a clean and modern user interface built with Bootstrap and HTML5"
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
            style={{ backgroundImage: "none" }}
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
            {projectInfo[0].title}
          </Text>
          <Text textStyle="body" fontSize={"2xl"} align={"center"}>
            {" "}
            {projectInfo[0].subtitle}
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
              <b>Technologies:</b>
            </span>{" "}
            {projectInfo[0].technologies}
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
            Project Overview
          </Text>

          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>Description:</b>
            </span>{" "}
            {projectInfo[0].description}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>Development process:</b>
            </span>{" "}
            {projectInfo[0].developmentProcess}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>Features:</b>
            </span>
          </Text>

          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            {projectInfo[0].features[0][1]}
          </Text>
          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            {projectInfo[0].features[0][2]}
          </Text>
          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            {projectInfo[0].features[0][3]}
          </Text>
          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            {projectInfo[0].features[0][4]}
          </Text>
          <Text size="sm" textStyle="body" pl={8}>
            {" "}
            {projectInfo[0].features[0][5]}
          </Text>

          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>Design:</b>
            </span>{" "}
            {projectInfo[0].design}
          </Text>
        </VStack>

        <Stack direction="row" pt={8} pb={{ base: 8, md: 0 }}>
          <a
            href="https://onlinecoursedjango.herokuapp.com/onlinecourseapp/"
            rel="noreferrer"
            target="_blank"
          >
            <CustomizedButton>Launch Project</CustomizedButton>
          </a>
          <a
            href="https://github.com/henrycastillome/onlinecoursedjangoapp/"
            rel="noreferrer"
            target="_blank"
          >
            <SecondaryButton> View Github </SecondaryButton>
          </a>
        </Stack>
      </FullScreenSection>
      <Footer />
    </main>
  );
};

export default DjangoPage;
