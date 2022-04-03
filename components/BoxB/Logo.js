import styles from "./Logo.module.css";
import { IoHardwareChipOutline } from "react-icons/io5";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.logoIcon}>
        <IoHardwareChipOutline size={20} />
      </div>
      <div className={styles.logoText}>CHRISTOSKIPOUROS.dev</div>
    </div>
  );
}
