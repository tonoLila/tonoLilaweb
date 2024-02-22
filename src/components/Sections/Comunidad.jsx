import { motion } from "framer-motion";
const comunidad = ({ markers, WheelControls, isDesktop }) => {
  return (
    <motion.div
      className="comunidad section"
      initial={{ filter: "blur(20px)", opacity: 1 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      exit={{ filter: "blur(20px)", opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div>
        <motion.h2
          className="title-section"
          initial={{ opacity: 1, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            y: { type: "sween", ease: "easeOut" },
            duration: 0.5,
            delay: 0.2,
          }}
        >
          Comunidad
        </motion.h2>
        <motion.p
          className="text-section"
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            y: { type: "sween", ease: "easeOut" },
            duration: 0.5,
            delay: 0.25,
          }}
        >
          En este espacio convergen datos fascinantes, curiosidades y efemérides
          relacionadas con el arte. <br /> Exploremos juntos el vasto universo
          cultural, descubriendo detalles que enriquecen nuestra compresion y
          aprecio por la creatividad
        </motion.p>
        <motion.p
          className="bold-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            y: { type: "sween", ease: "easeOut" },
            duration: 0.5,
            delay: 0.3,
          }}
        >
          ¡Cada día es una oportunidad para aprender, compartir, rememorar y
          celebrar la riqueza del arte!
        </motion.p>
      </div>
      <div>
        {!isDesktop && (
          <button className="mb-3 cta btn-info">Saber mas!</button>
        )}
        <div className="markers d-flex d-lg-none justify-content-center mt-3">
          {markers()}
        </div>
        {WheelControls}
      </div>
    </motion.div>
  );
};

export default comunidad;
