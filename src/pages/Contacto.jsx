import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import styles from "@styles/contact.module.css";
import MyForm from "@components/MyForm";

const Contacto = () => {
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0)");
  const formRef = useRef(null);
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxOpacity = 1;
      const newOpacity = Math.min(1, scrollPosition / 400) * maxOpacity;
      setBgColor(`rgba(0, 0, 0, ${newOpacity})`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.contact_container}>
      <div className={styles.container} style={{ backgroundColor: bgColor }}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.contact_button}
          onClick={scrollToForm}
        >
          <h1 className={styles.contact_title}> ¡Hagamos Arte!</h1>
        </motion.button>
      </div>
      <div ref={formRef} className={styles.contact_form}>
        <h3 className={styles.form_title}>Transforma Momentos en Recuerdos</h3>
        <p className={styles.form_text}>
          Cada momento cuenta una historia. Permíteme capturar la tuya de la
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
