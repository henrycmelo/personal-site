
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingImage from "../layout/LandingImage";
import projectimage from "../images/steakhousepage.png";
import ProjectTitle from "../layout/ProjectTitle";
import ProjectOverview from "../layout/ProjectOverview";
import Research from "../layout/Research";
import Personas from "../layout/Personas";
import {
  faDollarSign,
  faClock,
  faComments,
  faChartBar,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import persona1 from "../images/persona1.png";
import persona2 from "../images/persona2.png";
import StartingDesign from "../layout/StartingDesign";
import paperwireframe from "../images/paper.png";
import digitalwireframe from "../images/digital.png";
import digitalwireframe2 from "../images/digital2.png";
import lowfidelity from "../images/lowfi.png";
import UserTesting from "../layout/UserTesting";
import refine1 from "../images/refine1.png";
import refine2 from "../images/refine2.png";
import refine3 from "../images/refine3.png";
import hifiproto from "../images/hifi.gif";
import GoingForward from "../layout/GoingForward";
import ButtonsBottom from "../layout/ButtonsBottom";

const SteakHouse = () => {

  return (
    <main>
      <Header />
      {/*image */}
      <LandingImage imageSrc={projectimage} alt="Mockup project" />

      <ProjectTitle
        client="The Steakhouse"
        title="Design a food menu app for a steakhouse"
        role="Product designer"
        tools="Figma, Zoom, Miroboard"
        date="Dec 2021- July 2022"
      />

      <ProjectOverview
        backgroundColor="light"
        client="The Steakhouse,"
        description="located in a major US city, serves delicious steaks, seafood, and pasta. 
                    With a strong reputation, they offer quality products at competitive prices, targeting busy professionals and families."
        challenge="Design a food menu app from ideation to implementation for busy workers and families who lack the time necessary to prepare a meal."
        solution="A food menu app for a Steakhouse that allows users to easily order any dish from work or home."
      />

      <Research
        backgroundColor={"secondLight"}
        subtitle={"Understanding the user"}
        description="I conducted interviews and developed empathy maps to understand user needs. 
                    The primary group identified were busy working professionals in their mid-thirties, 
                    struggling with lack of time, high delivery fees, and unmet expectations. 
                    The secondary group comprised business people with children who, despite having time, preferred online ordering. 
                    Their challenges included lack of food reviews and detailed descriptions."
        icon={faClock}
        iconTitle="Time"
        item="Time constraints: Working adults face busy schedules."
        item2="Limited cooking opportunities: Less time available for meal preparation."
        item3="Reliance on alternatives: Busy individuals seek other meal options."
        icon2={faDollarSign}
        iconTitle2="Cost & Accuracy"
        item21="Expensive: Users face high delivery fees."
        item22="Unclear descriptions: Inaccurate or unclear food descriptions cause confusion."
        item23="Disappointing visuals: Unreliable food pictures lead to unmet expectations"
        icon3={faComments}
        iconTitle3="Reviews & Steps"
        item31="Insufficient reviews: Limited feedback makes trying new menu items difficult."
        item32="Customization challenges: Absence of guidance hinders personalized orders."
        item33="Lengthy ordering: Busy users struggle with time-consuming ordering processes."
      />

      <Personas
        hasTwoPersonas
        backgroundColor="light"
        subtitle="Comprehending user needs"
        description="I have created personas based on real data to understand needs and behaviors. This helps me create a user-centered design and better user experience."
        imageSrc={persona1}
        descriptionImage="Persona 1"
        imageSrc2={persona2}
        descriptionImage2="Persona 2"
      />

      <StartingDesign
        backgroundColor={"secondLight"}
        title="STARTING THE DESIGN"
        subtitle="Paper wireframes"
        description="While drafting iterations for each screen of the Steakhouse app, I focused on ensuring the elements effectively addressed user pain points. 
                    Prioritizing a fast and seamless way to view the menu and past orders was essential."
        imageSrc={paperwireframe}
        descriptionImage="Paper wirefremes"
        subtitle2="Digital wireframes"
        description2="As the initial design phase continued, I made sure to base screen designs on feedback and findings from the user research."
        imageSrc2={digitalwireframe}
        descriptionImage2="Digital wireframe"
        descriptionImage22="Digital wireframe 2"
        imageSrc22={digitalwireframe2}
        subtitle3="Low-fidelity prototype"
        description3="The low-fidelity prototype linked to the primary user flow for the checkout process from nearby restaurants, enabling it to be utilized in a usability study with users."
        imageSrc3={lowfidelity}
        descriptionImage3="Low fidelity prototype flow"
      />

      <UserTesting
        hasFindings
        backgroundColor="light"
        type="Remote testing"
        description="I conducted two rounds of usability studies, facilitating the progression from wireframes to mockups. 
                  The first study offered crucial insights, steering the mockups' direction. In the second study, a high-fidelity 
                  prototype helped pinpoint areas needing further refinement or adjustments in the mockups."
        icon={faChartBar}
        iconTitle="Findings Round 1"
        item="Users seek a clearer checkout process for easier completion"
        item2="Users prefer a more minimalist design for each page"
        item3="Users desire a more prominent button to locate the nearest restaurant"
        icon2={faCheck}
        iconTitle2="Findings Round 2"
        item21='"ALL" menu category overwhelms most users'
        item22="Locating daily specials proves difficult for users"
        item23="Users prefer a checkout button after adding items to the cart, rather than returning to the main menu"
      />

      <StartingDesign
        backgroundColor={"secondLight"}
        title="REFINING THE DESIGN"
        subtitle="High-Fidelity Design Concepts:"
        description="Initial designs displayed recent orders, the menu, and a current order preview on the main page. 
                  After usability studies, I streamlined navigation by adding a carousel for menu categories and items, 
                  as well as a search bar for easy food item discovery."
        imageSrc={refine1}
        descriptionImage="Mockups project"
        subtitle2="Post-Second Round User Testing"
        description2="The second usability study revealed users' frustration with the menu item card being too small and cluttered.
                       To address this, I enlarged the menu item card and simplified customer ratings to display only the number.
                       I also introduced a menu category for Specials and another for Popular items for easy discovery and added icons
                        to the menu categories for better accessibility."
        imageSrc2={refine2}
        descriptionImage2="Mockups after second round of user testing"
        imageSrc22={refine3}
        descriptionImage22="App interfaces"
        subtitle3="High-Fidelity prototype"
        description3="The final high-fidelity prototype showcased user flows for ordering an item from a Steakhouse.
                       It addressed user needs like estimated time, customizable modifications for an item, and the option 
                       to either checkout or return to the menu after adding an item to the cart."
        imageSrc3={hifiproto}
        descriptionImage3="Click here to view the prototype"
        href="https://www.figma.com/proto/jTg5y0K73FjmiGZxtmegGA/My-project-(steakhouse)?page-id=1184%3A9871&node-id=1184-9872&viewport=35%2C689%2C0.5&scaling=scale-down&starting-point-node-id=1184%3A9872"
      />
      <GoingForward
        backgroundColor="light"
        title="GOING FORWARD"
        type="Takeaways"
        description="While working on the Steakhouse food menu app, I realized that early concepts are just the foundation.
                       Usability studies and input from peers significantly impact the refinement and evolution of the app's design."
        type2="Impact"
        description2="The food menu app effectively conveys the Steakhouse's dedication to understanding and addressing user needs, 
                      providing a seamless and intuitive experience tailored to their preferences and requirements."
      />

      <ButtonsBottom
        button1="Contact me"
        path1="/contactme"
        button2="View other projects"
        path2="/projects"
        backgroundColor="light"
      />


     

      <Footer />
    </main>
  );
};

export default SteakHouse;
