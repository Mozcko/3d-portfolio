import { color } from "framer-motion";
import {
  alojamiento,
  hacker,
  seguridad,
  terminal,
  javascript,
  html,
  css,
  reactjs,
  django,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  bootstrap,
  c_sharp,
  linux,
  python,
  sql_server,
  dhl,
  portfolio,
  proyectofinal,
  sortingapp,
  taskapp,
  CCNAv7_1,
  CCNAv7_2,
  CCNAv7_3,
  power_automate,
  python_beginners,
  python_intermediate,
  python_core,
  python_structures,
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
    name: "Python",
    icon: python,
  },
  {
    name: "C-Sharp",
    icon: c_sharp,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python Django",
    icon: django,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQLServer",
    icon: sql_server,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "Linux",
    icon: linux,
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
    school:"Cisco",
    image:CCNAv7_1,
    link:"https://www.credly.com/badges/b4ff92d2-c40e-47cd-8f6f-01daa3fdc12f",
  },
  {
    title:"CCNAv7: Switching, Routing, and Wireless Essentials",
    school:"Cisco",
    image:CCNAv7_2,
    link:"https://www.credly.com/badges/37cf40dd-ed47-406e-909a-d22784816d8c",
  },
  {
    title:"CCNAv7: Enterprise Networking, Security, and Automation",
    school:"Cisco",
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

const projects = [
  {
    name: "This Portfolio",
    description:
      "My web portfolio where I upload all my new projects and where I share my experiences that I have obtained throughout the years",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Mozcko/3d-portfolio",
    web_link: "https://joaquinramos.dev",
  },
  {
    name: "Sorting app",
    description:
      "An app that may seem simple but is actually very useful, it is used to organize all the files in the folder that you choose and it works on any operating system",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "python Pillow",
        color: "green-text-gradient",
      },
      {
        name: "Cli",
        color: "pink-text-gradient",
      },
    ],
    image: sortingapp,
    source_code_link: "https://github.com/Mozcko/sorting_app/",
  },
  {
    name: "TenCloy Final Project",
    description:
      "My final information architecture project where I learned the basics of web development and the use of technologies such as Bootstrap, PHP, javaScript, among others.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: proyectofinal,
    source_code_link: "https://github.com/Mozcko/proyecto-final-Aw",
    web_link:"https://monism-schoolroom.000webhostapp.com",
  },
  {
    name: "Django React Task App",
    description: "A simple task app created with react and django to understand the basics of front-end and back-end development.",
    tags: [
      {
        name: "python django",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: taskapp,
    source_code_link: "https://github.com/Mozcko/django-react",
    web_link:"https://taskapp.up.railway.app",
  },
];

export { services, technologies, experiences, certificates, projects };
