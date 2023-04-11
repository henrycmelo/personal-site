import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingImage from "../layout/LandingImage";
import projectimage from "../images/dashpp.png";
import ProjectTitle from "../layout/ProjectTitle";
import ProjectOverview from "../layout/ProjectOverview";
import ButtonsBottom from "../layout/ButtonsBottom";
import Loader from "../components/Loader";
import { useAlertContext } from "../context/alertContext";

const Dash = () => {
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
      <LandingImage imageSrc={projectimage} alt="Project Mockup" />
      {/*Title */}

      <ProjectTitle
        client="Analyzing NYC Restaurant Violations with Python, Plotly, and Dash"
        title="Examining NYC restaurant violations with Python, Plotly, and Dash using Health Department data."
        role="Full-stack developer"
        tools="Python, Pandas, Plotly, Dash, HTML5, Bootstrap"
        date="Sep-Dec 2022"
      />

      <ProjectOverview
        isProgrammingProject
        backgroundColor={colorMode === "light" ? "secondLight" : "darkDarkMode"}
        description="This interactive site offers easy exploration and visualization of NYC restaurant violations. Users can access 
                          five visualization types, search for specific restaurants, and view violations in a table format, 
                          empowering them to make informed dining choices."
        challenge="This project involved collecting NYC restaurant violations data, cleaning it with Python and Pandas, and overcoming 
                    challenges in quantifying descriptive data for plots. Using Plotly, five visualizations were created, 
                      and a search bar feature was added with Dash. After testing and debugging, the site was deployed for user access, 
                      with documentation and collaboration ensuring maintainability and scalability."
        item="Interactive visualizations and search bar"
        item2="User-friendly interface"
        item3="Data processing and scalability"
        design="With a modern, visually appealing dark mode design, this project offers an intuitive layout and a user-friendly experience, reducing eye strain while exploring restaurant violations data."
      />
      <ButtonsBottom
        backgroundColor={
          colorMode === "light" ? "secondLight" : "darkDarkMode"
        }
        button1="Launch Project"
        button2="View Github"
        href1="http://henrycastillome.pythonanywhere.com/"
        href2="https://github.com/henrycastillome/PFCH"
      />

      <Footer />
      </>
      )}
    </main>
  );
};

export default Dash;
