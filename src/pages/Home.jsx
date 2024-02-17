import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Creaciones from "../components/Sections/Creaciones";
import Voces from "../components/Sections/Voces";
import Comunidad from "../components/Sections/Comunidad";
import "../styles/home.css";

const Home = () => {
  const [currentSection, setCurrentSection] = useState("creaciones");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  const handlePrev = () => {
    setCurrentSection((prevSection) => {
      return prevSection === "creaciones"
        ? "comunidad"
        : prevSection === "voces"
        ? "creaciones"
        : "voces";
    });
  };

  const handleNext = () => {
    setCurrentSection((prevSection) => {
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
    onSwipedLeft: handlePrev,
    onSwipedRight: handleNext,
    preventScrollOnSwipe: true,
  });

  const markers = () => {
    const sections = ["voces", "creaciones", "comunidad"];
    const desktopOrder = ["voces", "creaciones", "comunidad"];
    const orderedSections = isDesktop ? desktopOrder : sections;
    return orderedSections.map((section, index) => (
      <div
        key={index}
        style={{
          width: "30px",
          height: "5px",
          borderRadius: "30%",
          background: currentSection === section ? "white" : "black",
          margin: "0 5px",
        }}
      ></div>
    ));
  };

  return (
    <>
      <div className="home-container" {...handlers}>
        {currentSection === "voces" && <Voces markers={markers} />}
        {currentSection === "creaciones" && <Creaciones markers={markers} />}
        {currentSection === "comunidad" && <Comunidad markers={markers} />}
      </div>
      {isDesktop && (
        <div>
          <button onClick={handlePrev}>&lt; Anterior</button>
          <button onClick={handleNext}>Siguiente &gt;</button>
        </div>
      )}
    </>
  );
};

export default Home;
