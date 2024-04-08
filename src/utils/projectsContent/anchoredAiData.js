import {
  faCalendarCheck,
  faTasks,
  faHandshake
} from "@fortawesome/free-solid-svg-icons";
import persona1 from "../../images/Anchored personas-1.png";
import story from "../../images/anchored-story.png";
import anchoredLanding from "../../images/anchored-landing.png";
import digitalwireframe from "../../images/ANchored-wireframe.png";
import digitalwireframe2 from "../../images/anchored-smart-active.png";
import refine1 from "../../images/refine1-anchored.png";
import refine2 from "../../images/refine2-anchored.png";
import watch from "../../images/anchored-watch.png"
import hifiproto from "../../images/anchored-hifi.gif";



export const anchoredAiData= [
  {
    client: "Anchored",
    landingImage:anchoredLanding,
    projectTitle:{
        title:"Designing a personalized AI assistant",
        role:"Product designer collaborating closely with three other team members",
        tools:"Figma, Zoom, Miroboard",
        date:"September 2023- December 2023",
        dateInitial:"2023-09",
        dateFinal:"2023-12"
    },
    projectOverview: {
      description:
      `is a concept created by the team that refers to the process of integrating a AI personalized assistant into a user's daily routines `,
      challenge:
      "Create an app that works on different devices and uses Artificial Intelligence.",
      solution:
      "A smart tool that helps improve daily routines, with a focus on health and well-being.",
    },
   
    researchData: {
      subtitle: "Understanding the user target",
      description: `We conducted a survey and user interviews to create empathy maps and affinity diagrams 
              so we can further understand out users & solidify the unique value our product can provide.`,
      data: [
        {
          icon: faHandshake,
          iconTitle: "Trust",
          items: ["Users need to feel safe using the service.", "Users want to be able to trust the app.", "Users ask to keep their information safe and secure."],
        },
        {
          icon: faCalendarCheck,
          iconTitle: "Calendar Integration",
          items: ["Syncing calendars with other people.", "Events and activities automation.", "Have everything in one place."],
        },
        {
          icon: faTasks,
          iconTitle: "Health & Productivity",
          items: ["Notifications and home automation.", "Be reminded of important events", "A tool to help reduce stress"],
        },
      ],
    },
    userPersonasData:{
      type: "Comprehending user needs",
      description: `We created a persona and a storyboard to visually outline how our potential user will interact with the product.`,
      images: [
        {
          imagePath: persona1,
          description: "User Persona 1",
        },
        {
          imagePath: story,
          description: "User Story Board",
        },
        
      ],

    },
    designData:[
      
      {
        type: "Digital Wireframes",
        description: `As the initial design phase started, we prioritized tackling the issues users were encountering, drawing from our research findings. This ensures that our project puts the user's needs first.` ,
        images: [
          {
            imagePath: digitalwireframe,
            description: "Digital Wireframe",
          },
          {
            imagePath: digitalwireframe2,
            description: "Digital Wireframe 2",
          },

        ],
      },
      
    ],
    
    refiningDesignData:[
      {
        type: "High fidelity design concepts",
        description: `
        Transitioning from a low-fidelity to a high-fidelity mockup allows for a more detailed representation of the final product, providing stakeholders with a clearer vision of the user experience. ` ,
        images: [
          {
            imagePath: refine1,
            description: "Mockups project 1",
          },
          {
            imagePath: refine2,
            description: "Mockups project 2",
          }
        ],
      },
      {
        type: "Wearable Interface Design",
        description: `The mockup of the watch interface ensures it works well on different devices. This makes sure that users have a similar and easy experience no matter what device they're using. ` ,
        images: [
          {
            imagePath: watch,
            description: "Mockups watch",
          },
         

        ],
      },
      {
        type: "High Fidelity Prototype",
        description: `The final high-fidelity prototype showcased user flows for an active pause suggested by Anchored. It creates an active pause based on the user's settings and concludes with an accomplishment summary.` ,
        images: [
          {
            imagePath: hifiproto,
            description: "High Fidelity Prototype",
          },
          

        ],
      },
    ],
    
    
    goingForwardData: [
      {
        type: "Takeaways",
        description: `Working on a team for this project underscored the significance of effective collaboration and communication in achieving our goals. We learned the importance of leveraging each team member's strengths to overcome challenges and develop innovative solutions, ultimately delivering a user-centered product that seamlessly integrates.`,
      },
      {
        type: "Impact",
        description: `Through our teamwork, we were able to create a smart tool that not only addresses the challenge of developing a multi-device AI app but also focuses on enhancing users' daily routines with a specific emphasis on their health and well-being. Our collective effort resulted in a product that has the potential to positively impact users' lives by providing them with a convenient and personalized solution to improve their overall quality of life`,
       
      },
    ],
  },
];


