import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import ProjectOverview from "../layout/ProjectOverview";
// import CurrentUserInterface from "../layout/CurrentUserInterface";
// import Research from "../layout/Research";
// import UserTesting from "../layout/UserTesting";
// import Analyze from "../layout/Analyze";
// import Recommendations from "../layout/Recommendations";
// import Conclusion from "../layout/Conclusion";
// import ButtonsBottom from "../layout/ButtonsBottom";
// import ProjectTitle from "../layout/ProjectTitle";
import { useAlertContext } from "../context/alertContext";
import Loader from "../components/Loader";
// import { americanArtData } from "../utils/projectsContent/americanArtData";
// import LandingImage from "../layout/LandingImage";
import FullScreenSection from "../components/FullScreenSection";
import FunnyLoader from "../components/FunnyLoader";

/**
 * Renders the Case Study Archives page, which displays a collection of case studies.
 * @returns {JSX.Element} The Case Study Archives page.
 */

const CaseStudyArchives = () => {
  const { colorMode } = useAlertContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
  
          {/* {americanArtData.map((item, index) => (
            <React.Fragment key={index}>
              <LandingImage
                imageSrc={item.landingImage}
                alt="Laptop with the website project"
              />
              <ProjectTitle
                client={item.client}
                title={item.projectTitle.title}
                role={item.projectTitle.role}
                tools={item.projectTitle.tools}
                dateInititial={item.projectTitle.dateInitial}
                dateFinal={item.projectTitle.dateFinal}
              />
              <ProjectOverview
                backgroundColor={
                  colorMode === "light" ? "secondLight" : "darkDarkMode"
                }
                client={item.client}
                description={item.projectOverview.description}
                challenge={item.projectOverview.challenge}
                solution={item.projectOverview.solution}
              />
              <CurrentUserInterface
                subtitle="CURRENT USER INTERFACE (UI) DESIGN"
                backgroundColor={colorMode === "light" ? "light" : "dark"}
                imageData={item.currentState.images}
              />

              <Research
                backgroundColor={
                  colorMode === "light" ? "secondLight" : "darkDarkMode"
                }
                subtitle={item.researchData.subtitle}
                description={item.researchData.description}
                data={item.researchData.data}
              />

              <UserTesting
                backgroundColor={colorMode === "light" ? "light" : "dark"}
                type={item.userTestingData.type}
                description={item.userTestingData.description}
                userTestingData={item.userTestingData.images}
              />
              <Analyze
                backgroundColor={
                  colorMode === "light" ? "secondLight" : "darkDarkMode"
                }
                type={item.analisisData.type}
                description={item.analisisData.description}
                analisisData={item.analisisData.data}
                imageData={item.analisisData.images}
              />
              <Recommendations
                recommendationsData={item.recommedationsData}
                backgroundColor={colorMode === "light" ? "light" : "dark"}
              />
              <Conclusion
                conclusionData={item.conclusionData}
                backgroundColor={
                  colorMode === "light" ? "secondLight" : "darkDarkMode"
                }
                subTitle="Conclusion"
              />
              <Conclusion
                conclusionData={item.goingForwardData}
                backgroundColor={colorMode === "light" ? "light" : "dark"}
                subTitle="Going forward"
              />
            </React.Fragment>
          ))}

          <ButtonsBottom
            button1="Contact me"
            path1="/contactme"
            button2="View other projects"
            path2="/projects"
            backgroundColor={colorMode === "light" ? "light" : "dark"}
          /> */}

          <Footer />
        </>
      )}
    </main>
  );
};

export default CaseStudyArchives;
