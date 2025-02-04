import { role } from "./role";
import { badges } from "./badges";


const projects = [
  {
    title: "From Metrics to Meaning: Digital Safety Impact Study",
    description:
      "Transformed basic workshop surveys into compelling human stories through UX research with immigrant families. Uncovered critical insights that secured grant funding and enhanced digital safety education for underserved communities.",
    getImageSrc: () => require("../assets/ciana_research/uicardciana.png"),
    getLogosSrc: () => [
      require("../assets/ciana_research/cecLogo.png"),
      require("../assets/ciana_research/cianaLogo.png"),
    ],
    keywords:['Research Planning', 'User Interviews', "Synthesis Methods", "Data Analysis"],
    path: "/cianaresearch",
    type:'UX Research / Design Strategy'

  
    
  },
    {
      title: "Optimizing Donation Experience through research & usability testing",
      description:
        "Redesigned the donation journey for the Smithsonian Archives of American Art, enhancing information architecture and user flows. Led end-to-end design process that improved donor engagement for America's largest visual arts archive.",
        getImageSrc: () => require("../assets/archives/uicardaaa.png"),
        getLogosSrc: () => [
          require("../assets/archives/AAAlogo2.png"),
          require("../assets/archives/AAAlogo.png"),
          require("../assets/archives/dxcenterlogo_color.png"),
        ],
        keywords:['User Research', 'Heuristic Evaluation', "Information Architecture", "Competitive Analysis", "Testing + Iteration"],
        path: "/cianaresearch",
        type:'Usability testing / Visual design '
    
      
    },
    {
      title: "SteakHouse App",
      description:
        "Designing a food app ordering system.",
        getImageSrc: () => require("../images/AAAAAAA1.png"),
        getLogosSrc: () => [
          require("../assets/ciana_research/cecLogo.png"),
          require("../assets/ciana_research/cianaLogo.png"),
        ],
        keywords:['Research Planning', 'User Interviews', "Synthesis Methods", "Data Analysis"],
        path: "/cianaresearch",
    },
    // {
    //   title: "Generative AI App",
    //   description:
    //     "Using AI to help with daily routines.", 
    //   getImageSrc: () => require("../assets/ciana_research/cianaWorkshop.png"),
    //   role:[role["Product Designer"]],
    //   date: "2023-12",
    //   tools: [badges["figma"], badges["miroboard"], badges["zoom"]],
    //   path:"/anchoredai",
    //   featured: true,
    //   hide:false,
    // },
    
    
  ];
  

  export default projects;