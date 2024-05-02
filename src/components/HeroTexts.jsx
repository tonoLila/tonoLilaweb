import Style from "@styles/hero.module.css";

const HeroTexts = ({ section }) => {
  const texts = {
    comunidad: (
      <>
        Curiosidades y efemérides. Exploremos juntos!
        <br /> Cada día es una oportunidad para aprender,
        <br />
        compartir y celebrar lo maravilloso que es el <span className={Style.bold}>Arte!</span>
      </>
    ),
    creaciones: (
      <>
        Los invito a explorar una nueva dimensión en colores,
        <br /> marcando al tono; donde la comunicación
        <br /> converge en juego con la <span className={Style.bold}>creatividad</span>.
      </>
    ),
    voces: (
      <>
        En este espacio ponemos en palabras
         vivencias de distintos artistas. Descubrimos sus narrativas
        <br />y la importancia del mundo artístico.
      </>
    ),
  };

  return <>{texts[section]}</>;
};

export default HeroTexts;
