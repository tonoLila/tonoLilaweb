import React from "react";
import styles from "@styles/voces.module.css";
import transition from "@transition";
import Cards from "@components/Cards";
import Footer from "@components/Footer";

const voces = () => {
  return (
    <div className={styles.voces_container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Voces Artisticas</h1>
        <section className={styles.cards_container}>
          <div className={styles.first_card}>
            <Cards imageUrl="1" text="Entrevistas a músicos" link="voces" />
          </div>
          <div className={styles.second_card}>
            <Cards
              imageUrl="2"
              text="Entrevistas a artistas plasticos"
              link="voces"
            />
          </div>
          <div className={styles.third_card}>
            <Cards imageUrl="3" text="Otras entrevistas" link="voces" />
          </div>
          <div className={styles.fourth_card}>
            <Cards imageUrl="4" text="Entrevistas a escultores" link="voces" />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default transition(voces);
