import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import Wheel from "@components/Wheel";
import Hero from "@components/Hero";
import HeroTexts from "@components/HeroTexts";
import styles from "@styles/home.module.css";

const Home = () => {
  const [currentSection, setCurrentSection] = useState("creaciones");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const [direction, setDirection] = useState(null);
  const sections = ["comunidad", "creaciones", "voces"];

  const handlePrev = () => {
    setCurrentSection((prevSection) => {
      setDirection("right");
      return prevSection === "creaciones"
        ? "comunidad"
        : prevSection === "voces"
        ? "creaciones"
        : "voces";
    });
  };

  const handleNext = () => {
    setCurrentSection((prevSection) => {
      setDirection("left");
      return prevSection === "creaciones"
        ? "voces"
        : prevSection === "voces"
        ? "comunidad"
        : "creaciones";
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
  });

  return (
    <>
      <motion.div
        {...handlers}
        key={currentSection}
        className={styles.home_container}
        initial={{
          opacity: isDesktop ? 1 : 0,
          x: isDesktop
            ? 0
            : direction === "left"
            ? "100%"
            : direction === "right"
            ? "-100%"
            : 0,
        }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: isDesktop ? 1 : 0, transition: { duration: 0.1 } }}
        transition={{
          x: { type: "anticipate", duration: 0.3, ease: "easeOut" },
        }}
      >
        <Hero
          title={
            currentSection === "comunidad"
              ? "Comunidad"
              : currentSection === "creaciones"
              ? "Creaciones Lila"
              : "Voces artísticas"
          }
          imageUrl={`/${currentSection}.jpg`}
          normalText={
            <HeroTexts section={currentSection} isDesktop={isDesktop} />
          }
          boldText={<HeroTexts section={currentSection} boldText />}
          button={
            currentSection === "voces" ? "Ver entrevistas" : "Descubrir +"
          }
          isDesktop={isDesktop}
          sections={sections}
          currentSection={currentSection}
        />
      </motion.div>
      {isDesktop && (
        <Wheel
          currentSection={currentSection}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
};
export default Home;
