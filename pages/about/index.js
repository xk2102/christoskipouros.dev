import styles from "./about.module.css";
import me from "./me.jpg";
import Image from "next/image";
export default function about() {
  return (
    <div className={`animate ${styles.about}`}>
      <h1>who?</h1>
      <div className={styles.box}>
        <div className={styles.top}>
          <div className={styles.imageContainer}></div>
          <Image src={me}></Image>
        </div>
        <div className={styles.bottom}>
          <p>My name is Christos. I am a software engineer with front-end and back-end experience.</p>
          <p>
            Having started my career as a quantitative developer creating algorithms for automated trading plans, I have recently challenged myself by getting fully familiar with the modern JavaScript
            ecosystem and the front-end and back-end development libraries, tools, workflows and fast prototyping frameworks.
          </p>
          <p>
            Proactive, cooperative and hard-working, I am looking to master my front-end skills, deliver fully functional products and services, optimized according to the industry requirements and
            the client.
          </p>
          <p>
            I am currently working with
            <a href="https://saeki.ch/" target="_blank" rel="noreferrer" style={{ color: "#f1f1bc" }}>
              {` Saeki Robotics AG `}
            </a>
            - a start-up company based in Zürich in the field of robotic digital manufacturing.{" "}
          </p>
          <p>
            Please feel free to{" "}
            <a href="mailto: christoskipouros@outlook.com" target="_blank" rel="noreferrer">
              🔗contact
            </a>{" "}
            me. I am always happy to talk anything related to work or just talk snowboarding, mario kart, pointy guitars or the USS Enterprise 🛸.
          </p>
        </div>
      </div>
    </div>
  );
}
