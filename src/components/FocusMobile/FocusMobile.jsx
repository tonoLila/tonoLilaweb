import { motion } from "framer-motion";
import styles from "@styles/focus.module.css";

const FocusMobile = () => {
  return (
    <motion.svg
      initial={{ scale: 1, transformOrigin: "center" }}
      animate={{ scale: [0.9, 1, 0.95, 1] }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 150,
        damping: 10,
      }}
      className={styles.focus_m}
      width="100%"
      height="100%"
      viewBox="0 0 344 677"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.4032 9.74365L14.2742 9.74365C11.5127 9.74365 9.27417 11.9822 9.27417 14.7437L9.27417 56.3758"
        stroke="#DCDCDC"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M290.597 667.256L329.726 667.256C332.487 667.256 334.726 665.018 334.726 662.256L334.726 620.624"
        stroke="#DCDCDC"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M38.5096 23.1504L26.9612 23.1504C24.1998 23.1504 21.9612 25.389 21.9612 28.1504L21.9612 40.6375"
        stroke="#B4B4B4"
        strokeLinecap="round"
      />
      <path
        d="M305.49 653.85L317.039 653.85C319.8 653.85 322.039 651.611 322.039 648.85L322.039 636.363"
        stroke="#B4B4B4"
        strokeLinecap="round"
      />
      <path
        d="M334.726 56.3758L334.726 14.7437C334.726 11.9822 332.487 9.74365 329.726 9.74365L290.597 9.74365"
        stroke="#DCDCDC"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9.27418 620.624L9.27417 662.256C9.27417 665.018 11.5127 667.256 14.2742 667.256L53.4032 667.256"
        stroke="#DCDCDC"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M322.039 40.6374L322.039 28.1504C322.039 25.389 319.8 23.1504 317.039 23.1504L305.49 23.1504"
        stroke="#B4B4B4"
        strokeLinecap="round"
      />
      <path
        d="M21.9612 636.363L21.9612 648.85C21.9612 651.611 24.1998 653.85 26.9612 653.85L38.5096 653.85"
        stroke="#B4B4B4"
        strokeLinecap="round"
      />
      <path
        d="M1 340.249L17.5484 340.249"
        stroke="#B4B4B4"
        strokeLinecap="round"
      />
      <path
        d="M326.452 340.249L343 340.249"
        stroke="#B4B4B4"
        strokeLinecap="round"
      />
      <path
        d="M167.587 1L167.587 18.4871"
        stroke="#B4B4B4"
        strokeLinecap="round"
      />
      <path
        d="M167.587 658.513L167.587 676"
        stroke="#B4B4B4"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default FocusMobile;
