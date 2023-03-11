import Header from "../components/Header"
import LandingSection from "../components/LandingSection";
import AboutMeSection from "../components/AboutMeSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactMeSection from "../components/ContactMeSection";
import Footer from "../components/Footer";

import Alert from "../components/Alert";





function Home() {
  return (
    <main>
          <Header isHomePage />
          <LandingSection />
          <AboutMeSection isHomePage/> 
          <ProjectsSection isHomePage />
          <ContactMeSection isHomePage />
          <Footer />
          <Alert />
    </main>
        
     
  );
}

export default Home;
