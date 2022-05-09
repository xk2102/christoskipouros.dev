// CSS
import Link from "next/link";
import styles from "./webAppDevelopment.module.css";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { SiJavascript, SiReact, SiTypescript, SiPhp, SiFirebase, SiElectron } from "react-icons/si";

const PROJECTS = [
  {
    name: "Rhoam Trading Systems",
    description: "This is an app for traders. A trader can back-test and forward-test a trading system.",
    preview: "https://rhoam-trading-systems.web.app/",
    github: "https://github.com/xk2102/rhoam-trading-systems",
    types: ["React", "TypeScript"],
  },
  {
    name: "Rhoam Recipes",
    description: "An app that intends to help pastry chefs who want to execute recipes on different quantities for production purposes.",
    preview: "https://rhoam-recipes-59c26.firebaseapp.com/",
    github: "https://github.com/xk2102/rhoam-recipes",
    types: ["React", "TypeScript", "Firebase"],
  },
  {
    name: "Rhoam Tasks",
    description: "An offline desktop task planner.",
    preview: "https://xk2102.github.io/rhoam-tasks/",
    github: "https://github.com/xk2102/rhoam-tasks-electron",
    types: ["React", "TypeScript", "Electron"],
  },
  {
    name: "Gym schedule app",
    description: "This application intends to manage the schedule of a small gym operation.",
    preview: "/posts/gym-schedule-app",
    types: ["HTML", "CSS", "PHP"],
  },
  {
    name: "Building technology business website",
    description: "A static website of a local business that deals with building technologies.",
    preview: "/posts/building-technology-business-website",
    types: ["HTML", "CSS"],
  },
];

const Project = ({ name, description, preview, github, types }) => {
  const typeToIcon = (type, index) => {
    switch (type) {
      case "HTML":
        return <TiHtml5 color={"rgb(221, 71, 37)"} id={styles.icon} key={index} />;
      case "CSS":
        return <TiCss3 color={"rgb(37, 75, 221)"} id={styles.icon} key={index} />;
      case "JavaScript":
        return <SiJavascript color={"rgb(239, 216, 29)"} id={styles.icon} key={index} />;
      case "TypeScript":
        return <SiTypescript color={"rgb(47, 116, 192)"} id={styles.icon} key={index} />;
      case "React":
        return <SiReact color={"rgb(94, 211, 243)"} id={styles.icon} key={index} />;
      case "PHP":
        return <SiPhp color={"rgb(115, 119, 173)"} id={styles.icon} key={index} />;
      case "Firebase":
        return <SiFirebase color={"rgb(247, 198, 46)"} id={styles.icon} key={index} />;
      case "Electron":
        return <SiElectron color={"rgb(159, 234, 248)"} id={styles.icon} key={index} />;
      default:
      // default
    }
  };
  return (
    <div className={styles.project}>
      <div className={styles.left}>
        <div className={styles.top}>{name}</div>
        <div className={styles.bottom}>
          {description}
          <br />
          <span>
            [
            {github && (
              <>
                <a href={github} target="_blank" rel="noreferrer">
                  github
                </a>
                <span>{`, `}</span>
              </>
            )}
            <a href={preview} target="_blank" rel="noreferrer">
              preview
            </a>
            ]
          </span>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.top} id="projectRightTop">
          {" "}
          {types.map((type, index) => typeToIcon(type, index))}
        </div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
};

export default function webAppDevelopment() {
  return (
    <div className={`animate ${styles.webAppDevelopment}`}>
      <h1>web/app development</h1>
      <p>
        HTML, CSS | JavaScript, ES6 | TypeScript <br />
        React, React Native, Next.js | Node.js, Express, mongoDB, GraphQL, Firebase | Jest, Cypress | Electron
      </p>
      <h2>projects</h2>

      {PROJECTS.map((p, index) => (
        <Project name={p.name} description={p.description} preview={p.preview} github={p.github} types={p.types} key={index} />
      ))}

      <h2>freecodecamp.org certificates</h2>
      <ul>
        <li>
          <a href="https://www.freecodecamp.org/certification/xk2102/responsive-web-design" target="_blank" rel="noreferrer">
            Responsive web design
          </a>
          {` `}
          (HTML, CSS)
        </li>
        <li>
          <a href="https://www.freecodecamp.org/certification/xk2102/javascript-algorithms-and-data-structures" target="_blank" rel="noreferrer">
            JavaScript Algorithms and Data Structures
          </a>
          {` `}
          (JavaScript, ES6)
        </li>
        <li>
          <a href="https://www.freecodecamp.org/certification/xk2102/front-end-libraries" target="_blank" rel="noreferrer">
            Front End Libraries
          </a>
          {` `}
          (Bootstrap, jQuery, Sass, React, Redux)
        </li>
        <li>
          <a href="https://www.freecodecamp.org/certification/xk2102/data-visualization" target="_blank" rel="noreferrer">
            Data Visualization
          </a>
          {` `}
          (Data Visualization with D3, JSON APIs & Ajax)
        </li>
      </ul>
      <h2>useful links</h2>
      <ul>
        <li>
          <a href="https://github.com/xk2102" target="_blank" rel="noreferrer">
            Github.com
          </a>
        </li>
        <li>
          <a href="https://codepen.io/xk2102" target="_blank" rel="noreferrer">
            Codepen.io
          </a>
          {` `}
          (projects based on{` `}
          <a href="https://codepen.io/collection/nVNONM" target="_blank" rel="noreferrer">
            vanilla JS & jQuery
          </a>
          , projects based on{` `}
          <a href="https://codepen.io/collection/nZeNeW" target="_blank" rel="noreferrer">
            ReactJS
          </a>
          , projects with the{` `}
          <a href="https://codepen.io/collection/XgyJyM" target="_blank" rel="noreferrer">
            D3 data visualization library
          </a>
          )
        </li>
      </ul>
    </div>
  );
}
