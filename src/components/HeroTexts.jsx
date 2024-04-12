const HeroTexts = ({ section, isDesktop, boldText }) => {
  const mobileTexts = {
    comunidad: (
      <>
        Exploremos juntos el vasto universo cultural, descubriendo detalles que
        enriquecen nuestra comprensión y aprecio por la creatividad.
      </>
    ),
    creaciones: (
      <>
        ¡Bienvenidos a mi rincón visual! Soy Lila, la mente y el ojo detrás de
        cada imagen que encontrarán aquí.
      </>
    ),
    voces: (
      <>
        Explora este espacio donde convergen las distintas formas de
        creatividad. A través de cautivadoras entrevistas, nos adentramos en las
        historias, inspiraciones y procesos creativos de talentosos artistas:
        músicos, escultores, pintores y más.
      </>
    ),
  };

  const desktopTexts = {
    comunidad: (
      <>
        Los invito explorar una nueva dimensión en colores, marcando al tono; donde la comunicación converge con la creatividad.
          <br />
          <br /> {mobileTexts.comunidad}
      </>
    ),
    creaciones: (
      <>
        {mobileTexts.creaciones}
        <br />
        <br /> Les invito a explorar mi mundo a través de la fotografía, donde
        cada captura es una expresión única de mi creatividad y visión.
      </>
    ),

    voces: <>{mobileTexts.voces}</>,
  };

  const boldTexts = {
    comunidad: (
      <>
        ¡Cada día es una oportunidad para aprender, compartir, rememorar y
        celebrar la riqueza del arte!
      </>
    ),

    creaciones: (
      <>
    
      </>
    ),

    voces: (
      <>
        Descubrimos las fascinantes narrativas detrás de cada obra, llevando luz
        a la diversidad del mundo artístico.
      </>
    ),
  };

  const normalText = isDesktop ? desktopTexts[section] : mobileTexts[section];
  const boldTextContent = boldTexts[section];

  return <>
  {!boldText && normalText}
  {boldText && boldTextContent}
  </>;
};

export default HeroTexts;
