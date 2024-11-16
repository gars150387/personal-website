import { Button, Space, Tag } from "antd";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import image2 from "../assets/adminPics/Screenshot 2024-10-20 001113.png";
import image3 from "../assets/adminPics/Screenshot 2024-10-20 001452.png";
import image4 from "../assets/adminPics/Screenshot 2024-10-20 001622.png";
import image5 from "../assets/adminPics/Screenshot 2024-10-20 001732.png";
import image6 from "../assets/adminPics/Screenshot 2024-10-20 001905.png";
import image7 from "../assets/adminPics/Screenshot 2024-10-20 002112.png";
import image8 from "../assets/adminPics/Screenshot 2024-10-20 002215.png";
import image9 from "../assets/adminPics/Screenshot 2024-10-20 002323.png";
import image10 from "../assets/adminPics/Screenshot 2024-10-20 002424.png";
import image1 from "../assets/adminPics/Screenshot 2024-10-20 002550.png";
import Card from "./Card";
import ViteIcon from "../components/icons/ViteIcon";
import ReactIcon from "../components/icons/ReactIcon";
import NodeIcon from "../components/icons/NodeIcon";
import PlanetScaleIcon from "../components/icons/PlanetScaleIcon";
import MongoDBIcon from "../components/icons/MongoDBIcon";
import AWSIcon from "../components/icons/AWSIcon";
import StripeIcon from "../components/icons/StripeIcon";
import MaterialUIIcon from "../components/icons/MaterialUIIcon";
import ReduxToolkitIcon from "../components/icons/ReduxIcon";
import HTML5Icon from "../components/icons/HTMLIcon";
import CSS3Icon from "../components/icons/CSSIcon";
import JavaScriptIcon from "../components/icons/JavaScriptIcon";
import NPMIcon from "../components/icons/NPMIcon";
import PM2Icon from "../components/icons/PM2Icon";
import PostmanIcon from "../components/icons/PostmanIcon";
import ReactRouterIcon from "../components/icons/ReactRouterIcon";
import ReactQueryIcon from "../components/icons/ReactQueryIcon";
import TailwindIcon from "../components/icons/TailwindCssIcon";
import TwilioIcon from "../components/icons/TwilioIcon";
import VisualStudioCodeIcon from "../components/icons/VisualStudioCodeIcon";
import MySQLIcon from "../components/icons/MySQLIcon";
import JWTIcon from "../components/icons/JWTIcon";
const svgs = {
  vite: ViteIcon,
  react: ReactIcon,
  node: NodeIcon,
  planetscale: PlanetScaleIcon,
  mongodb: MongoDBIcon,
  aws: AWSIcon,
  stripe: StripeIcon,
  materialUI: MaterialUIIcon,
  reduxToolkit: ReduxToolkitIcon,
  html5: HTML5Icon,
  css3: CSS3Icon,
  javascript: JavaScriptIcon,
  npm: NPMIcon,
  pm2: PM2Icon,
  postman: PostmanIcon,
  reactRouter: ReactRouterIcon,
  reactQuery: ReactQueryIcon,
  tailwind: TailwindIcon,
  twilio: TwilioIcon,
  vscode: VisualStudioCodeIcon,
  mysql: MySQLIcon,
  jwt: JWTIcon,
};
const projects = [
  {
    title: "Devitrak - Admin Dashboard App",
    description: `Devitrak is an application designed to improve administrative and tracking processes for businesses and organizations...`,
    stack: [
      { name: "Vite.js", icon: svgs.vite },
      { name: "React.js", icon: svgs.react },
      { name: "Node.js", icon: svgs.node },
      { name: "PlanetScale", icon: svgs.planetscale },
      { name: "MongoDB", icon: svgs.mongodb },
      { name: "AWS Web Services", icon: svgs.aws },
      { name: "Stripe", icon: svgs.stripe },
      { name: "Material UI", icon: svgs.materialUI },
      { name: "Redux/Toolkit", icon: svgs.reduxToolkit },
      { name: "HTML5", icon: svgs.html5 },
      { name: "CSS3", icon: svgs.css3 },
      { name: "JavaScript", icon: svgs.javascript },
    ],
    cover: "",
    roll: [
      { image: image1, title: image1 },
      { image: image2, title: image2 },
      { image: image3, title: image3 },
      { image: image4, title: image4 },
      { image: image5, title: image5 },
      { image: image6, title: image6 },
      { image: image7, title: image7 },
      { image: image8, title: image8 },
      { image: image9, title: image9 },
      { image: image10, title: image10 },
      // Add other images as needed
    ],
    live: "https://admin.devitrak.net/",
    background: "#1B2F33",
  },
  {
    title: "Devitrak - Consumer App",
    description: `Devitrak is a versatile application built to optimize tracking and management processes for organizations...`,
    stack: [
      { name: "Vite.js", icon: svgs.vite },
      { name: "React.js", icon: svgs.react },
      { name: "Node.js", icon: svgs.node },
      { name: "PlanetScale", icon: svgs.planetscale },
      { name: "MongoDB", icon: svgs.mongodb },
      { name: "Axios", icon: svgs.axios },
      { name: "AWS Web Services", icon: svgs.aws },
      { name: "Stripe", icon: svgs.stripe },
      { name: "Material UI", icon: svgs.materialUI },
      { name: "Redux/Toolkit", icon: svgs.reduxToolkit },
      { name: "HTML5", icon: svgs.html5 },
      { name: "CSS3", icon: svgs.css3 },
      { name: "JavaScript", icon: svgs.javascript },
    ],
    cover: "",
    roll: [
      { image: image1, title: image1 },
      { image: image2, title: image2 },
      { image: image3, title: image3 },
      { image: image4, title: image4 },
      { image: image5, title: image5 },
      { image: image6, title: image6 },
      { image: image7, title: image7 },
      { image: image8, title: image8 },
      { image: image9, title: image9 },
      { image: image10, title: image10 },
    ],
    live: "https://app.devitrak.net/",
    background: "#243e44",
  },
  {
    title: "YennyOnTrend",
    description: `YennY On Trend is an innovative app designed to keep users updated with the latest trends in fashion, lifestyle, and more...`,
    stack: [
      { name: "Vite.js", icon: svgs.vite },
      { name: "React.js", icon: svgs.react },
      { name: "Node.js", icon: svgs.node },
      { name: "Firebase", icon: svgs.firebase },
      { name: "Axios", icon: svgs.axios },
      { name: "AWS Web Services", icon: svgs.aws },
      { name: "Stripe", icon: svgs.stripe },
      { name: "Material UI", icon: svgs.materialUI },
      { name: "Redux/Toolkit", icon: svgs.reduxToolkit },
      { name: "HTML5", icon: svgs.html5 },
      { name: "CSS3", icon: svgs.css3 },
      { name: "JavaScript", icon: svgs.javascript },
    ],
    cover: "",
    roll: [
      { image: image1, title: image1 },
      { image: image2, title: image2 },
      { image: image3, title: image3 },
      { image: image4, title: image4 },
      { image: image5, title: image5 },
      { image: image6, title: image6 },
      { image: image7, title: image7 },
      { image: image8, title: image8 },
      { image: image9, title: image9 },
      { image: image10, title: image10 },
    ],
    live: "https://yennyontrend.com/",
    background: "#2d4e54",
  },
  {
    title: "ManagerApp",
    description: `Gars Solutions offers a modern and reliable approach to web development, tailored specifically for businesses seeking...`,
    stack: [
      { name: "Vite.js", icon: svgs.vite },
      { name: "React.js", icon: svgs.react },
      { name: "Node.js", icon: svgs.node },
      { name: "Supabase", icon: svgs.supabase },
      { name: "Axios", icon: svgs.axios },
      { name: "Redux/Toolkit", icon: svgs.reduxToolkit },
      { name: "HTML5", icon: svgs.html5 },
      { name: "CSS3", icon: svgs.css3 },
      { name: "JavaScript", icon: svgs.javascript },
    ],
    cover: "",
    roll: [
      { image: image1, title: image1 },
      { image: image2, title: image2 },
      { image: image3, title: image3 },
      { image: image4, title: image4 },
      { image: image5, title: image5 },
      { image: image6, title: image6 },
      { image: image7, title: image7 },
      { image: image8, title: image8 },
      { image: image9, title: image9 },
      { image: image10, title: image10 },
    ],
    live: "https://garssolutions.netlify.app/",
    background: "#355d65",
  },
];
const HorizontalScrollCarousel = ({ project }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
    behavior: "smooth",
    delay: 0.5,
    initial: false,
    viewport: true,
    smooth: "easeInOut",
    transition: { duration: 0.5 },
  });

  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-55%"]);
  return (
    <div></div>
    );
};

const Projects = () => {
  return (
    <div className="min-h-screen relative rounded py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Projects
        </h2>
      </div>
      <HorizontalScrollCarousel project={projects[0]} />
    </div>
  );
};

export default Projects;
