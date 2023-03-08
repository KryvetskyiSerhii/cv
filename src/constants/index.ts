import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  threejs,
  daRunFa,
  remondis,
  finest,
  materialui,
  styledComponent,
  reactNative,
  java,
  jest,
} from "../assets";

export const NAVLINKS = [
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

const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Team player",
    icon: creator,
  },
];

const TECHNOLOGIES = [
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
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "Styled Components",
    icon: styledComponent,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "Jest",
  //   icon: jest,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const EXPERIENCE = [
  {
    title: "Web Developer",
    company_name: "Finest AG",
    icon: finest,
    iconBg: "#383E56",
    date: "Apr 2022 - present",
    points: [
      "Developing searching engine using React.js, TypeScript, Redux and other related technologies.",
      "Developing searching engine mobile app using React Native, TypeScript, Redux and other related technologies",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create the high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Full-stack Developer",
    company_name: "Remondis",
    icon: remondis,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Developing a decluttering web application to handle decluttering process using React.js, TypeScript, Redux, Node.js, PostgreSQL and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "React.js Developer",
    company_name: "DaRunFa",
    icon: daRunFa,
    iconBg: "#383E56",
    date: "April 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js, React Native, TypeScript, Redux and other related technologies",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

export { SERVICES, TECHNOLOGIES, EXPERIENCE };
