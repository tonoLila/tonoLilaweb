import React from "react";

const voces = ({markers}) => {
  return (
    <div className="voces section">
      <div>
        <h2 className="title-section">Voces artisticas</h2>
        <p className="text-section">
          Explora este espacio donde convergen las distintas formas de
          creatividad. A traves de cautivadoras entrevistas de talentosos
          artistas: musicos, escultores, pintores y mas.
        </p>
        <p className="bold-section">
          Descubrimos las fascinantes narrativas detras de cada obra, llevando
          luz a la diversidad del mundo artistico.
        </p>
      </div>
      <div>
        <button className=" cta">Ver entrevistas</button>
        <div className="markers d-flex d-lg-none justify-content-center mt-3">
          {markers()}
        </div>
      </div>
    </div>
  );
};

export default voces;
