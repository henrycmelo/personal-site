import database1 from "../../images/database1.png";
import database2 from "../../images/database2.png";
import erdiagram from "../../images/erdiagram.png";
import erdiagramlogical from "../../images/erdiagramlogical.png";
import database3 from "../../images/database3.png";
import database4 from "../../images/database4.png";
import databasebanner from "../../images/databasebanner.png";


export const databaseDesignData = [
  {
    client:" Community Based Organization (CBO)",
    landingImage:databasebanner,
    projectTitle:{
      client:"Community Based Organization (CBO)",
      title:"A comprehensive Database for Analyzing Student performance in public school",
      role:"Database Designer",
      tools:"mysql workbench, mysql, lucidchart",
      dateInitial:"2023-02",
      dateFinal:"2023-05",
    },
    projectOverview: {
      description:
        `is a non-profit organization that operates at the local level and is typically focused on addressing the needs and concerns of a specific community or group of people.
        In the context of public schools, community-based organizations play a crucial role in supporting and supplementing educational initiatives. Here are some common activities and functions of community-based organizations in public schools:
        After-school programs, parental involvement, cultural and art programs, among others.`,
      challenge:
        ` This project aimed to overcome the current difficulties in managing a public school's student database, stored across multiple spreadsheets, 
          making it tedious to retrieve, edit, or update data accurately. The goal was to create an efficient and user-friendly solution 
          that enhances school operations and eliminates inconsistencies and errors.
        `,
      solution:
        "The proposed database provided a centralized platform for managing student information, attendance, class, and grades. To ensure the security of sensitive student information, the database used anonymized data.",
    },
    currentState: {
      images: [
        {
          imagePath: database1,
          description: "Database Current spreadsheet",
        },
    
      ],
    },
    analisisData: {
      type: "I am dealing with...",
      description: ``,
      data: [
        {
          icon: "",
          iconTitle: "",
          items: [
            "The student database is currently stored in multiple spreadsheets, resulting in inconsistencies and human errors.",
            "There is no version control, and stakeholders may not know if the spreadsheet is up to date.",
            "CBO staff has to filter information manually because there are many spreadsheets, and they are not connected at all",
            "Retrieving any required data from the spreadsheets can take hours",
      
          ],
        },
      ],
      images: [
        {
          imagePath: database2,
          description: "Database current spreadsheet 2",
        },
       
      ],
    },
    designData:[
      {
        type: "Normalization",
        description: `In this database design, I started normalizing the spreadsheet to separate the data into different tables based on their logical relationships.
             By eliminating repeating groups, such as the lateness and absence columns, and identifying the 
             appropriate keys, I was able to eliminate data redundancy and inconsistencies. 
             For example, the original spreadsheet has two columns, which are intervention list and 
             intervention list 1. I reduced them to only one table and added a rate of severity that would 
             be calculated based on attendance and/or lateness. 
        ` ,
        images: [
          {
            imagePath: erdiagram,
            description: "Conceptual model",
          },
         
        ],
      },
      {
        type: "Business rules",
        description: `These are some of business rules that the database must follow. The rules are used to create the database schema. A student can be enrolled in one to three classes, but each enrollment record must belong to one student.
        Many enrollment records can have to one class, but each enrollment can have to only one class
        Each class schedule is assigned to only one class, but each class have multiple class schedule. Among other rules.` ,
  
        images: [
          {
            imagePath: erdiagramlogical,
            description: "Logical model",
          },
         

        ],
      },
      {
        type: "Database implementation",
        description: `Creating the student database in MySQL Workbench. I created the tables, relationships, and constraints based on the logical model.` ,
        images: [
          {
            imagePath: database3,
            description: "Code snippet",
          },
          {
            imagePath: database4,
            description: "Reverse engineer ERD",
          },
          

        ],
      },
    ],
    goingForwardData: [
      {
        type: "If I had more time...",
        description: `I would focus on enhancing the user experience by developing a user-friendly web-based application that would allow users to query information without the need for SQL commands. This would improve the usability of the database and make it more accessible to users who may not have experience with SQL.`,
      },
      {
        type: "Alternatively...",
        description: `I would run testing sessions with users to teach them basic SQL commands and gather feedback on the database design. This would help to identify any areas that need improvement and provide valuable insights on how to make the database more user-friendly and effective for the end-users.`,
       
      },
    ],
    links:{
      dataset:"https://github.com/henrycastillome/databaseProject", 
      github:"https://henrycastillo.dev/projects"
    }
  },
];


