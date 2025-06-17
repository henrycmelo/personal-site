


const projects = [
  {
    title: "Improving Capsule's Delivery Efficiency",
    description:
      "Conducted field research to identify inefficiencies for the delivery service and the UX opportunities to reduce failed deliveries by 50-70% through simple delivery confirmation interventions.",
    getImageSrc: () => require("../assets/capsule/capsuleui.png"),
    getLogosSrc: () => [
      require("../assets/capsule/capsulelogo.png"),
    ],
    keywords:['Field Research', 'Healthcare Delivery', "UX Strategy", "Process Optimization", "User Experience"],
    path: "/projects/capsule",
    type:'Field Research / Healthcare UX'

  
    
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
    keywords:['Research Planning', 'User Interviews', "Data Visualization", "Accessibility Design"],
    path: "/projects/cianaresearch",
    type:'UX Research / Social Impact'

  
    
  },
  {
    title: "From Manual Operations To $258K Revenue: Payment & Booking",
    description:
      "Founded and led UX/UI design for 40minutes, a fitness marketplace app that transformed a tedious 30-minute+ booking and payment process into an instant digital experience.",
    getImageSrc: () => require("../assets/40minutes/uicard.png"),
    getLogosSrc: () => [
      require("../assets/40minutes/Asset 3LOGO (1).png")
    ],
    keywords: ['Payment Systems', 'Financial UX', 'Process Optimization', 'Booking Systems', 'Mobile Transactions'],
    path: "/projects/fortyminutes",
    type: 'Product Design / Fintech'
},

    {
      title: "Optimizing Donation Experience through research & usability testing",
      description:
        "Redesigned the donation journey for the Smithsonian Archives of American Art, enhancing information architecture and user flows. ",
        getImageSrc: () => require("../assets/archives/uicardaaa.png"),
        getLogosSrc: () => [
          require("../assets/archives/AAAlogo2.png"),
          require("../assets/archives/AAAlogo.png"),
          require("../assets/archives/dxcenterlogo_color.png"),
        ],
        keywords:['User Research', 'Financial Workflows', "Information Architecture", "Donation Systems"],
        path: "/projects/aaa",
        type:'Usability testing / Donation Experience '
    
      
    },
  {
    title: "Elevating Restaurant Online Order Experience with mobile App",
    description:
      "Led the end-to-end redesign of a steakhouse's digital ordering experience, transforming traditional dining into an intuitive mobile platform that eliminates third-party dependencies.",
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