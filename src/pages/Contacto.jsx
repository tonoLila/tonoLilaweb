import React from "react";
import styles from "@styles/contact.module.css";
import MyForm from "@components/MyForm";

const Contacto = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.container}>
        <h1 className={styles.contact_title}> ¡Hagamos Arte!</h1>
      </div>
      <div className={styles.contact_form}>
        <h3 className={styles.form_title}>Transforma Momentos en Recuerdos</h3>
        <p className={styles.form_text}>
          Cada momento cuenta una historia. Permiteme capturar la tuya de la
          manera más hermosa.
          <br />
          ¡Contáctame y empecemos a crear recuerdos eternos!
        </p>
        <MyForm />
      </div>
    </div>
  );
};

export default Contacto;
