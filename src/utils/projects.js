import { role } from "./role";
import { badges } from "./badges";


const projects = [
    {
      title: "Online Learning Platform",
      description:
        "Creating a Django App for online classes. ",
      getImageSrc: () => require("../images/python.png"),
      path: "/djangopage",
      role:[role["Full Stack Developer"]],
      date: "2023-02",
      tools: [badges["python"], badges["django"], badges["html"], badges["css"], badges["bootstrap"], badges["amazonaws"], badges["heroku"]],
      id:'djangoimage',
      featured:false,
      hide:true,
     
    },
    {
      title: "Personal Website",
      description:
        "Building a React JS web app.",
      getImageSrc: () => require("../images/react.png"),
      role:[role["UX Engineer"], role["Frontend Developer"]],
      date: "2023-03",
      tools: [badges["react"], badges["chakraui"], badges["html"], badges["css"], badges["javascript"], badges["netlify"]],
      path: '/mypersonalsite',
      featured: false,
      hide:true,
      
    },
    {
      title: "Archives of American Art",
      description:
        "Improving usability to increase donations.",
      getImageSrc: () => require("../images/aaa.png"),
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
      getImageSrc: () => require("../images/steakhouseHP.png"),
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
      getImageSrc: () => require("../images/anchoredHP.png"),
      role:[role["Product Designer"]],
      date: "2023-12",
      tools: [badges["figma"], badges["miroboard"], badges["zoom"]],
      path:"/anchoredai",
      featured: true,
      hide:false,
    },
    {
      title:
        "Data Analysis",
      description:
        "Exploring NYC restaurant violation dataset.",
      getImageSrc: () => require("../images/dashHP.png"),
      role:[role["Data Analyst"], role['Python Developer']],
      tools: [badges["python"], badges["pandas"], badges["plotly"]],
      date: "2022-12",
      path: "/dash",
      id: "dash",
      featured:false,
      hide:true,
    },
    {
      title:
        "Wine Quality Predictor",
      description:
        "Applying Machine Learning to predict quality.  ",
      getImageSrc: () => require("../images/mlcard.png"),
      tools: [badges["python"], badges["jupyter"], badges["pandas"], badges["numpy"], badges["scikit"], badges["seaborn"], badges["matplotlib"]],
      role:[role["Machine Learning Engineer"]],
      date: "2023-10",
      path: "/machinelearning",
      id: "machinelearning",
      featured: false,
      hide:true,
    },
    {
      title:
        "Public School Database",
      description:
        "Normalizing database, from excel to sql. ",
      getImageSrc: () => require("../images/databasecard.png"),
      tools: [badges["workbench"], badges["sql"], badges["lucidchart"]],
      role:[role["Database Designer"]],
      date: "2023-05",
      path: "/databasedesign",
      id: "databasedesign",
      featured: false,
      hide:true,
    },
  ];
  

  export default projects;