import projectImage from "../../images/django1.png"
import djangoModels from "../../images/djangoModels.png";
import registrationDjango from "../../images/registrationDjango.png";
import loginDjango from "../../images/loginDjango.png";


export const djangoPageData = [
  {
    client:"Building an online learning platform w/ DJANGO",
    landingImage:projectImage,
    projectTitle:{
        client:"Building a dynamic web app with React, Chakra and Formik",
        title:'Using Python, HTML, and Bootstrap, this platform streamlines online course and exam creation for instructors.',
        role:'Full-stack developer',
        tools:"Python, Django, Bootstrap, HTML5, AWS S3 bucket, Heroku",
        dateInitial:"2022-12",
        dateFinal:"2023-02"
    },
    projectOverview: {
      description:
      `This is an online course platform built with Django and Bootstrap. It allows students to enroll in courses, instructors to set up their courses, lessons, and exams, and administrators to manage the platform. The project uses AWS S3 bucket for storage and is deployed on Heroku.`,
      challenge:
      `During the development process, my most significant challenge was integrating AWS S3 bucket with Heroku for storage, as well as retrieving uploaded images from the admin panel. To overcome these challenges, I thoroughly examined the documentation for both AWS S3 and Heroku, employing a trial-and-error approach to pinpoint the optimal configurations.`,
      features:[
                  "Student enrollment and real-time updates on enrolled students",
                  "User authentication and exam functionality for students and instructors",
                  "Comprehensive course creation and management for instructors",
                  "The ability to upload images and files to AWS S3 bucket",
                  "User management for administrators",
                  "Modern user interface with Bootstrap"
              ]
  },
    designData:[
      {
        type: "Django Models",
        description: `The project uses Django models to create the database and manage the data. The models are used to create the courses, lessons, exams, and users.` ,
        images: [
          {
            imagePath: djangoModels,
            description: "Course model",
          }
        ],
      },
      {
        type: "Django Registration view",
        description: `The project uses Django registration view to manage user authentication. The registration view allows users to sign up, log in, and log out.` ,
        images: [
          {
            imagePath: registrationDjango,
            description: "registration view",
          },
         

        ],
      },
      {
        type: "User Login",
        description: `The project uses bootstrap to create a modern user interface. The login page uses bootstrap to create a responsive design.` ,
        images: [
          {
            imagePath: loginDjango,
            description: "login code snippet",
          },
          

        ],
      },
    ],
    links:{
      live:"https://onlinecoursedjango.herokuapp.com/onlinecourseapp/",
      github:"https://github.com/henrycastillome/onlinecoursedjangoapp/"
    }
  },
];


