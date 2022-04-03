import styles from "./Footer.module.css";
import { MdOutlineCopyright } from "react-icons/md";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <MdOutlineCopyright />
      C.K 2022
    </div>
  );
}
