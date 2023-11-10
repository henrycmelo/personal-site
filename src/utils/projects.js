import { role } from "./role";
import { badges } from "./badges";


const projects = [
    {
      title: "Building an online learning platform w/ DJANGO",
      description:
        "Developed using Python/HTML/Bootstrap, a platform where instructors can create their online courses and its exams.",
      getImageSrc: () => require("../images/python.png"),
      path: "/djangopage",
      role:[role["Full Stack Developer"]],
      date: "2023-02",
      tools: [badges["python"], badges["django"], badges["html"], badges["css"], badges["bootstrap"], badges["amazonaws"], badges["heroku"]],
      id:'djangoimage',
      featured:false,
     
    },
    {
      title: "Building a dynamic web app with React, Chakra and Formik",
      description:
        "My personal website feature the combination of these libraries allowed for the creation of an interactive and sleek user interface with efficient form management.",
      getImageSrc: () => require("../images/react.png"),
      role:[role["UX Engineer"], role["Frontend Developer"]],
      date: "2023-03",
      tools: [badges["react"], badges["chakraui"], badges["html"], badges["css"], badges["javascript"], badges["netlify"]],
      path: '/mypersonalsite',
      featured: true,
      
    },
    {
      title: "Enhancing user experience for better donations on support page",
      description:
        "Conducted a usability testing project on the Archives of American Art donation page, providing recommendations to improve its functionality, navigation, and search capabilities.",
      getImageSrc: () => require("../images/aaa.png"),
      role:[role["UX Researcher"], role["UI/UX Designer"]],
      date: "2022-12",
      tools: [badges["figma"], badges["miroboard"], badges["zoom"]],
      path: "/casestudyarchives",
      featured: false,
      
    },
    {
      title: "Designing a food menu app for a steakhouse",
      description:
        "Designed and conducted UX research for a user-friendly menu app for a popular steakhouse. Created intuitive UI to enhance the user experience and enable easy navigation.",
      getImageSrc: () => require("../images/steakhouseHP.png"),
      role:[role["Product Designer"]],
      date: "2022-07",
      tools: [badges["figma"], badges["miroboard"], badges["zoom"]],
      path:"/steakhouse",
      featured: true
    },
    {
      title:
        "Exploring Restaurant Violations in NYC ",
      description:
        "This project explores and visualize restaurant violations in New York City using the dataset from the Department of Health and Mental Hygiene.",
      getImageSrc: () => require("../images/dashHP.png"),
      role:[role["Data Analyst"], role['Python Developer']],
      tools: [badges["python"], badges["pandas"], badges["plotly"]],
      date: "2022-12",
      path: "/dash",
      id: "dash",
      featured:false,
    },
    {
      title:
        "Machine Learning Project",
      description:
        "Wine quality prediction using Machine Learning. Creating pipelines, hyperparameter tuning, and model evaluation. ",
      getImageSrc: () => require("../images/mlcard.png"),
      tools: [badges["python"], badges["jupyter"], badges["pandas"], badges["numpy"], badges["scikit"], badges["seaborn"], badges["matplotlib"]],
      role:[role["Machine Learning Engineer"]],
      date: "2023-10",
      path: "/machinelearning",
      id: "machinelearning",
      featured: true,
    },
    {
      title:
        "A comprehensive Database for Analyzing Student performance in public school",
      description:
        "Designed and developed a database for a public school to analyze student performance. ",
      getImageSrc: () => require("../images/databasecard.png"),
      tools: [badges["workbench"], badges["sql"], badges["lucidchart"]],
      role:[role["Database Designer"]],
      date: "2023-05",
      path: "/databasedesign",
      id: "databasedesign",
      featured: true,
    },
  ];
  

  export default projects;