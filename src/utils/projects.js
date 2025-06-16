


const projects = [
  {
    title: "Improving Capsule's Delivery Efficiency: A UX Critique of Third-Party Dependencies",
    description:
      "Conducted field research to identify inefficiencies for the delivery service and the UX opportunities to reduce failed deliveries by 50-70% through simple delivery confirmation interventions.",
    getImageSrc: () => require("../assets/capsule/capsuleui.png"),
    getLogosSrc: () => [
      require("../assets/capsule/capsulelogo.png"),
    ],
    keywords:['Field Research', 'Delivery Systems', "UX Strategy", "Process Optimization", "User Experience"],
    path: "/projects/capsule",
    type:'Field Study / Operational Analysis'

  
    
  },
  {
    title: "From Metrics to Impact: Digital Safety for Immigrant Families",
    description:
      "Created interactive data dashboards that secured $150K in funding and improved program participation by 40%. Made digital services accessible to non-English speaking families.",
    getImageSrc: () => require("../assets/ciana_research/uicardciana.png"),
    getLogosSrc: () => [
      require("../assets/ciana_research/cecLogo.png"),
      require("../assets/ciana_research/cianaLogo.png"),
    ],
    keywords:['Research Planning', 'User Interviews', "Synthesis Methods", "Data Analysis"],
    path: "/projects/cianaresearch",
    type:'UX Research / Design Strategy'

  
    
  },
  {
    title: "From Manual Operations to $258K Revenue: Logistics Optimization",
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
        keywords:['User Research', 'Heuristic Evaluation', "Information Architecture", "Competitive Analysis"],
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
    }
    
  ];
  

  export default projects;