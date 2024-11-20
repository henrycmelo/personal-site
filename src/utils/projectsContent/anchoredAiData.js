import {
  faCalendarCheck,
  faTasks,
  faHandshake,
  faLightbulb,
  faClipboardQuestion,
} from "@fortawesome/free-solid-svg-icons";
import persona1 from "../../images/Anchored personas-1.png";
import story from "../../images/anchored-story.png";
import anchoredLanding from "../../images/anchored-landing.png";
import digitalwireframe from "../../images/ANchored-wireframe.png";
import digitalwireframe2 from "../../images/anchored-smart-active.png";
import refine1 from "../../images/refine1-anchored.png";
import refine2 from "../../images/refine2-anchored.png";
import watch from "../../images/anchored-watch.png";
import hifiproto from "../../images/anchored-hifi.gif";
import googleAssistant from "../../images/googleAssistant.png";
import siriLogo from "../../images/siriLogo.png";
import todoistLogo from "../../images/todoistLogo.png";
import affinityDiagramAnchored from "../../images/affinityDiagramAnchored.jpg";
import anchoredBrainIndividual from "../../images/AnchoredBrainIndividual.png";
import venDiagram from "../../images/venDiagram.png";

export const anchoredAiData = [
  {
    client: "Anchored",
    landingImage: anchoredLanding,
    projectTitle: {
      title: "Designing a personalized AI assistant",
      role: "Product designer collaborating closely with three other team members",
      tools: "Figma, Zoom, Miroboard",
      date: "September 2023- December 2023",
      dateInitial: "2023-09",
      dateFinal: "2023-12",
    },
    projectOverview: {
      description: `In today’s fast-paced world, people struggle to manage their daily routines effectively, 
      juggling tasks related to health, work, 
      and personal life across multiple platforms and devices. 
      Existing tools are often fragmented, leading to stress, lack of productivity, and difficulty maintaining a healthy balance. 
      Additionally, users are increasingly concerned about the privacy and security of their personal data, especially when integrating AI solutions into their daily routines. `,
      challenge: [
        "Simplify daily management by creating a single, AI-driven tool that seamlessly integrates tasks across health, productivity, and personal scheduling.",
        "Enhance well-being by using AI to provide personalized recommendations that reduce stress and improve health outcomes.",
        "Ensure trust and security by designing a user-centered app that prioritizes data privacy, giving users control over their personal information.",
        "Cross-device integration to create a seamless user experience, allowing users to manage their tasks and health across multiple devices, including wearables.",
      ],
      solution:
        "A smart multi-device app that enhances daily routines by automating tasks and providing personalized reminders focused on health, productivity, and calendar integration.",
    },
    researchSecondaryData: {
      subtitle: "Secondary Research",
      description:
        "To supplement our primary research, we explored data on the habits and routines of Americans in managing daily activities, health, and work-life balance:",
      data: [
        {
          icon: faLightbulb,
          iconTitle: "Key Findings",
          items: [
            "According to the American Psychological Association (APA), 75% of Americans experience regular stress, with 43% reporting that it negatively impacts their productivity and well-being.",
            "A Gallup survey found that 60% of Americans struggle with maintaining a healthy work-life balance, leading to burnout and declining health.",
            "75% of Americans use multiple devices (e.g., smartphones, laptops, wearables) daily, highlighting the need for seamless cross-device integration.",
          ],
          // query:['75% of Americans experience regular stress', '0% of Americans struggle with maintaining a healthy work-life balance', '75% of Americans use multiple devices (e.g., smartphones, laptops, wearables) daily']
        },
      ],
      conclusion:
        "This secondary research highlighted key areas where a tool like Anchored could provide real value—helping users reduce stress, stay productive, and improve their health by integrating their routines into a single platform.",
    },
    researchPrimaryData: {
      subtitle: "Primary Research",
      description:
        "To design a personalized AI assistant that truly integrates into users' daily lives, we conducted both surveys and user interviews with a diverse range of participants. Our goal was to understand their pain points, needs, and expectations from a tool focused on productivity, health, and well-being.",
      data: [
        {
          icon: faClipboardQuestion,
          iconTitle: "Methodology",
          items: [
            "Competitive Analysis: Studied existing AI assistants and productivity tools to understand their strengths and weaknesses. This helped us identify opportunities for differentiation and innovation in our design.",
            "Surveys: Gathered quantitative insights on how people manage daily tasks, stress, and personal health. This helped us identify broad patterns in how users interact with various tools and apps.",
            "User Interviews: Through one-on-one interviews, we gained deeper qualitative insights. We used these to develop empathy maps and affinity diagrams, identifying key themes such as a strong desire for data privacy, simplified task management, and personalized health insights.",
          ],
          query: ["Surveys", "User Interviews", "Competitive Analysis"],
        },
      ],
    },

    analisisData: {
      subtitle: "Research Synthesis",
      description: `We began our research by conducting surveys and user interviews with potential users, gathering insights into their daily routines, challenges with current productivity tools, and specific needs for a personalized assistant. By organizing our findings into empathy maps and affinity diagrams, we identified key patterns and themes. These revealed essential insights, including the need for trust and data privacy, as well as a strong desire for a solution that simplifies complex daily routines with a personal touch.`,
      titleConclusion:
        "User Needs & Key Insights: Building a Holistic Assistant",
      conclusionInsights:
        "Our research highlighted that users prioritize safety, convenience, and comprehensive support. Trust is crucial, as users need assurance their information is secure. Calendar integration is also essential for efficient syncing, event automation, and centralized planning. For health and productivity, users seek intelligent notifications, home automation, and reminders to reduce stress and boost well-being. These insights guided our design strategy to create a personalized assistant that seamlessly fits into users' daily routines.",
      data: [
        {
          icon: faHandshake,
          iconTitle: "Trust",
          items: [
            "Users need to feel safe using the service.",
            "Users want to be able to trust the app.",
            "Users ask to keep their information safe and secure.",
          ],
        },
        {
          icon: faCalendarCheck,
          iconTitle: "Calendar Integration",
          items: [
            "Syncing calendars with other people.",
            "Events and activities automation.",
            "Have everything in one place.",
          ],
        },
        {
          icon: faTasks,
          iconTitle: "Health & Productivity",
          items: [
            "Notifications and home automation.",
            "Be reminded of important events",
            "A tool to help reduce stress",
          ],
        },
      ],
      images: [
        {
          imagePath: affinityDiagramAnchored,
          description: "Affinity Diagram",
        },
      ],
    },

    competitiveAnalysisData: {
      subtitle: "Competitive Analysis",
      description: `To better understand the landscape, we analyzed three existing AI-powered apps that focus on daily routines, health, and productivity`,

      data: [
        {
          image: googleAssistant,
          title: "Strengths",
          items: [
            "Powerful AI capabilities with voice recognition and smart suggestions.",
            "Seamless integration with Google's ecosystem (Calendar, Maps, etc.).",
            "Cross-device functionality, including wearables, smartphones, and smart home devices.",
          ],
          title2: "Weaknesses",
          items2: [
            "Lacks deep personalization tailored specifically to health and wellness.",
            "Privacy concerns as users worry about data collection.",
            "Overwhelming interface for those who only need specific features (not all users need every functionality).",
          ],
        },
        {
          image: siriLogo,
          title: "Strengths",
          items: [
            "Excellent focus on health and well-being, with in-depth tracking of activity, heart rate, and sleep.",
            "Strong privacy and data security measures.",
            "Allows for automating tasks through Siri Shortcuts, integrating with other apps like Calendar.",
          ],
          title2: "Weaknesses",
          items2: [
            "Limited integration outside of the Apple ecosystem (difficult for non-iPhone users to engage).",
            "Not designed to manage complex daily routines or productivity in a cohesive manner.",
            "Customization and personalization options are relatively basic and require manual input to set up automations.",
          ],
        },
        {
          image: todoistLogo,
          title: "Strengths",
          items: [
            "Simple and intuitive task management interface, ideal for organizing daily tasks and projects.",
            "Cross-platform integration with various devices and apps.",
            "Great for productivity with customizable labels, due dates, and priorities.",
          ],
          title2: "Weaknesses",
          items2: [
            "Lacks a focus on health and well-being, limiting its ability to address holistic life management.",
            "No AI integration for automated suggestions or personalized insights.",
            "Privacy concerns due to third-party integrations with data potentially being shared between platforms.",
          ],
        },
      ],
      conclusion:
        "This competitive analysis helped us define Anchored's unique value proposition by focusing on creating a personalized, secure AI assistant that seamlessly integrates health and productivity into one platform, while ensuring cross-device functionality and ease of use.",
    },

    userPersonasData: {
      type: "User Personas: Comprehending User Needs",
      description: `Based on our research, We developed a user persona to maintain user-focused design. Meet Emily Anderson, a psychology student living in Chicago with friends while working part-time at a retail store. Emily feels overwhelmed by school demands, struggles to complete assignments on time, and finds it difficult to coordinate with classmates. Her goals include maintaining high academic performance, improving time management, prioritizing self-care, and managing stress effectively. Throughout the project, We kept Emily’s needs and challenges at the forefront to ensure my designs supported her goals and addressed her pain points.`,
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

    defineData: {
      type: "POV Statements & HMW Questions: Problem Definition",
      description: `After synthesizing our research findings and developing empathy maps, we formulated a POV statement to clearly articulate user needs and challenges. This statement combines three key elements: user, need, and insight. By framing our problem through the user's perspective, we ensure our solution addresses real pain points rather than assumed problems.`,
      pov: [
        "Emily, a busy psychology student, needs a secure AI assistant that integrates routines, health tracking, and productivity tools because her fragmented approach across multiple apps causes stress and reduces academic performance.",
      ],
      hmwDescription:
        "Building upon our POV statements, we developed a HMW question to bridge the gap between problems and solutions. This questions is intentionally broad enough to encourage creative thinking while being specific enough to generate meaningful solutions. It serves as catalysts for our ideation phase and help maintain focus on user needs throughout the design process.",
      hmw: [
        "How might we create an AI assistant that manages daily routines, health, and tasks across devices while ensuring privacy, security, and an intuitive interface that provides personalized recommendations without overwhelming users?",
      ],
      typeTwo: "Brainstorming: Generating Solutions",
      descriptionTwo: `Building upon our POV statements and HMW questions, we initiated an extensive brainstorming phase to generate potential solutions. To ensure comprehensive idea generation, we employed the Mind Mapping technique - a visual thinking tool that helps connect and build upon ideas organically. This approach was particularly valuable for our project as it allowed us to explore the interconnections between AI capabilities, user needs, and privacy considerations. 
      `,
      brainstormingData: [
        {
          imagePath: anchoredBrainIndividual,
          title: "Brainstorming solutions",
          description: `The mind mapping exercise was conducted with our design team and stakeholders, focusing on four key areas: intelligent automation, seamless integration, health & productivity balance, and privacy & control. Below is our detailed mind map showcasing the relationships between different solution components and how they address our core user needs.`,
        },
      ],
      typeThree: "Strategy",
      descriptionThree:
        `After completing our brainstorming sessions and analyzing the generated ideas, we needed to translate these creative solutions into an actionable strategy. Through a series of collaborative workshops with my teammates, we developed a strategic framework that would guide our product development. 
        `,
      strategyData: [
        {
          imagePath: venDiagram,
          title: "Product Goals",
          description: `This Venn diagram illustrates the strategic framework that guided our product development. By balancing user needs, technical feasibility, and business objectives, we ensured that our design decisions were grounded in a holistic understanding of the project requirements. This approach allowed us to create a product that not only met user expectations but also aligned with our team's capabilities and the company's goals.`,
        },
      ],
      typeFour: "Product Roadmap",
      descriptionFour: `With our goals established, we synthesized insights from our ideation phase and evaluated each potential solution across our three core pillars: health tracking, productivity management, and calendar integration. Each feature was assessed based on:`,
      criteriaData:[
        {
          criteriaItems: [
            "Alignment with product goals and user needs",
            "Technical feasibility and integration requirements",
            "Potential impact on user well-being and productivity"],
          criteriaSummary:'Based on this prioritization, we decided to move forward with implementing the P1 (Must-Have) features first:',
          mustHaveItems:[
            'Core Health Tracking',
            "Smart Calendar Integration",
            "Essential Productivity Tools"
          ]

        }
      ]
    },

    designData: [
      {
        type: "Digital Wireframes-HEALTH SCENARIO",
        description: `As the initial design phase started, we prioritized tackling the issues users were encountering, drawing from our research findings. This ensures that our project puts the user's needs first.`,
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

    refiningDesignData: [
      {
        type: "High fidelity design concepts-HEALTH SCENARIO",
        description: `
        Transitioning from a low-fidelity to a high-fidelity mockup allows for a more detailed representation of the final product, providing stakeholders with a clearer vision of the user experience. `,
        images: [
          {
            imagePath: refine1,
            description: "Mockups project 1",
          },
          {
            imagePath: refine2,
            description: "Mockups project 2",
          },
        ],
      },
      {
        type: "Wearable Interface Design -HEALTH SCENARIO",
        description: `The mockup of the watch interface ensures it works well on different devices. This makes sure that users have a similar and easy experience no matter what device they're using. `,
        images: [
          {
            imagePath: watch,
            description: "Mockups watch",
          },
        ],
      },
      {
        type: "High Fidelity Prototype -HEALTH SCENARIO",
        description: `The final high-fidelity prototype showcased user flows for an active pause suggested by Anchored. It creates an active pause based on the user's settings and concludes with an accomplishment summary.`,
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
