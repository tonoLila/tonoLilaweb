import { motion } from "framer-motion";

const voces = ({ markers, WheelControls, isDesktop }) => {
  return (
    <motion.div
      className="voces section"
      initial={{ filter: "blur(20px)", opacity: 1 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      exit={{ filter: "blur(20px)", opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div>
        <motion.h2
          className="title-section"
          initial={{ opacity: 1, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            y: { type: "anticipate", ease: "easeOut" },
            duration: 0.5,
            delay: 0.2,
          }}
        >
          Voces artísticas
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
          Explora este espacio donde convergen las distintas formas de
          creatividad. A traves de cautivadoras entrevistas, nos adentramos en
          las historias, inspiraciones y procesos creativos de talentosos
          artistas: musicos, escultores, pintores y más.
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
          Descubrimos las fascinantes narrativas detrás de cada obra, llevando
          luz a la diversidad del mundo artístico.
        </motion.p>
      </div>
      <div>
        {!isDesktop && <button className="cta mb-3">Ver entrevistas</button>}
        <div className="markers d-flex d-lg-none justify-content-center mt-3">
          {markers()}
        </div>
        {WheelControls}
      </div>
    </motion.div>
  );
};

export default voces;
