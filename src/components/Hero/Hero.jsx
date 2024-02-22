import "../../styles/hero.css";
import { motion } from "framer-motion";

const Hero = ({
  title,
  boldText,
  normalText,
  imageUrl,
  button,
  markers,
  isDesktop,
  sectionClass,
}) => {
  return (
    <motion.div
      className={`hero ${sectionClass}`}
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.9 }}
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
        <div className="text-container">
          <motion.h2
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {normalText}
          </motion.p>
          <motion.p
            className="hero-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {boldText}
          </motion.p>
          {isDesktop && <button className="cta">{button}</button>}
        </div>
      </div>
      {!isDesktop && <button className="cta">{button}</button>}
      <div className="markers d-flex d-lg-none justify-content-center mt-3">
        {!isDesktop && markers()}
      </div>
    </motion.div>
  );
};

export default Hero;
