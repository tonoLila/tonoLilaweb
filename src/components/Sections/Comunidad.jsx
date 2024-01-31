const comunidad = ({ markers }) => {
  return (
    <div className="comunidad section">
      <div>
        <h2 className="title-section">Comunidad</h2>
        <p className="text-section">
          Exploremos juntos el vasto universo cultural, descubriendo detalles
          que enriquecen nuestra compresion y aprecio por la creatividad
        </p>
        <p className="bold-section">
          Cada dia es una oportunidad para aprender, compartir, rememorar y
          celebrar la riqueza del arte!
        </p>
      </div>
      <div>
        <button className=" cta">Saber mas!</button>
        <div className="markers d-flex d-lg-none justify-content-center mt-3">
          {markers()}
        </div>
      </div>
    </div>
  );
};

export default comunidad;
