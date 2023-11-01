import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectOverview from "../layout/ProjectOverview";
import CurrentUserInterface from "../layout/CurrentUserInterface";
import currentstate1 from "../images/currentstate1.png";
import currentstate2 from "../images/currentstate2.png";
import usertestingimage from "../images/usertesting.png";
import recoButton from "../images/reco1.png";
import recoButton2 from "../images/reco2.png";
import hero1 from "../images/reco3.png";
import hero2 from "../images/reco4.png";
import visual1 from "../images/reco5.png";
import visual2 from "../images/reco6.png";
import pattern1 from "../images/reco7.png";
import pattern2 from "../images/reco8.png";
import affinity from "../images/affinity.png";
import conclusion from "../images/conclusion.png";
import Research from "../layout/Research";
import {
  faBriefcase,
  faChild,
  faThumbsUp,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import UserTesting from "../layout/UserTesting";
import Analyze from "../layout/Analyze";
import Recommendations from "../layout/Recommendations";
import Conclusion from "../layout/Conclusion";
import GoingForward from "../layout/GoingForward";
import ButtonsBottom from "../layout/ButtonsBottom";
import LandingImage from "../layout/LandingImage";
import landingProject from "../images/AAlaptop-noBG.png";
import ProjectTitle from "../layout/ProjectTitle";
import { useAlertContext } from "../context/alertContext";
import Loader from "../components/Loader";

const CaseStudyArchives = () => {
  const {  colorMode,  } = useAlertContext();
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
        imageSrc={landingProject}
        alt="Laptop with the website project"
      />

      {/*Title */}

      <ProjectTitle
        client="Archives of American Art"
        title="Enhancing User Experience for Better Donations on Support Page"
        role="UX researcher, user testing, UI designer"
        tools="Figma, Zoom, MiroBoard"
        dateInititial="2022-10"
        dateFinal="2022-12"
      />

      {/*Project Overview section */}
      <ProjectOverview
        backgroundColor={colorMode==='light'? "secondLight":'darkDarkMode'}
        client="The Archives of American Art"
        description="is a research center and repository for primary sources related to American art history. It's 
                    mission is to make its vast collection of documents accessible to the public and support research and scholarship in the field."
        challenge="Redesign Archives of American Art's support page to increase donations. 
                  Donations are critical to preserving primary sources documenting the visual arts history."
        solution="Enhance the user experience (UX) by reorganizing the visual hierarchy of the content, implementing interactive buttons, and adding personalized touches to the page. 
                    A more friendly user interface (UI) can be achieved by creating a prominent call-to-action and streamlining the donation process."
      />

      <CurrentUserInterface
        backgroundColor={colorMode==='light'? "light":'dark'}
        imageSrc={currentstate1}
        imageSrc2={currentstate2}
        description="Main support page"
        description2="Other ways to give page"
      />

      <Research
        backgroundColor={colorMode==='light'? "secondLight":'darkDarkMode'}
        subtitle="Understanding the user target"
        description=" I initiated the project by investigating traits of users likely to donate. Using a give.org study on donor behavior, 
                      I developed a user profile focusing on generations with higher Art and Culture charity donations, considering education and employment status."
        icon={faChild}
        iconTitle="Three generations"
        item="Millenials"
        item2="Generation X"
        item3="Boomers"
        icon2={faThumbsUp}
        iconTitle2="Interests"
        item21="Art"
        item22="Culture"
        item23="Museums"
        icon3={faBriefcase}
        iconTitle3="Preferable Ocupations"
        item31="History researcher"
        item32="Designer"
        item33="Collector"
      />

      {/*User testing */}
      <UserTesting
        backgroundColor={colorMode==='light'? "light":'dark'}
        type="Moderate remote & in-person"
        description="To assess the usability of the current Archive of American Art support page, 
                      I carried out asynchronous sessions with each participant. They were guided through three tasks and scenarios
                       while being encouraged to vocalize their thoughts. I posed follow-up questions as necessary for further clarification."
        imageSrc={usertestingimage}
        descriptionImage="Remote testing"
      />

      {/*Analyze */}

      <Analyze
        backgroundColor={colorMode==='light'? "secondLight":'darkDarkMode'}
        type="Affinity diagram"
        description="I utilized an affinity diagram to identify patterns and organize them in descending order of prevalence. 
                    Based on these findings, I formulated recommendations for improvement."
        icon={faChartBar}
        iconTitle="Insights"
        item="The majority of users felt that the buttons appeared outdated and required a more appealing design."
        item2="Numerous users suggested consolidating the content information into one tab instead of multiple sections."
        item3="Users observed inconsistencies in font and font size, and they proposed incorporating more imagery."
        imageSrc={affinity}
        descriptionImage="Affinity diagram"
      />

      {/*recommendation */}

      <Recommendations
        title="RECOMMENDATIONS"
        backgroundColor={colorMode==='light'? "light":'dark'}
        type="Buttons"
        item="Enlarge buttons for easier user interaction"
        item2="Change CTA color to purple for consistency and contrast"
        item3="Relocate 'Donate' button to navigation bar's end"
        item4="Update CTA label to 'Donate Now' to increase urgency"
        imageSrc={recoButton2}
        descriptionImage="Before"
        imageSrc2={recoButton}
        descriptionImage2="After"
      />
      <Recommendations
        hasTwoBulletPoints
        backgroundColor={colorMode==='light'? "light":'dark'}
        type="Hero Page"
        item="Usability study revealed user frustration due to absence of personal touch"
        item2='Added carousel in hero image with "Donate Now" button and external quotes'
        imageSrc={hero1}
        descriptionImage="Before"
        imageSrc2={hero2}
        descriptionImage2="After"
      />

      <Recommendations
        hasThreeBulletPoints
        backgroundColor={colorMode==='light'? "light":'dark'}
        type="Visual hierarchy"
        item="Implemented cards with individual CTA buttons for better information differentiation and guidances"
        item2='Added carousel in hero image with "Donate Now" button and external quotes'
        item3="Added image to landing page top with a distinct CTA button"
        imageSrc={visual1}
        descriptionImage="Before"
        imageSrc2={visual2}
        descriptionImage2="After"
      />

      <Recommendations
        hasTwoBulletPoints
        backgroundColor={colorMode==='light'? "light":'dark'}
        type="Layout redesign"
        item="Suggested switching to F-pattern for enhanced viewing experience"
        item2="F-pattern enables intuitive navigation and user-friendly content scanning"
        imageSrc={pattern1}
        descriptionImage="Before"
        imageSrc2={pattern2}
        descriptionImage2="After"
      />

      {/*going forward*/}

      <Conclusion
        hasThreeBulletPoints
        backgroundColor={colorMode==='light'? "secondLight":'darkDarkMode'}
        title="CONCLUSION"
        type="Presentation"
        description="During a Zoom virtual meeting, I presented the final report to the client, encompassing the methodology and resulting recommendations. 
                    I thoroughly explained the process behind our recommendations, emphasizing their alignment with the client's objective 
                    of enhancing the support page."
        type2="Feedback"
        description2="The client expressed satisfaction with the outcomes and recommendations. They requested the final report, presentation video, and slides. 
                      I eagerly anticipate further collaboration with them."
        imageSrc={conclusion}
        descriptionImage="Zoom meeting"
      />

      <GoingForward
        backgroundColor={colorMode==='light'? "light":'dark'}
        title="GOING FORWARD"
        type="Takeaways"
        description="During this project, I discovered the significance of teamwork and the crucial role that open-mindedness plays in development. 
                  I also realized that usability studies and peer feedback greatly impact successive website design iterations. 
                  Emphasizing user needs and setting aside personal biases is essential for success."
        type2="Next steps"
        description2=" it is advisable to conduct another round of usability studies to verify if the previous user needs and frustrations have been effectively resolved. 
                    Additionally, carrying out further user research will help identify any new areas requiring attention, ensuring a comprehensive 
                    understanding of user requirements."
      />

      <ButtonsBottom
        button1="Contact me"
        path1="/contactme"
        button2="View other projects"
        path2="/projects"
        backgroundColor={colorMode==='light'? "light":'dark'}
      />

      <Footer />
      </>
      )}
    </main>
  );
};

export default CaseStudyArchives;
