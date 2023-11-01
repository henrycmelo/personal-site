import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAlertContext } from "../context/alertContext";
import reactpagepicture from "../images/reactpagepicturefour.png";
import LandingImage from "../layout/LandingImage";
import ProjectTitle from "../layout/ProjectTitle";
import ProjectOverview from "../layout/ProjectOverview";
import ButtonsBottom from "../layout/ButtonsBottom";
import Loader from "../components/Loader";

const MyPersonalSite = () => {
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
            imageSrc={reactpagepicture}
            alt="mockup react project"
          />

          <ProjectTitle
            client="Building a dynamic web app with React, Chakra and Formik"
            title="Personal website showcasing my work and projects"
            role="Creator and developer"
            tools="React Js, Chakra UI, Formik, and Netlify."
            dateInititial="2023-01"
            dateFinal="2023-03"
          />

          <ProjectOverview
            isProgrammingProject
            backgroundColor={
              colorMode === "light" ? "secondLight" : "darkDarkMode"
            }
            description="This website is a platform for me to showcase my work and projects. 
                      It is built using React, a popular JavaScript library for building user interfaces,
                       and Chakra UI, a component library for building accessible and responsive web applications.
                        The website also uses Formik for form management and Netlify for deployment."
            challenge=" I started developing my portfolio by creating wireframes and user flows using Figma. 
                  This helped me establish the website's layout and plan for the user experience. 
                  Then, I used React, Chakra, and Formik to build out the website's features, starting with core components and adding more complex ones.
                   I also integrated testing and debugging throughout the process to ensure a high-quality end product,
                    including testing on different devices and using automated testing tools like Jest and React Testing Library."
            item="Not only Smooth scroll navigations but also a responsive navigation menu."
            item2="A contact form with validation powered by Formik and a Dark and light mode."
            item3="Implementation of React Context to manage global state across multiple components. "
            design=" The website was designed with a minimalist aesthetic in mind, with a focus on clean lines and a simple color scheme with a dark and light mode. 
              The layout is designed to be responsive, with a mobile-first approach that ensures the website looks great on any device. 
              The typography and overall design were carefully chosen to reflect my personal style and brand."
          />
          <ButtonsBottom
            hasLinkToOtherPages
            backgroundColor={
              colorMode === "light" ? "secondLight" : "darkDarkMode"
            }
            button1="Launch Project"
            button2="View Github"
            href1="https://henrycastillo.dev/"
            href2="https://github.com/henrycastillome/personal-site"
          />
        </>
      )}

      <Footer />
    </main>
  );
};

export default MyPersonalSite;
