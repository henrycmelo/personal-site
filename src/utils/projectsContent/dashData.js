import projectimage from "../../images/dashpp.png";
import choropletSnippet from "../../images/choropletSnippet.png";
import dropdownSnippet from "../../images/dropdownSnippet.png";
import styledashSnippet from "../../images/styledashSnippet.png";


export const dashData = [
  {
    client:"Analyzing NYC Restaurant Violations with Python, Plotly, and Dash",
    landingImage:projectimage,
    projectTitle:{
      client:"Analyzing NYC Restaurant Violations with Python, Plotly, and Dash",
      title:"Examining NYC restaurant violations with Python, Plotly, and Dash using Health Department data.",
      role:"Data Analyst & Python Developer",
      tools:"Python, Pandas, Plotly, Dash, HTML5, Bootstrap",
      date:"Sep-Dec 2022",
      dateInitial:"2022-09",
      dateFinal:"2022-12",
    },
    projectOverview: {
      description:
      `This interactive site offers easy exploration and visualization of NYC restaurant violations. Users can access five visualization types, search for specific restaurants, and view violations in a table format, empowering them to make informed dining choices.`,
      challenge:
      `This project involved collecting NYC restaurant violations data, cleaning it with Python and Pandas, and overcoming challenges in quantifying descriptive data for plots. Using Plotly, five visualizations were created, and a search bar feature was added with Dash. After testing and debugging, the site was deployed for user access, with documentation and collaboration ensuring maintainability and scalability.`,
      features:[
                  "Interactive visualizations and search bar",
                  "User-friendly interface",
                  "Data processing and scalability",
                  "With a modern, visually appealing dark mode design, this project offers an intuitive layout and a user-friendly experience, reducing eye strain while exploring restaurant violations data.",
              
              ]
  },
    designData:[
      {
        type: "Plotting Functions ",
        description: `The project uses Plotly to create interactive visualizations. The visualizations are interactive, allowing users to hover over the data points to see more information.` ,
        images: [
          {
            imagePath: choropletSnippet,
            description: "Choroplet map",
          }
        ],
      },
      {
        type: "Dropdown Menu on Dash",
        description: `The project uses Dash to create a dropdown menu. The dropdown menu allows users to select a specific visualization and view restaurant violations.` ,
        images: [
          {
            imagePath: dropdownSnippet,
            description: "Dropdown menu code snippet",
          },
         

        ],
      },
      {
        type: "Input Box on Dash",
        description: `The project uses Dash to create an input box for search. The search bar allows users to search for a specific restaurant and see what problems the restaurant has.` ,
        images: [
          {
            imagePath: styledashSnippet,
            description: "login code snippet",
          },
          

        ],
      },
    ],
    links:{
      live:"http://henrycastillome.pythonanywhere.com/",
      github:"https://github.com/henrycastillome/PFCH"
    }
  },
];


