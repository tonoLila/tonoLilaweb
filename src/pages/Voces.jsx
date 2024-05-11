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
        <h2 className={styles.sub_title}>Entrevistas:</h2>
        <section className={styles.cards_container}>
          <div className={styles.first_card}>
            <Cards imageUrl="1" text="Música" link="tonolila" />
          </div>
          <div className={styles.second_card}>
            <Cards imageUrl="2" text="Diseño" link="tonolila" />
          </div>
          <div className={styles.third_card}>
            <Cards imageUrl="3" text="Otras" link="tonolila" />
          </div>
          <div className={styles.fourth_card}>
            <Cards imageUrl="4" text="Artes visuales" link="tonolila" />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default transition(voces);
