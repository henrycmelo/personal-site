import { useState, useEffect } from 'react';
import Header from "../components/Header"
import LandingSection from "../components/LandingSection";
import AboutMeSection from "../components/AboutMeSection";
import ContactMeSection from "../components/ContactMeSection";
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import CaseStudySection from '../components/CaseStudySection';
import ReviewsCarousel from '../components/ReviewCarousel';
import TimelineCareer from '../components/TimelineCareer';


function Home() {
  const [showNavBar, setShowNavBar]=useState(false);
  

  useEffect(()=>{
    setTimeout(()=>{
      setShowNavBar(true);
    }, 1500)
  }, []);
;
  return (
    <main>
      
          <>
          <Header isHomePage /> 
          {showNavBar && <LandingSection /> }
          {showNavBar && <ReviewsCarousel />}
          {showNavBar && <CaseStudySection /> }
          {showNavBar && <TimelineCareer /> }
          {/* {showNavBar&&<ProjectsSection isHomePage />} */}
          
          {/* {showNavBar&&<AboutMeSection isHomePage/>} 
          {showNavBar&&<ContactMeSection isHomePage />} */}
          <footer>
          {/* {showNavBar&&<Footer /> } */}
          </footer>
          <Alert />

          </>

      
    </main>
        
     
  );
}

export default Home;
