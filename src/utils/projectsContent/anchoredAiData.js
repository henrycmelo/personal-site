import {
  faCalendarCheck,
  faTasks,
  faHandshake,
  faLightbulb,
  faClipboardQuestion
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
      `In today’s fast-paced world, people struggle to manage their daily routines effectively, 
      juggling tasks related to health, work, 
      and personal life across multiple platforms and devices. 
      Existing tools are often fragmented, leading to stress, lack of productivity, and difficulty maintaining a healthy balance. 
      Additionally, users are increasingly concerned about the privacy and security of their personal data, especially when integrating AI solutions into their daily routines. `,
      challenge:[
        "Simplify daily management by creating a single, AI-driven tool that seamlessly integrates tasks across health, productivity, and personal scheduling.",
        "Enhance well-being by using AI to provide personalized recommendations that reduce stress and improve health outcomes.",
        "Ensure trust and security by designing a user-centered app that prioritizes data privacy, giving users control over their personal information.",
        "Cross-device integration to create a seamless user experience, allowing users to manage their tasks and health across multiple devices, including wearables."

      ]
      ,
      solution:
      "A smart multi-device app that enhances daily routines by automating tasks and providing personalized reminders focused on health, productivity, and calendar integration.",
      
    },
    researchSecondaryData: {
      subtitle: "Secondary Research",
      description:"To supplement our primary research, we explored data on the habits and routines of Americans in managing daily activities, health, and work-life balance:",
      data:[
        {
          icon: faLightbulb,
          iconTitle: "Key Findings",
          items:[
            "According to the American Psychological Association (APA), 75% of Americans experience regular stress, with 43% reporting that it negatively impacts their productivity and well-being.",
            "A Gallup survey found that 60% of Americans struggle with maintaining a healthy work-life balance, leading to burnout and declining health.",
            "75% of Americans use multiple devices (e.g., smartphones, laptops, wearables) daily, highlighting the need for seamless cross-device integration."

          ],
          // query:['75% of Americans experience regular stress', '0% of Americans struggle with maintaining a healthy work-life balance', '75% of Americans use multiple devices (e.g., smartphones, laptops, wearables) daily']
        }],
        

    },
    researchPrimaryData: {
      subtitle: "Primary Research",
      description:"To design a personalized AI assistant that truly integrates into users' daily lives, we conducted both surveys and user interviews with a diverse range of participants. Our goal was to understand their pain points, needs, and expectations from a tool focused on productivity, health, and well-being.",
      data:[
        {
          icon: faClipboardQuestion,
          iconTitle: "Methodology",
          items:[
            "Surveys: Gathered quantitative insights on how people manage daily tasks, stress, and personal health. This helped us identify broad patterns in how users interact with various tools and apps.",
            "User Interviews: Through one-on-one interviews, we gained deeper qualitative insights. We used these to develop empathy maps and affinity diagrams, identifying key themes such as a strong desire for data privacy, simplified task management, and personalized health insights.",
            "Competitive Analysis: Studied existing AI assistants and productivity tools to understand their strengths and weaknesses. This helped us identify opportunities for differentiation and innovation in our design.",
            

          ]
        }
     
          
        ]

    },
   
    researchData: {
      subtitle: "Primary Research: Understanding User Needs",
      description: `We started by conducting surveys and user interviews with potential users. This gave us insight into their daily routines, challenges with existing productivity tools, and their needs for a personalized assistant. 
      Key insights focused on building trust and simplifying complex daily routines.`,
      
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
        type: "Digital Wireframes-HEALTH SCENARIO",
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
        type: "High fidelity design concepts-HEALTH SCENARIO",
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
        type: "Wearable Interface Design -HEALTH SCENARIO",
        description: `The mockup of the watch interface ensures it works well on different devices. This makes sure that users have a similar and easy experience no matter what device they're using. ` ,
        images: [
          {
            imagePath: watch,
            description: "Mockups watch",
          },
         

        ],
      },
      {
        type: "High Fidelity Prototype -HEALTH SCENARIO",
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


