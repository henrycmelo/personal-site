import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingImage from "../layout/LandingImage";
import ProjectTitle from "../layout/ProjectTitle";
import ProjectOverview from "../layout/ProjectOverview";
import Research from "../layout/Research";
import Personas from "../layout/Personas";
import Loader from "../components/Loader";
import StartingDesign from "../layout/StartingDesign";
import UserTesting from "../layout/UserTesting";
import ButtonsBottom from "../layout/ButtonsBottom";
import { useAlertContext } from "../context/alertContext";
import { steakHouseData } from "../utils/projectsContent/steakHouseData";
import Conclusion from "../layout/Conclusion";

const SteakHouse = () => {
  const {  colorMode } = useAlertContext();
  const [isLoading, setIsLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 1500)
  }, []);
  
  return (
    <main>
      {isLoading? (<Loader/>):(
        <>
      <Header />
      {steakHouseData.map((item, index) => (
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
              <Research
                backgroundColor={colorMode === "light" ? "light" : "dark"}
                subtitle={item.researchData.subtitle}
                description={item.researchData.description}
                data={item.researchData.data}
              />

              <Personas
                backgroundColor={colorMode === "light" ? "secondLight" : "darkDarkMode"}
                type={item.userPersonasData.type}
                description={item.userPersonasData.description}
                userPersonasData={item.userPersonasData.images}

                />
                <StartingDesign
                  backgroundColor={colorMode === "light" ? "light" : "dark"}
                  subtitle="Starting the design"
                  designData={item.designData}

                />
                <UserTesting hasFindings
                  backgroundColor={
                    colorMode === "light" ? "secondLight" : "darkDarkMode"
                  }
                  type={item.userTestingData.type}
                  description={item.userTestingData.description}
                  userTestingData={item.userTestingData.data}



                />

                <StartingDesign
                  subtitle="Refining the design"
                  backgroundColor={colorMode === "light" ? "light" : "dark"}
                  designData={item.refiningDesignData}
                />


                <Conclusion
                  conclusionData={item.goingForwardData}
                  backgroundColor={colorMode === "light" ? "secondLight" : "darkDarkMode"}
                  subTitle="Going forward"
                />

        </React.Fragment>
      ))}
   

      <ButtonsBottom
        button1="Contact me"
        path1="/contactme"
        button2="View other projects"
        path2="/projects"
        backgroundColor={colorMode==='light'? "secondLight":'darkDarkMode'}
      />


     

      <Footer />
      </>)
}
    </main>
  );
};

export default SteakHouse;
