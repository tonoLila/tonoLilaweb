// Home.jsx
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import Wheel from "../Wheel/Wheel";
import Hero from "../Hero/Hero";

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
          x: { type: "anticipate", duration: 0.1, ease: "easeOut" },
        }}
      >
        {currentSection === "comunidad" && (
          <Hero
            title="Comunidad"
            imageUrl="/comunidad.jpg"
            normalText={
              <>
                En este espacio convergen datos fascinantes, curiosidades y
                efemérides relacionadas con el arte.
                <br />
                <br /> Exploramos juntos el vasto universo cultural,
                descubriendo detalles que enriquecen nuestra comprensión y
                aprecio por la creatividad.
              </>
            }
            boldText="¡Cada día es una oportunidad para aprender, compartir, rememorar y celebrar la riqueza del arte!"
            button="Descubrir +"
            markers={markers}
            isDesktop={isDesktop}
            sectionClass="comunidad"
          />
        )}
        {currentSection === "creaciones" && (
          <Hero
            title="Creaciones Lila"
            imageUrl="/creaciones.jpg"
            normalText={
              <>
                ¡Bienvenidos a mi rincón visual! Soy Lila, la mente y el ojo
                detrás de cada imagen que encontrarán aquí.
                <br />
                <br /> Les invito a explorar mi mundo a través de la fotografía,
                donde cada captura es una expresión única de mi creatividad y
                visión.
              </>
            }
            boldText="¡Acompáñenme en este viaje fotográfico y descubran las narrativas visuales que he tejido para ustedes!"
            button="Descubrir +"
            markers={markers}
            isDesktop={isDesktop}
            sectionClass="creaciones"
          />
        )}
        {currentSection === "voces" && (
          <Hero
            title="Voces artísticas"
            imageUrl="/voces.jpg"
            normalText="Explora este espacio donde convergen las distintas formas de creatividad. A través de cautivadoras entrevistas, nos adentramos en las historias, inspiraciones y procesos creativos de talentosos artistas: músicos, escultores, pintores y más."
            boldText="Descubrimos las fascinantes narrativas detrás de cada obra, llevando luz a la diversidad del mundo artístico."
            button="Ver entrevistas"
            markers={markers}
            isDesktop={isDesktop}
            sectionClass="voces"
          />
        )}
      </motion.div>
      {isDesktop && <Wheel onPrev={handlePrev} onNext={handleNext} />}
    </>
  );
};

export default Home;
