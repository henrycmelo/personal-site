import {
  faChartBar,
  faCheck,
  faClock,
  faComments,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import persona1 from "../../images/persona1.png";
import persona2 from "../../images/persona2.png";
import conclusion from "../../images/conclusion.png";
import steakLanding from "../../images/steakhousepage.png";
import paperwireframe from "../../images/paper.png";
import digitalwireframe from "../../images/digital.png";
import digitalwireframe2 from "../../images/digital2.png";
import lowfidelity from "../../images/lowfi.png";
import refine1 from "../../images/refine1.png";
import refine2 from "../../images/refine2.png";
import refine3 from "../../images/refine3.png";
import hifiproto from "../../images/hifi.gif";



export const steakHouseData = [
  {
    client: "The Steak House",
    landingImage:steakLanding,
    projectTitle:{
        title:"Design a food menu app for a steakhouse",
        role:"Product designer",
        tools:"Figma, Zoom, Miroboard",
        date:"Dec 2021- July 2022",
        dateInitial:"2021-12",
        dateFinal:"2022-07"
    },
    projectOverview: {
      description:
      `located in a major US city, serves delicious steaks, seafood, and pasta. 
      With a strong reputation, they offer quality products at competitive prices, targeting busy professionals and families.`,
      challenge:
      "Design a food menu app from ideation to implementation for busy workers and families who lack the time necessary to prepare a meal.",
      solution:
      "A food menu app for a Steakhouse that allows users to easily order any dish from work or home.",
    },
   
    researchData: {
      subtitle: "Understanding the user target",
      description: `I conducted interviews and developed empathy maps to understand user needs. 
        The primary group identified were busy working professionals in their mid-thirties, 
        struggling with lack of time, high delivery fees, and unmet expectations. 
        The secondary group comprised business people with children who, despite having time, preferred online ordering. 
        Their challenges included lack of food reviews and detailed descriptions.`,
      data: [
        {
          icon: faClock,
          iconTitle: "Time",
          items: ["Time constraints: Working adults face busy schedules.", "Limited cooking opportunities: Less time available for meal preparation.", "Reliance on alternatives: Busy individuals seek other meal options."],
        },
        {
          icon: faDollarSign,
          iconTitle: "Cost & Accuracy",
          items: ["Expensive: Users face high delivery fees.", "Unclear descriptions: Inaccurate or unclear food descriptions cause confusion.", "Disappointing visuals: Unreliable food pictures lead to unmet expectations."],
        },
        {
          icon: faComments,
          iconTitle: "Reviews & Steps",
          items: ["Insufficient reviews: Limited feedback makes trying new menu items difficult.", "Customization challenges: Absence of guidance hinders personalized orders.", "Lengthy ordering: Busy users struggle with time-consuming ordering processes."],
        },
      ],
    },
    userPersonasData:{
      type: "Comprehending user needs",
      description: `I have created personas based on real data to understand needs and behaviors. This helps me create a user-centered design and better user experience.`,
      images: [
        {
          imagePath: persona1,
          description: "User Persona 1",
        },
        {
          imagePath: persona2,
          description: "User Persona 2",
        },
        
      ],

    },
    designData:[
      {
        type: "Paper Wireframes",
        description: `While drafting iterations for each screen of the Steakhouse app, I focused on ensuring the elements effectively addressed user pain points. Prioritizing a fast and seamless way to view the menu and past orders was essential.` ,
        images: [
          {
            imagePath: paperwireframe,
            description: "Paper Wireframe",
          }
        ],
      },
      {
        type: "Digital Wireframes",
        description: `As the initial design phase continued, I made sure to base screen designs on feedback and findings from the user research.` ,
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
      {
        type: "Low Fidelity Prototype",
        description: `The low-fidelity prototype linked to the primary user flow for the checkout process from nearby restaurants, enabling it to be utilized in a usability study with users.` ,
        images: [
          {
            imagePath: lowfidelity,
            description: "Low Fidelity Prototype",
          },
          

        ],
      },
    ],
    userTestingData: {
      type: "Moderated remote usability testing",
      description: `I conducted two rounds of usability studies, facilitating the progression from wireframes to mockups. The first study offered crucial insights, steering the mockups' direction. In the second study, a high-fidelity prototype helped pinpoint areas needing further refinement or adjustments in the mockups.`,
      data: [
        {
          icon: faChartBar,
          title: "Findings Round 1",
          items: [
            "Users seek a clearer checkout process for easier completion",
            "Users prefer a more minimalist design for each page",
            "Users desire a more prominent button to locate the nearest restaurant.",
          ],
        },
        {
          icon: faCheck,
          title: "Findings Round 2",
          items: [
            `"ALL" menu category overwhelms most users`,
            "Locating daily specials proves difficult for users",
            "Users prefer a checkout button after adding items to the cart, rather than returning to the main menu.",
          ],
        },
      ],
    },
    refiningDesignData:[
      {
        type: "High fidelity design concepts",
        description: `Initial designs displayed recent orders, the menu, and a current order preview on the main page. After usability studies, I streamlined navigation by adding a carousel for menu categories and items, as well as a search bar for easy food item discovery.` ,
        images: [
          {
            imagePath: refine1,
            description: "Mockups project 1",
          }
        ],
      },
      {
        type: "Post second round of usability testing",
        description: `The second usability study revealed users' frustration with the menu item card being too small and cluttered. To address this, I enlarged the menu item card and simplified customer ratings to display only the number. I also introduced a menu category for Specials and another for Popular items for easy discovery and added icons to the menu categories for better accessibility.` ,
        images: [
          {
            imagePath: refine2,
            description: "Mockups project 2",
          },
          {
            imagePath: refine3,
            description: "App interface",
          },

        ],
      },
      {
        type: "High Fidelity Prototype",
        description: `The final high-fidelity prototype showcased user flows for ordering an item from a Steakhouse. It addressed user needs like estimated time, customizable modifications for an item, and the option to either checkout or return to the menu after adding an item to the cart.` ,
        images: [
          {
            imagePath: hifiproto,
            description: "High Fidelity Prototype",
          },
          

        ],
      },
    ],
    
    conclusionData: [
      {
        type: "Presentation",
        description: `During a Zoom virtual meeting, I presented the final report to the client, encompassing the methodology and resulting recommendations. 
        I thoroughly explained the process behind our recommendations, emphasizing their alignment with the client's objective 
        of enhancing the support page.`,
      },
      {
        type: "Feedback",
        description: `The client expressed satisfaction with the outcomes and recommendations. They requested the final report, presentation video, and slides. 
      I eagerly anticipate further collaboration with them.`,
        images: [
          {
            imagePath: conclusion,
            description: "Zoom meeting",
          },
        ],
      },
    ],
    goingForwardData: [
      {
        type: "Takeaways",
        description: `While working on the Steakhouse food menu app, I realized that early concepts are just the foundation. Usability studies and input from peers significantly impact the refinement and evolution of the app's design.`,
      },
      {
        type: "Impact",
        description: `The food menu app effectively conveys the Steakhouse's dedication to understanding and addressing user needs, providing a seamless and intuitive experience tailored to their preferences and requirements.`,
       
      },
    ],
  },
];


