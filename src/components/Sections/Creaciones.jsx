import React from "react";
import { motion } from "framer-motion";

const creaciones = ({ markers, WheelControls, isDesktop }) => {
  return (
    <motion.div
      className="creaciones section"
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
            y: { type: "anticipate", ease: "easeOut" },
            duration: 0.5,
            delay: 0.2,
          }}
        >
          Creaciones Lila
        </motion.h2>
        <motion.p
          className="text-section"
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            y: { type: "anticipate", ease: "easeOut" },
            duration: 0.5,
            delay: 0.25,
          }}
        >
          ¡Bienvenidos a mi rincón visual! Soy Lila, la mente y el ojo detrás de
          cada imagen que encontrarán aquí.
          <br />
          Les invito a explorar mi mundo a través de la fotografía, donde cada
          captura es una expresión única de mi creatividad y visión.
        </motion.p>
        <motion.p
          className="bold-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            y: { type: "anticipate", ease: "easeOut" },
            duration: 0.5,
            delay: 0.3,
          }}
        >
          ¡Acompáñenme en este viaje fotográfico y descubran las narrativas
          visuales que he tejido para ustedes!
        </motion.p>
      </div>
      <div>
        {!isDesktop && (
          <button className="mb-3 cta btn-danger">Descubrir +</button>
        )}
        <div className="markers d-flex d-lg-none justify-content-center mt-3">
          {markers()}
        </div>
        {WheelControls}
      </div>
    </motion.div>
  );
};

export default creaciones;
