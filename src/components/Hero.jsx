import { motion } from "framer-motion";
import Markers from "@components/Markers";
import styles from "@styles/hero.module.css";

const Hero = ({
  title,
  boldText,
  normalText,
  imageUrl,
  button,
  isDesktop,
  sections,
  currentSection,
}) => {
  return (
    <motion.div
      className={`${styles.hero} ${currentSection}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {/* <div className={styles.hero_container}> */}
      <div className={styles.image_container}>
        <motion.img
          src={imageUrl}
          className={styles.hero_image}
          initial={{ filter: "blur(10px)" }}
          animate={{ filter: "blur(0px)" }}
          exit={{ filter: "blur(25px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      <div
        className={styles.text_container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h2 className={styles.hero_title}>{title}</h2>
        <p className={styles.hero_text}>{normalText}</p>
        <p className={styles.hero_bold}>{boldText}</p>
        {isDesktop && <button className={styles.cta}>{button}</button>}
      </div>
      {!isDesktop && (
        <div className="button_container">
          <button className={styles.cta_mobile}>{button}</button>
          <Markers sections={sections} currentSection={currentSection} />
        </div>
      )}
      {/* </div> */}
    </motion.div>
  );
};

export default Hero;
