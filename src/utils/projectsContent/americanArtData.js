import {
  faBriefcase,
  faChartBar,
  faChild,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import mainSupportPage from "../../images/currentstate1.png";
import otherWaysToGive from "../../images/currentstate2.png";
import userTestingImage from "../../images/usertesting.png";
import affinity from "../../images/affinity.png";
import recoButton from "../../images/reco1.png";
import recoButton2 from "../../images/reco2.png";
import hero1 from "../../images/reco3.png";
import hero2 from "../../images/reco4.png";
import visual1 from "../../images/reco5.png";
import visual2 from "../../images/reco6.png";
import pattern1 from "../../images/reco7.png";
import pattern2 from "../../images/reco8.png";
import conclusion from "../../images/conclusion.png";
import landingProject from "../../images/AAlaptop-noBG.png";



export const americanArtData = [
  {
    client: "The Archives of American Art",
    landingImage:landingProject,
    projectTitle:{
      title: "Enhancing User Experience for Better Donations on Support Page",
      role: "UX researcher, user testing, UI designer",
      tools: "Figma, Zoom, MiroBoard",
      dateInitial: "2022-10",
      dateFinal: "2022-12",
    },
    projectOverview: {
      description:
        "is the world’s preeminent and most widely used research center dedicated to collecting, preserving, and providing access to primary sources that document the history of the visual arts in America. Founded in 1954, the Archives’ mission is to collect, preserve, and make available for study records, original papers, photographs, diaries, sketchbooks, and oral history interviews.",
      challenge:
        "Redesign the Archives of American Art Website to increase donations and engagement. Donations are the primary source of funding for the Archives of American Art.",
      solution:
        "Enhance the user experience by reorganizing the information architecture, improving the visual design, and creating a more intuitive user interface.",
    },
    currentState: {
      images: [
        {
          imagePath: mainSupportPage,
          description: "Main Suport Page",
        },
        {
          imagePath: otherWaysToGive,
          description: "Other Ways to Give Page",
        },
      ],
    },
    researchData: {
      subtitle: "Understanding the user target",
      description: ` I initiated the project by investigating traits of users likely to donate. Using a give.org study on donor behavior, 
                I developed a user profile focusing on generations with higher Art and Culture charity donations, considering education and employment status.`,
      data: [
        {
          icon: faChild,
          iconTitle: "Three generations",
          items: ["Millenials", "Generation X", "Boomers"],
        },
        {
          icon: faThumbsUp,
          iconTitle: "Interests",
          items: ["Art", "Culture", "Museums"],
        },
        {
          icon: faBriefcase,
          iconTitle: "Preferable Ocupations",
          items: ["History researcher", "Designer", "Collector"],
        },
      ],
    },
    userTestingData: {
      type: "Moderated remote & in-person",
      description: `To assess the usability of the current Archive of American Art support page, 
        I carried out asynchronous sessions with each participant. They were guided through three tasks and scenarios
         while being encouraged to vocalize their thoughts. I posed follow-up questions as necessary for further clarification.`,
      images: [
        {
          imagePath: userTestingImage,
          description: "User Testing Image",
        },
      ],
    },
    analisisData: {
      type: "Affinity Diagram",
      description: `I used the affinity diagram method to organize the data collected from the user testing sessions.`,
      data: [
        {
          icon: faChartBar,
          iconTitle: "Insights",
          items: [
            "The majority of users felt that the buttons appeared outdated and required a more appealing design.",
            "Numerous users suggested consolidating the content information into one tab instead of multiple sections.",
            "Users observed inconsistencies in font and font size, and they proposed incorporating more imagery.",
          ],
        },
      ],
      images: [
        {
          imagePath: affinity,
          description: "Affinity Diagram",
        },
      ],
    },
    recommedationsData: [
      {
        type: "Buttons",
        data: [
          {
            items: [
              "Enlarge buttons for easier user interaction",
              "Change CTA color to purple for consistency and contrast",
              "Relocate 'Donate' button to navigation bar's end",
              "Update CTA label to 'Donate Now' to increase urgency",
            ],
          },
        ],
        images: [
          {
            imagePath: recoButton2,
            description: "Before",
          },

          {
            imagePath: recoButton,
            description: "After",
          },
        ],
      },
      {
        type: "Hero Page",
        data: [
          {
            items: [
              "Usability study revealed user frustration due to absence of personal touch",
              'Added carousel in hero image with "Donate Now" button and external quotes',
            ],
          },
        ],
        images: [
          {
            imagePath: hero1,
            description: "Before",
          },

          {
            imagePath: hero2,
            description: "After",
          },
        ],
      },
      {
        type: "Visual hierarchy",
        data: [
          {
            items: [
              "Implemented cards with individual CTA buttons for better information differentiation and guidances",
              'Added carousel in hero image with "Donate Now" button and external quotes',
              "Added image to landing page top with a distinct CTA button",
            ],
          },
        ],
        images: [
          {
            imagePath: visual1,
            description: "Before",
          },

          {
            imagePath: visual2,
            description: "After",
          },
        ],
      },
      {
        type: "Layout redesign",
        data: [
          {
            items: [
              "Suggested switching to F-pattern for enhanced viewing experience",
              "F-pattern enables intuitive navigation and user-friendly content scanning",
            ],
          },
        ],
        images: [
          {
            imagePath: pattern1,
            description: "F-pattern",
          },

          {
            imagePath: pattern2,
            description: "New layout",
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
        description: `During this project, I discovered the significance of teamwork and the crucial role that open-mindedness plays in development. I also realized that usability studies and peer feedback greatly impact successive website design iterations. Emphasizing user needs and setting aside personal biases is essential for success.`,
      },
      {
        type: "Next steps",
        description: `it is advisable to conduct another round of usability studies to verify if the previous user needs and frustrations have been effectively resolved. Additionally, carrying out further user research will help identify any new areas requiring attention, ensuring a comprehensive understanding of user requirements.`,
       
      },
    ],
  },
];


