// CSS
import Link from "next/link";
import styles from "./webAppDevelopment.module.css";

export default function webAppDevelopment() {
  return (
    <div className={`animate ${styles.webAppDevelopment}`}>
      <h1>web/app development</h1>
      <p>
        HTML, CSS | JavaScript, ES6 | TypeScript <br />
        React, React Native, Next.js | Node.js, Express, mongoDB, GraphQL, Firebase | Jest, Cypress | Electron
      </p>
      <h2>projects</h2>
      <ul>
        <li>
          🎂 RhoamRecipes [<strong>React, TypeScript, Firebase</strong>] - An app that intends to help pastry chefs who want to execute recipes on different quantities for production purposes. [
          <a href="https://github.com/xk2102/rhoam-recipes" target="_blank" rel="noreferrer">
            🔗github
          </a>
          {`, `}
          <a href="https://rhoam-recipes-59c26.firebaseapp.com/" target="_blank" rel="noreferrer">
            🔗preview
          </a>
          ] <br />
          Also available for Android devices built with ReactNative. [
          <a href="https://github.com/xk2102/rhoam-recipes-mobile" target="_blank" rel="noreferrer">
            🔗github
          </a>
          ]
        </li>
        <li>
          📝 RhoamTasks [<strong>React, TypeScript, Electron</strong>] - An offline desktop task planner. [
          <a href="https://github.com/xk2102/rhoam-tasks-electron" target="_blank" rel="noreferrer">
            🔗github
          </a>
          {`, `}
          <a href="https://xk2102.github.io/rhoam-tasks/" target="_blank" rel="noreferrer">
            🔗preview
          </a>
          ]
        </li>
        <li>
          🚧 RhoamTradingPlatform - [
          <a href="/posts/rhoam-trading-platform" target="_blank" rel="noreferrer">
            🔗preview
          </a>
          ]
        </li>
        <li>
          📈 RhoamFX [<strong>React, Express, mongoDB, Cypress</strong>] - This is an app for traders. A trader can save his trades and keep track of his portfolios performance. [
          <a href="https://github.com/xk2102/rhoam-fx-web" target="_blank" rel="noreferrer">
            🔗github
          </a>
          {`, `}
          <a href="https://xk2102.github.io/rhoam-fx-web" target="_blank" rel="noreferrer">
            🔗preview
          </a>
          ]
        </li>
        <li>
          🏋️ Gym schedule app [<strong>HTML, CSS, PHP</strong>] - This application intends to manage the schedule of a small gym operation. [<Link href="/posts/gym-schedule-app">🔗preview</Link>]
        </li>
        <li>
          🏢 Building technology business website [<strong>HTML, CSS</strong>] - A static website of a local business that deals with building technologies. [
          <Link href="/posts/building-technology-business-website">🔗preview</Link>]
        </li>
      </ul>
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
            🔗Github.com
          </a>
        </li>
        <li>
          <a href="https://codepen.io/xk2102" target="_blank" rel="noreferrer">
            🔗Codepen.io
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
