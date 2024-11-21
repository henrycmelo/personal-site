import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAlertContext } from "../context/alertContext";
// import LandingImage from "../layout/LandingImage";
// import ProjectTitle from "../layout/ProjectTitle";
// import ProjectOverview from "../layout/ProjectOverview";
// import StartingDesign from "../layout/StartingDesign";
// import ButtonsBottom from "../layout/ButtonsBottom";
import Loader from "../components/Loader";
// import { databaseDesignData } from "../utils/projectsContent/databaseDesignData";
// import CurrentUserInterface from "../layout/CurrentUserInterface";
// import Analyze from "../layout/Analyze";
// import Conclusion from "../layout/Conclusion";
import FullScreenSection from "../components/FullScreenSection";
import FunnyLoader from "../components/FunnyLoader";


const DatabaseDesign= () => {
  const { colorMode} = useAlertContext();
  const [isLoading, setIsLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 1500)
  }, []);
  return (
    <main>
    {isLoading ? (
      <Loader />
    ) : (
      <>
        <Header />
        <FullScreenSection
      backgroundColor={colorMode==='light'? "light":'dark'}
      alignContent="center"
      alignItems='center'
      spacing={8}
      width="100vw"
      pt={48}
      pl={{ base: 8, md: 32 }}
      pb={32}
      pr={{ base: 8, md: 32 }}
      >
        <FunnyLoader />
        
      </FullScreenSection>
        {/* {databaseDesignData.map((project, index) => (
          <React.Fragment key={index}>
            <LandingImage
              imageSrc={project.landingImage}
              alt="mockup react project"
            />

            <ProjectTitle
              client={project.client}
              title={project.projectTitle.title}
              role={project.projectTitle.role}
              tools={project.projectTitle.tools}
              dateInititial={project.projectTitle.dateInitial}
              dateFinal={project.projectTitle.dateFinal}
            />
            <ProjectOverview
                backgroundColor={
                  colorMode === "light" ? "secondLight" : "darkDarkMode"
                }
                client={project.client}
                description={project.projectOverview.description}
                challenge={project.projectOverview.challenge}
                solution={project.projectOverview.solution}
              />
              <CurrentUserInterface
                subtitle="Current Database"
                backgroundColor={colorMode === "light" ? "light" : "dark"}
                imageData={project.currentState.images}
              />
              <Analyze
                backgroundColor={
                  colorMode === "light" ? "secondLight" : "darkDarkMode"
                }
                type={project.analisisData.type}
                description={project.analisisData.description}
                analisisData={project.analisisData.data}
                imageData={project.analisisData.images}
              />
              

            <StartingDesign
              backgroundColor={colorMode === "light" ? "light" : "dark"}
              subtitle="Development process"
              designData={project.designData}
            />
            <Conclusion
                conclusionData={project.goingForwardData}
                backgroundColor={colorMode ==="light" ? "secondLight" : "darkDarkMode"}
                subTitle="Going forward"
              />
            <ButtonsBottom
              hasLinkToOtherPages
              backgroundColor={colorMode ==="light" ? "secondLight" : "darkDarkMode"}
              button1="View Github"
              button2="View Other Projects"
              href1={project.links.dataset}
              href2={project.links.github}
            /> */}
            <Footer />
          {/* </React.Fragment>
        ))} */}
      </>
    )}

    
  </main>
  );
};

export default DatabaseDesign;
