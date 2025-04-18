


const projects = [
  {
    title: "Designing for Busy People: Transforming Manual Booking into a Digital Experience",
    description:
      "Founded and led UX/UI design for 40minutes, a fitness marketplace app that transformed a tedious 30-minute+ booking process into an instant digital experience. This innovation facilitated over 37,440 training sessions and generated $258K in annual revenue.",
    getImageSrc: () => require("../assets/40minutes/uicard.png"),
    getLogosSrc: () => [
      require("../assets/40minutes/Asset 3LOGO (1).png")
    ],
    keywords: ['UX/UI Design', 'User Research', 'Process Optimization', 'Booking Systems', 'Mobile App'],
    path: "/projects/fortyminutes",
    type: 'Product Design / Fitness App'
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
        keywords:['User Research', 'Heuristic Evaluation', "Information Architecture", "Competitive Analysis", "user Testing"],
        path: "/projects/aaa",
        type:'Usability testing / Visual design '
    
      
    },
  {
    title: "Elevating Restaurant Online Order Experience with mobile App",
    description:
      "Led the end-to-end redesign of a steakhouse's digital ordering experience, transforming traditional dining into an intuitive mobile platform that eliminates third-party dependencies while maintaining the premium brand experience.",
      getImageSrc: () => require("../assets/steakhouse/uicardstakhouse.png"),
      getLogosSrc: () => [
        require("../assets/steakhouse/metropolitan-grill-high-resolution-logo-grayscale-transparent.png"),
        require("../assets/archives/dxcenterlogo_color.png"),
      ],
      keywords:['UX/UI Design', 'User Research', 'Wireframing', "Design Systems", "Prototyping", "User Testing"],
      path: "/projects/steakhouse",
      type:'Product Design / Mobile UX'
    },
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
    path: "/projects/cianaresearch",
    type:'UX Research / Design Strategy'

  
    
  }
    
  ];
  

  export default projects;