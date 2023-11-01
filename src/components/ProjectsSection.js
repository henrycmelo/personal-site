import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Button, Heading, Text} from "@chakra-ui/react";
import Cards from "./Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAlertContext } from "../context/alertContext";
import ScrollReveal from "../hooks/ScrollReveal";
import { badges } from "../utils/badges";
import { sortByDate } from "../utils/sortByDate";
import { role } from "../utils/role";



const projects = [
  {
    title: "Building an online learning platform w/ DJANGO",
    description:
      "Developed using Python/HTML/Bootstrap, a platform where instructors can create their online courses and its exams.",
    getImageSrc: () => require("../images/python.png"),
    path: "/djangopage",
    role:[role["Full Stack Developer"]],
    date: "2023-02",
    tools: [badges["python"], badges["django"], badges["html"], badges["css"], badges["bootstrap"], badges["amazonaws"], badges["heroku"]],
    id:'djangoimage'
   
  },
  {
    title: "Building a dynamic web app with React, Chakra and Formik",
    description:
      "My personal website feature the combination of these libraries allowed for the creation of an interactive and sleek user interface with efficient form management.",
    getImageSrc: () => require("../images/react.png"),
    role:[role["UX Engineer"], role["Frontend Developer"]],
    date: "2023-03",
    tools: [badges["react"], badges["chakraui"], badges["html"], badges["css"], badges["javascript"], badges["netlify"]],
    path: '/mypersonalsite',
    
  },
  {
    title: "Enhancing user experience for better donations on support page",
    description:
      "Conducted a usability testing project on the Archives of American Art donation page, providing recommendations to improve its functionality, navigation, and search capabilities.",
    getImageSrc: () => require("../images/aaa.png"),
    role:[role["UX Researcher"], role["UI/UX Designer"]],
    date: "2022-12",
    tools: [badges["figma"], badges["miroboard"], badges["zoom"]],
    path: "/casestudyarchives",
    
  },
  {
    title: "Designing a food menu app for a steakhouse",
    description:
      "Designed and conducted UX research for a user-friendly menu app for a popular steakhouse. Created intuitive UI to enhance the user experience and enable easy navigation.",
    getImageSrc: () => require("../images/steakhouseHP.png"),
    role:[role["Product Designer"]],
    date: "2022-07",
    tools: [badges["figma"], badges["miroboard"], badges["zoom"]],
    path:"/steakhouse"
  },
  {
    title:
      "Exploring Restaurant Violations in NYC ",
    description:
      "This project explores and visualize restaurant violations in New York City using the dataset from the Department of Health and Mental Hygiene.",
    getImageSrc: () => require("../images/dashHP.png"),
    role:[role["Data Analyst"], role['Python Developer']],
    tools: [badges["python"], badges["pandas"], badges["plotly"]],
    date: "2022-12",
    path: "/dash",
    id: "dash",
  },
  {
    title:
      "Machine Learning Project",
    description:
      "Wine quality prediction using Machine Learning. Creating pipelines, hyperparameter tuning, and model evaluation. ",
    getImageSrc: () => require("../images/mlcard.png"),
    tools: [badges["python"], badges["jupyter"], badges["pandas"], badges["numpy"], badges["scikit"], badges["seaborn"], badges["matplotlib"]],
    role:[role["Machine Learning Engineer"]],
    date: "2023-10",
    path: "/machinelearning",
    id: "machinelearning",
  },
];




const ProjectsSection = ({ isHomePage }) => {
  const {  isLargerThanBase, colorMode } = useAlertContext();

  

  const gridColumns = isLargerThanBase
    ? "repeat(2,minmax(0,1fr))"
    : "repeat(1,1fr)";

  return (
    <FullScreenSection
      layerStyle={colorMode==='light'?'normalBlue':'gradientBack'}
      isDarkBackground
      alignItems={'center'}
      spacing={8}
      width="100vw"
      p={{ base: 8, md: 32 }}
    >
      <ScrollReveal><Heading as="h1" id="projects-section" color={colorMode==='light'? "secondLight":'light'}>
       {isHomePage? "Featured Projects": ""  } 
      </Heading></ScrollReveal>

   
      <Box
        display="grid"
        gridTemplateColumns={gridColumns}
        gridGap={16}
        justifyContent={"center"}
        pb={4}
      >{isHomePage? (
        projects.sort(sortByDate).slice(0,4).map((project) => (
          <ScrollReveal key={project.title}><Cards
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            role={Array.isArray(project.role)?(
              project.role.map((role) => role)
            ) : (null)
            }
            date={project.date}
            badgeAlt={project.title}
            badgeSrc={Array.isArray(project.tools)?(
              project.tools.map((tool) => tool)
            ) : (null)}
            to={project.path }
            
          /></ScrollReveal>
        ))
      ):(
        projects.sort(sortByDate).map((project) => (
          <ScrollReveal key={project.title}><Cards
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            role={Array.isArray(project.role)?(
              project.role.map((role) => role)
            ) : (null)
            }
            date={project.date}
            badgeAlt={project.title}
            badgeSrc={Array.isArray(project.tools)?(
              project.tools.map((tool) => tool)
            ) : (null)}
            to={project.path }
            
          /></ScrollReveal>
        ))
      )}
        
      </Box>
      {isHomePage &&
      <Box  justifyContent={'center'}>
        
        
      <ScrollReveal><Button  gap={4}>
      <Link to="/projects">
      <Text  className={colorMode==='light'? 'button':"hoverOtherProjects"} fontSize="md" color={colorMode==='light'? 'secondLight' : 'grayDarkMode'} textStyle="body">
        View Other Projects <FontAwesomeIcon icon={faArrowRight} />
        </Text>
        </Link>
      </Button></ScrollReveal>
   
      </Box>
}
     

      
        
   
    </FullScreenSection>
  );
};

export default ProjectsSection;
