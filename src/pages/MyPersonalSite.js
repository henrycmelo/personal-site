import { Image, Box, VStack, Text, Stack } from "@chakra-ui/react";
import Header from "../components/Header";
import FullScreenSection from "../components/FullScreenSection";
import Footer from "../components/Footer";
import CustomizedButton from "../components/CustomizedButton";
import SecondaryButton from "../components/SecondaryButton";
import { useAlertContext } from "../context/alertContext"

const MyPersonalSite = () => {
  const { isLargerThanBase } = useAlertContext();
  const image = isLargerThanBase ? '' : '400px'
  const projectInfo = [
    {
      getImageSrc: () => require("../images/reactpagepicture.png"),
      title: "Building a dynamic web app with React, Chakra and Formik",
      subtitle:
        "Personal website showcasing my work and projects..",
      role: "Creator and developer.",
      technologies: "React js, Chakra UI, Formik, Netlify.",
      date: "Jan 2023-March 2023",
      description: `This website is a platform for me to showcase my work and projects. It is built using React, a popular JavaScript 
                library for building user interfaces, and Chakra UI, a component library for building accessible and responsive web applications. 
                The website also uses Formik for form management and Netlify for deployment.`,

      features: [
        {
          1: "• Smooth scroll navigation that allows users to easily navigate between sections of the website.",
          2: `• A contact form that users can fill out to send me a message, with validation powered by Formik. This ensures that the user's inputs are valid before the form is submitted, 
                and provides helpful error messages if there are any issues. `,
          3: "• A responsive navigation menu with buttons that link to various sections of the website.",
          4: `• Implementation of React Context to manage global state across multiple components. 
                This enables more efficient and reusable code, and helps to simplify complex components that require data 
                from different parts of the application. For example, you could use context to manage the user's authentication status,
                 or to store data that needs to be accessed by multiple components.` 
        },
      ],

      developmentProcess: `I started developing my portfolio by creating wireframes and user flows using Figma. 
                            This helped me establish the website's layout and plan for the user experience. 
                            Then, I used React, Chakra, and Formik to build out the website's features, starting with core components and adding more 
                            complex ones. I also integrated testing and debugging throughout the process to ensure a high-quality end product, 
                            including testing on different devices and using automated testing tools like Jest and React Testing Library.`,

           

                            
                            
                            
      design:
        `The website was designed with a minimalist aesthetic in mind, with a focus on clean lines and a simple color scheme. The layout is designed to be responsive, with a mobile-first approach that ensures the website looks great on any device. 
        The typography and overall design were carefully chosen to reflect my personal style and brand.`
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
            href="https://henrycastillo.dev/"
            rel="noreferrer"
            target="_blank"
          >
            <CustomizedButton>Launch Project</CustomizedButton>
          </a>
          <a
            href="https://github.com/henrycastillome/personal-site"
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

export default MyPersonalSite;
