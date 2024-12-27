import React, {useState, useEffect} from "react";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import "animate.css";
import { projectsAPI } from "../api/projectsApi";
import Cards from "./Cards"

const CaseStudySection = () => {
  const titleText = "Case Studies";
  const [projects, setProjects] =useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () =>{
      try {
        const data = await projectsAPI.getAllEntries();
        console.log(data)
        setProjects(data)
  
      } catch (err) {
        setError(err.message)
      } finally{
        setIsLoading(false)
      }
    }
  
    fetchProjects()
  }, [])

  
  

  return (
    <FullScreenSection isBlackBackground  alignItems="stretch"
   >
      <HStack justify={'center'} w={"100%"}>
        
        <Text
          as="h2"
          color="semantic.text.button"
          textStyle="h2"
          className="heading-animation-two"
        >
          {titleText.toUpperCase()}
        </Text>
        
        
      </HStack>
      <VStack>
        {projects.map((project, index)=>(
          <Cards key={index} title={project.title} description={project.problem_statement} role={project.role} date={project.created_at} />
        ))} 
      </VStack>

    </FullScreenSection>
  );
};

export default CaseStudySection;