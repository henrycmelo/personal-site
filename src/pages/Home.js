import { useState, useEffect } from 'react';
import Header from "../components/Header"
import LandingSection from "../components/LandingSection";
import AboutMeSection from "../components/AboutMeSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactMeSection from "../components/ContactMeSection";
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import Loader from '../components/Loader';





function Home() {
  const [showNavBar, setShowNavBar]=useState(false);
  const [isLoading, setIsLoading]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setShowNavBar(true);
    }, 1500)
  }, []);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 3000)
  }, []);
  return (
    <main>
      {isLoading? (<Loader/>) : (
          <>
          <Header isHomePage />, 
          {showNavBar && <LandingSection /> }
          {showNavBar&&<AboutMeSection isHomePage/>} 
          {showNavBar&&<ProjectsSection isHomePage />}
          {showNavBar&&<ContactMeSection isHomePage />}
          <footer>
          {showNavBar&&<Footer /> }
          </footer>
          <Alert />

          </>

      )}
    </main>
        
     
  );
}

export default Home;
