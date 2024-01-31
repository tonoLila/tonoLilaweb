import React from "react";

const creaciones = ({markers}) => {
  return (
    <div className="creaciones section">
      <div>
        <h2 className="title-section">Creaciones Lila</h2>
        <p className="text-section">
          Bienvenidos a mi rincon visual! Soy Lila, la mente y el ojo detras de
          cada imagen que encontraran aqui.
        </p>
        <p className="bold-section">
          Acompañenme en este viaje fotografico y descubran las narrativas
          visuales que he tejido para ustedes!
        </p>
      </div>
      <div>
        <button className=" cta">Descubrir +</button>
        <div className="markers d-flex d-lg-none justify-content-center mt-3">
          {markers()}
        </div>
      </div>
    </div>
  );
};

export default creaciones;
