import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAlertContext } from "../context/alertContext";
import LandingImage from "../layout/LandingImage";
import ProjectTitle from "../layout/ProjectTitle";
import ProjectOverview from "../layout/ProjectOverview";
import ButtonsBottom from "../layout/ButtonsBottom";
import Loader from "../components/Loader";
import machinelearning from "../images/machinelearning.png";
import codeml from "../images/codeml.png";

const MachineLearning= () => {
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
          {/*image */}
          <LandingImage
            imageSrc={machinelearning}
            alt="mockup machine learning"
          />

          <ProjectTitle
            client="MACHINE LEARNING PROJECT"
            title="Wine quality prediction"
            role="Machine learning engineer"
            tools="Scikit-learn, Python, Jupyter Notebook"
            dateInititial="2023-09"
            dateFinal="2023-10"
          />

          <ProjectOverview
            isProgrammingProject
            backgroundColor={
              colorMode === "light" ? "secondLight" : "darkDarkMode"
            }
            description="This machine learning project is dedicated to 
            the analysis and assessment of the quality of red and white variants of Portuguese 'Vinho Verde' wine. This renowned wine variety demands precision in evaluation, and I aim to deliver just that through the power of machine learning."
            challenge="I have access to two meticulously curated datasets, each tailored to a specific wine variant – red and white. These datasets contain a wealth of information on chemical properties, including acidity, residual sugar, alcohol content, and pH, among others. These attributes are crucial in determining wine quality.
               These datasets will be the cornerstone of my machine learning analysis."
            item="Data preprocessing and cleaning to ensure the data is ready for analysis."
            item2="Exploratory data analysis to gain insights into the data and identify trends."
            item3="Model training and evaluation to determine the best model for the data."
            code={codeml}
          />
          <ButtonsBottom
            hasLinkToOtherPages
            backgroundColor={
              colorMode === "light" ? "secondLight" : "darkDarkMode"
            }
            button1="View Github"
            button2="Dataset source"
            href1="https://github.com/pratt-ml/supervised-learning-henrycastillome/blob/main/notebooks/assignment_2.ipynb"
            href2="https://archive.ics.uci.edu/dataset/186/wine+quality"
            
          />
        </>
      )}

      <Footer />
    </main>
  );
};

export default MachineLearning;
