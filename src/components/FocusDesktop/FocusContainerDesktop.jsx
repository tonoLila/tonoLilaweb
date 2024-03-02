import { motion } from "framer-motion";
import styles from "@styles/focus.module.css";
import FocusDesktop from "./FocusDesktop";
const FocusContainerDesktop = ({ children }) => {
  return (
    <svg
      className={styles.focus_svg}
      width="100%"
      height=" 100%"
      viewBox="0 0 1162 624"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect x="0" y="0" width="1162" height="624" fill="transparent" />
        <FocusDesktop />
      </g>
      <foreignObject x="0" y="0" width="100%" height="100%">
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, type: "tween", ease: "easeInOut" }}
          className={styles.focus_container}
        >
          {children}
        </motion.div>
      </foreignObject>
    </svg>
  );
};

export default FocusContainerDesktop;
