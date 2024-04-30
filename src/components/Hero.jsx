import { motion } from "framer-motion";
import Markers from "@components/Markers";
import styles from "@styles/hero.module.css";
import FocusContainer from "./FocusDesktop/FocusContainerDesktop";
import Footer from "@components/Footer";

const Hero = ({
  title,
  normalText,
  imageUrl,
  button,
  isDesktop,
  sections,
  currentSection,
}) => {
  const content = (
    <>
      <div className={styles.image_container}>
        <img src={imageUrl} className={styles.hero_image} />
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
        <motion.button
          type="button"
          onClick={() => console.log("clicked")}
          whileTap={{ scale: 0.9 }}
          className={styles.cta}
        >
          {button}
        </motion.button>
        {!isDesktop && (
          <div className="button_container">
            <Markers sections={sections} currentSection={currentSection} />
            <Footer />
          </div>
        )}
      </div>
    </>
  );

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
      <div className={styles.hero_container}>
        {isDesktop ? <FocusContainer>{content}</FocusContainer> : content}
      </div>
    </motion.div>
  );
};

export default Hero;
