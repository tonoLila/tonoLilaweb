import { motion } from "framer-motion";
import Markers from "@components/Markers";
import "@styles/hero.css";

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
      className={`hero ${currentSection}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="hero-container container-fluid">
        <div className="image-container">
          <motion.img
            src={imageUrl}
            className="hero-image"
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)" }}
            exit={{ filter: "blur(25px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
        <div
          className="text-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h2 className="hero-title">{title}</h2>
          <p className="hero-text">{normalText}</p>
          <p className="hero-bold">{boldText}</p>
          {isDesktop && <button className="cta">{button}</button>}
        </div>
      </div>
      {!isDesktop && <button className="cta">{button}</button>}
      <div>
        {!isDesktop && (
          <Markers sections={sections} currentSection={currentSection} />
        )}
      </div>
    </motion.div>
  );
};

export default Hero;
