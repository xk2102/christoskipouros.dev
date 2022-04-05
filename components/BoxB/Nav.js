import styles from "./Nav.module.css";
import NavIcon from "./NavIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { WindowContext } from "../../contexts/WindowContext";

export default function Nav() {
  const { windowSettings, showBoxC, setShowBoxC } = useContext(WindowContext);

  if (windowSettings.innerWidth < 600) {
    return (
      <div className={styles.nav} onClick={() => setShowBoxC(!showBoxC)}>
        <NavIcon />
      </div>
    );
  } else {
    return (
      <div className={styles.nav}>
        <NavList />
      </div>
    );
  }
}

function NavList() {
  const router = useRouter();
  return (
    <div className={styles.navList}>
      <div className={router.pathname === "/" ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}>
        <Link href="/">info</Link>
      </div>
      <div className={router.pathname === "/automatedTrading" ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}>
        <Link href="/automatedTrading">automated trading</Link>
      </div>
      <div className={router.pathname === "/webAppDevelopment" ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}>
        <Link href="/webAppDevelopment">web/app development</Link>
      </div>
      <div className={router.pathname === "/about" ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}>
        <Link href="/about">who?</Link>
      </div>
    </div>
  );
}
