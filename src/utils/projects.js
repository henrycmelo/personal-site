import { role } from "./role";
import { badges } from "./badges";


const projects = [
  {
    title: "Ciana",
    description:
      "Improving usability to increase donations.",
    getImageSrc: () => require("../assets/ciana_research/cianaWorkshop.png"),
    role:[role["UX Researcher"], role["UI/UX Designer"]],
    date: "2022-12",
    tools: [badges["figma"], badges["miroboard"], badges["zoom"]],
    path: "/cianaresearch",
    featured: true,
    hide:false
  
    
  },
    {
      title: "Archives of American Art",
      description:
        "Improving usability to increase donations.",
      getImageSrc: () => require("../assets/ciana_research/cianaWorkshop.png"),
      role:[role["UX Researcher"], role["UI/UX Designer"]],
      date: "2022-12",
      tools: [badges["figma"], badges["miroboard"], badges["zoom"]],
      path: "/casestudyarchives",
      featured: true,
      hide:false
    
      
    },
    {
      title: "SteakHouse App",
      description:
        "Designing a food app ordering system.",
      getImageSrc: () => require("../assets/ciana_research/cianaWorkshop.png"),
      role:[role["Product Designer"]],
      date: "2022-07",
      tools: [badges["figma"], badges["miroboard"], badges["zoom"]],
      path:"/steakhouse",
      featured: true,
      hide:false
    },
    {
      title: "Generative AI App",
      description:
        "Using AI to help with daily routines.", 
      getImageSrc: () => require("../assets/ciana_research/cianaWorkshop.png"),
      role:[role["Product Designer"]],
      date: "2023-12",
      tools: [badges["figma"], badges["miroboard"], badges["zoom"]],
      path:"/anchoredai",
      featured: true,
      hide:false,
    },
    
    
  ];
  

  export default projects;