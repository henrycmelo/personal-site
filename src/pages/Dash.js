import { Image, Box, VStack, Text, Stack } from "@chakra-ui/react";
import Header from "../components/Header";
import FullScreenSection from "../components/FullScreenSection";
import Footer from "../components/Footer";
import CustomizedButton from "../components/CustomizedButton";
import SecondaryButton from "../components/SecondaryButton";
import { useAlertContext } from "../context/alertContext"

const Dash = () => {
  const { isLargerThanBase } = useAlertContext();
  const image = isLargerThanBase ? '' : '400px'
  const projectInfo = [
    {
      getImageSrc: () => require("../images/dashpp.png"),
      title: "Exploring Restaurant Violations in NYC with Python, Plotly, and Dash",
      subtitle:
      "This project utilizes Python, Plotly, and Dash to explore and visualize restaurant violations in New York City using the dataset from the Department of Health and Mental Hygiene.",
      role: "Full-stack developer",
      technologies: "Python, Pandas, Plotly, Dash",
      date: "Sep 2022-Dec 2022",
      description: `By utilizing this interactive site, users can easily explore and visualize restaurant 
                  violations data in New York City. The site provides five types of visualizations, including scattermapbox, 
                  choropleth map, barchart, and scatterbox, which enable users to gain insights into restaurant
                   violations across the city. Additionally, the search bar feature allows users to search for their favorite 
                   restaurant and view its violations in a table format. This provides users with valuable information to make 
                   informed choices about where to dine. Overall, this project provides an accessible and user-friendly way to
                   explore restaurant violations data in New York City.`,

      features: [
        {
          1: "• Interactive visualizations: The site provides five types of interactive visualizations, including scattermapbox, choropleth map, barchart, and scatterbox, which enable users to explore restaurant violations data across New York City.",
          2: "• Search bar: Users can search for their favorite restaurant and view its violations in a table format. This feature provides users with valuable information to make informed choices about where to dine.",
          3: "• User-friendly interface: The site has a user-friendly interface that allows users to easily navigate the visualizations and search bar feature",
          4: "• Data cleaning and preprocessing: Python and Pandas are used to clean and preprocess the dataset, ensuring it is in a format that can be easily analyzed and visualized.",
          5: "• Scalability: The project is designed to be easily maintained and scaled in the future, with documentation and collaboration with other professionals if necessary.",
        },
      ],

      developmentProcess: `The development process for this project involved collecting the Department of Health and Mental 
                          Hygiene's restaurant violations dataset for New York City and using Python and Pandas to clean and 
                          preprocess the data. One challenge was using a dataset that was very descriptive and trying to quantify 
                          that to create the plots. `,

      developmentProcess2:`Despite this challenge, Plotly was used to create five types of visualizations 
      to explore and gain insights into the data. A search bar feature was implemented using Dash to allow users 
      to search for their favorite restaurant and view its violations in a table format. Testing and debugging were
       important steps to ensure that the website was functional and free of bugs. Finally, the website was deployed 
       to a server or hosting platform so that it could be accessed by users. Throughout the development process, documentation
        and collaboration with other professionals may have been necessary to ensure that the project was easily maintainable and scalable.`,
      design:
        `The project has a modern and visually appealing design, with a dark mode color scheme that is easy on the eyes. The site's layout is intuitive, 
        with the visualizations and search bar feature prominently displayed on the homepage. The dark mode design enhances the user experience by reducing 
        eye strain and creating a sleek and professional look. Overall, the design of the site is intended to provide users with a seamless and enjoyable 
        experience when exploring restaurant violations data.`
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
          <br/>
          <Text size="sm" textStyle="body">
            {" "}
            <span style={{ color: "#007183" }}>
              <b>Development process:</b>
            </span>{" "}
            {projectInfo[0].developmentProcess}
          </Text>
          <Text size="sm" textStyle="body">
            {" "}
           
            {projectInfo[0].developmentProcess2}
          </Text>
          <br/>
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
          <br/>

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
            href="http://henrycastillome.pythonanywhere.com/"
            rel="noreferrer"
            target="_blank"
          >
            <CustomizedButton>Launch Project</CustomizedButton>
          </a>
          <a
            href="https://github.com/henrycastillome/PFCH"
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

export default Dash;
