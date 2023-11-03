import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Button, Heading, Text} from "@chakra-ui/react";
import Cards from "./Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAlertContext } from "../context/alertContext";
import ScrollReveal from "../hooks/ScrollReveal";
import { sortByDate } from "../utils/sortByDate";
import projects from "../utils/projects";





const ProjectsSection = ({ isHomePage }) => {
  const {  isLargerThanBase, colorMode } = useAlertContext();
  let featuredProjects = projects.filter((project)=> project.featured === true   );


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
      >{isHomePage?(
        featuredProjects? (
          featuredProjects.sort(sortByDate).map((project)=>(
             
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
        ):( <Text>Loading...</Text>)
      ):
      projects? (projects.sort(sortByDate).map((project) => (
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
      ))) : (<Text>Loading...</Text>)}
        
        
        
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
