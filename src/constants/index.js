import {
  alojamiento,
  hacker,
  seguridad,
  terminal,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  dhl,
  carrent,
  jobit,
  tripguide,
  CCNAv7_1,
  CCNAv7_2,
  CCNAv7_3,
  power_automate,
  python_beginners,
  python_intermediate,
  python_core,
  python_structures,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Development",
    icon: hacker,
  },
  {
    title: "Cloud Computing",
    icon: alojamiento,
  },
  {
    title: "Systems Administration",
    icon: terminal,
  },
  {
    title: "CyberSecurity",
    icon: seguridad,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Automation Intern",
    company_name: "DHL Supply Chain Mexico",
    icon: dhl,
    iconBg: "#ffffff",
    date: "August 2022 - present",
    points: [
      "Developing an maintaining RPA's using MS Power Automate and UIPath",
      "Follow-up of innovation projects at the regional level (Mexico)",
      "Creation of new solutions for updating projects",
    ],
  },
];

const certificates = [
  {
    title:"CCNAv7: Introduction to Networks",
    school:"CISCO",
    image:CCNAv7_1,
    link:"https://www.credly.com/badges/b4ff92d2-c40e-47cd-8f6f-01daa3fdc12f",
  },
  {
    title:"CCNAv7: Switching, Routing, and Wireless Essentials",
    school:"CISCO",
    image:CCNAv7_2,
    link:"https://www.credly.com/badges/37cf40dd-ed47-406e-909a-d22784816d8c",
  },
  {
    title:"CCNAv7: Enterprise Networking, Security, and Automation",
    school:"CISCO",
    image:CCNAv7_3,
    link:"",
  },
  {
    title:"Power Automate - Curso completo de Microsoft Power Automate",
    school:"Udemy",
    image:power_automate,
    link:"https://www.udemy.com/certificate/UC-71fc7193-8d40-4f5c-9db4-ebbefc025709/",
  },
  {
    title:"Python for Beginners",
    school:"SoloLearn",
    image:python_beginners,
    link:"https://www.sololearn.com/certificates/CT-S0WOHS0Y",
  },
  {
    title:"Python Intermediate",
    school:"SoloLearn",
    image:python_intermediate,
    link:"https://www.sololearn.com/certificates/CT-SJO2KJY9",
  },
  {
    title:"Python Core",
    school:"SoloLearn",
    image:python_core,
    link:"https://www.sololearn.com/certificates/CT-GEQG85HN",
  },
  {
    title:"Python Data Structures",
    school:"SoloLearn",
    image:python_structures,
    link:"https://www.sololearn.com/certificates/CT-1H33ZTNM",
  },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, certificates, projects };
