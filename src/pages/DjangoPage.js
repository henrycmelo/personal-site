import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingImage from "../layout/LandingImage";
import projectImage from "../images/django1.png"
import ProjectTitle from "../layout/ProjectTitle";
import ProjectOverview from "../layout/ProjectOverview"
import ButtonsBottom from "../layout/ButtonsBottom"
import { useAlertContext } from "../context/alertContext";
import Loader from "../components/Loader";



const DjangoPage = () => {
  const {  colorMode} = useAlertContext();
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
     
      <LandingImage
       imageSrc={projectImage}
       alt='mockup project'

       />

      {/*Title */}

      <ProjectTitle
        client="Building an online learning platform w/ DJANGO"
        title='Using Python, HTML, and Bootstrap, this platform streamlines online course and exam creation for instructors.'
        role='Full-stack developer'
        tools="Python, Django, Bootstrap, HTML5, AWS S3 bucket, Heroku"
        dateInititial="2022-12"
        dateFinal="2023-02"

        />
  

      <ProjectOverview isProgrammingProject
        backgroundColor={colorMode==='light'? "secondLight":'darkDarkMode'}
        description='This is an online course platform built with Django and Bootstrap. It allows students to enroll in courses, 
                    view the number of enrolled students, login, sign up, and take exams. Instructors can set up their courses, lessons, and exams. 
                    The project uses AWS S3 bucket for storage and is deployed on Heroku'
        challenge='During the development process, my most significant challenge was integrating AWS S3 bucket with Heroku for storage, 
                  as well as retrieving uploaded images from the admin panel. To overcome these challenges,
                     I thoroughly examined the documentation for both AWS S3 and Heroku, employing a trial-and-error approach to 
                     pinpoint the optimal configurations.'
        item='Student enrollment and real-time updates on enrolled students'
        item2='User authentication and exam functionality for students and instructors'
        item3='Comprehensive course creation and management for instructors'
        design='The project has a clean and modern user interface built with Bootstrap and HTML5'

      />

      <ButtonsBottom hasLinkToOtherPages
        backgroundColor={colorMode==='light'? "secondLight":'darkDarkMode'}
        button1="Launch Project"
        button2="View Github"
        href1="https://onlinecoursedjango.herokuapp.com/onlinecourseapp/"
        href2="https://github.com/henrycastillome/onlinecoursedjangoapp/"
      />

      

        
      
      <Footer />
      </>
      )}
    </main>
  );
};

export default DjangoPage;
