  import reactpagepicture from "../../images/reactpagepicturefour.png";
  import styleSnippet from "../../images/styleSnippet.png";
  import smoothScrolling from "../../images/smoothScroll.png";
  import testingSnippet from "../../images/testingSnippet.png";
  
  
  
  export const myPersonalSiteData = [
    {
      client: "Building a dynamic web app with React, Chakra and Formik",
      landingImage:reactpagepicture,
      projectTitle:{
        client:"Building a dynamic web app with React, Chakra and Formik",
        title:"Personal website showcasing my work and projects",
        role:"Creator and developer",
        tools:"React Js, Chakra UI, Formik, and Netlify.",
        dateInitial:"2023-01",
        dateFinal:"2023-03"
      },
      projectOverview: {
        description:
        `This website is a platform for me to showcase my work and projects. It is built using React, a popular JavaScript library for building user interfaces, and Chakra UI, a component library for building accessible and responsive web applications. The website also uses Formik for form management and Netlify for deployment.`,
        challenge:
        "I started developing my portfolio by creating wireframes and user flows using Figma. This helped me establish the website's layout and plan for the user experience. Then, I used React, Chakra, and Formik to build out the website's features, starting with core components and adding more complex ones. I also integrated testing and debugging throughout the process to ensure a high-quality end product, including testing on different devices and using automated testing tools like Jest and React Testing Library.",
        features:[
                    "A responsive design that works on all devices",
                    "A hamburger menu for mobile devices",
                    "A smooth scrolling experience",
                    "A contact form with validation powered by Formik",
                    "A Dark and light mode",
                ]
    },
      designData:[
        {
          type: "Style",
          description: `The website was designed with a minimalist aesthetic in mind, with a focus on clean lines and a simple color scheme with a dark and light mode. The layout is designed to be responsive, with a mobile-first approach that ensures the website looks great on any device. The typography and overall design were carefully chosen to reflect my personal style and brand.` ,
          images: [
            {
              imagePath: styleSnippet,
              description: "Style",
            }
          ],
        },
        {
          type: "Smooth Scrolling",
          description: `The website uses smooth scrolling to create a seamless experience for users.` ,
          images: [
            {
              imagePath: smoothScrolling,
              description: "Smooth scrolling feature",
            },
           
  
          ],
        },
        {
          type: "Testing",
          description: `The website was tested on different devices and browsers to ensure a high-quality end product. Automated testing tools like Jest and React Testing Library were also used to test the website's functionality.` ,
          images: [
            {
              imagePath: testingSnippet,
              description: "Testing snippet",
            },
            
  
          ],
        },
      ],
      links:{
        live:"https://henrycastillo.dev/",
        github:"https://github.com/henrycastillome/personal-site"
      }
    },
  ];
  
  
  