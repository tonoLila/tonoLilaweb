import { motion } from "framer-motion";
import styles from "@styles/focus.module.css";

const FocusDesktop = () => {
  return (
    <motion.svg
      initial={{ scale: 1, transformOrigin: "center" }}
      animate={{
        scale: [0.9, 1, 0.95, 1],
      }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 150,
        damping: 10,
      }}
      className={styles.focus}
      width="100%"
      height=" 100%"
      viewBox="0 0 1162 624"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1145 97L1145 22C1145 19.2386 1142.76 17 1140 17L1065 17"
        stroke="#DCDCDC"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M17 527L17 602C17 604.761 19.2386 607 22 607L97 607"
        stroke="#DCDCDC"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M1122 70L1122 45C1122 42.2386 1119.76 40 1117 40L1092 40"
        stroke="#B4B4B4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 554L40 579C40 581.761 42.2386 584 45 584L70 584"
        stroke="#B4B4B4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1065 607L1140 607C1142.76 607 1145 604.761 1145 602L1145 527"
        stroke="#DCDCDC"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M97 17L22 17C19.2386 17 17 19.2386 17 22L17 97"
        stroke="#DCDCDC"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M1092 584L1117 584C1119.76 584 1122 581.761 1122 579L1122 554"
        stroke="#B4B4B4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M70 40L45 40C42.2386 40 40 42.2386 40 45L40 70"
        stroke="#B4B4B4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M578 2L578 32"
        stroke="#B4B4B4"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M578 592L578 622"
        stroke="transparent"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M1160 304L1130 304"
        stroke="#B4B4B4"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32 304L2 304"
        stroke="#B4B4B4"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default FocusDesktop;
