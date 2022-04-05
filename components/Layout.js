import styles from "./Layout.module.css";
import { useRouter } from "next/router";
import Logo from "./BoxB/Logo";
import Nav from "./BoxB/Nav";
import React, { useContext } from "react";
import Link from "next/link";
import { WindowContext } from "../contexts/WindowContext";
import Footer from "./BoxB/Footer";
// import { Global } from "../contexts/Global";
import ProgressBar from "./ProgressBar";

export default function Layout({ children }) {
  return <BoxA>{children}</BoxA>;
}

function BoxA({ children }) {
  const { showBoxC } = useContext(WindowContext);

  return (
    <div className={styles.boxA}>
      <ProgressBar></ProgressBar>
      <BoxB />
      {showBoxC && <BoxC />}
      <BoxD>{children}</BoxD>
    </div>
  );
}

function BoxB() {
  const { windowSettings } = useContext(WindowContext);
  function renderLessThan1300() {
    return (
      <div className={styles.boxB}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <Nav />
        </div>
      </div>
    );
  }
  function renderMoreThan1300() {
    return (
      <div className={styles.boxB}>
        <div className={styles.left}>
          <Logo />
          <Nav />
        </div>
        <div className={styles.right}>
          <Footer />
        </div>
      </div>
    );
  }
  return windowSettings.innerWidth < 1300 ? renderLessThan1300() : renderMoreThan1300();
}

function BoxC() {
  const { setShowBoxC } = useContext(WindowContext);
  const router = useRouter();
  return (
    <div className={`animate ${styles.boxC}`}>
      <div className={router.pathname === "/" ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`} onClick={() => setShowBoxC(false)}>
        <Link href="/">info</Link>
      </div>
      <div className={router.pathname === "/automatedTrading" ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`} onClick={() => setShowBoxC(false)}>
        <Link href="/automatedTrading">automated trading</Link>
      </div>
      <div className={router.pathname === "/webAppDevelopment" ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`} onClick={() => setShowBoxC(false)}>
        <Link href="/webAppDevelopment">web/app development</Link>
      </div>
    </div>
  );
}

function BoxD({ children }) {
  const { windowSettings } = useContext(WindowContext);
  return (
    <div className={styles.boxD}>
      {children}
      {windowSettings.innerWidth < 1300 && <Footer />}
    </div>
  );
}
