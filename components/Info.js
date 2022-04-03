import styles from "./Info.module.css";
import Link from "next/link";

export default function Info() {
  return (
    <div className={styles.info}>
      <p>
        Hello <span className={styles.earthEmoji}>🌎</span>!
      </p>
      <p>
        Welcome to my personal space.<br></br>
        My name is Christos Kipouros. I am a software engineer[
        <a href="/CV CHRISTOS KIPOUROS.pdf" target="_blank" rel="noreferrer">
          🔗 cv
        </a>
        ].
      </p>
      <h1>automated trading</h1>
      <p>
        Based on quantitative analysis and historical data, I develop auto-trading strategies for currency pairs and futures, for the purpose of making stable low risk returns.<br></br> [
        <Link href="/automatedTrading">🔗 overview</Link>]
      </p>
      <h1>web/app development</h1>
      <p>
        A simple and fully responsive website for your online presence (like this one) or a more complex application (local or web based) to perform specific tasks.<br></br>[
        <Link href="/webAppDev">🔗 overview</Link>]
      </p>
      <p>
        Please feel free to{" "}
        <Link href="mailto: christoskipouros@outlook.com" target="_blank" rel="noreferrer">
          🔗contact
        </Link>{" "}
        me. I am always happy to talk anything related to work or just talk snowboarding, mario kart, pointy guitars or the USS Enterprise 🛸.
      </p>
    </div>
  );
}
