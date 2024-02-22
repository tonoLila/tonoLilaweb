import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Creaciones from "../Sections/Creaciones";
import Voces from "../Sections/Voces";
import Comunidad from "../Sections/Comunidad";
import { motion } from "framer-motion";
import "../../styles/home.css";
import WheelControls from "../WheelControls/WheelControls";

const Home = () => {
  const [currentSection, setCurrentSection] = useState("creaciones");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const [direction, setDirection] = useState(null);

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

  const markers = () => {
    const sections = ["comunidad", "creaciones", "voces"];
    const desktopOrder = ["voces", "creaciones", "comunidad"];
    const orderedSections = isDesktop ? desktopOrder : sections;
    return orderedSections.map((section, index) => (
      <div
        key={index}
        style={{
          width: "30px",
          height: "5px",
          borderRadius: "30%",
          border: "1px solid white",
          background: currentSection === section ? "white" : "transparent",
          margin: "0 5px",
        }}
      ></div>
    ));
  };

  return (
    <>
      <motion.div
        key={currentSection}
        {...handlers}
        className="home-container"
        initial={{
          opacity: 0,
          x:
            direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
        }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        transition={{
          x: { type: "anticipate", duration: 0.1, ease: "easeOut" },
        }}
      >
        {currentSection === "comunidad" && (
          <Comunidad
            isDesktop={isDesktop}
            markers={markers}
            WheelControls={
              isDesktop && (
                <WheelControls onPrev={handlePrev} onNext={handleNext} />
              )
            }
          />
        )}
        {currentSection === "creaciones" && (
          <Creaciones
            isDesktop={isDesktop}
            markers={markers}
            WheelControls={
              isDesktop && (
                <WheelControls onPrev={handlePrev} onNext={handleNext} />
              )
            }
          />
        )}
        {currentSection === "voces" && (
          <Voces
            isDesktop={isDesktop}
            markers={markers}
            WheelControls={
              isDesktop && (
                <WheelControls onPrev={handlePrev} onNext={handleNext} />
              )
            }
          />
        )}
      </motion.div>
    </>
  );
};

export default Home;
