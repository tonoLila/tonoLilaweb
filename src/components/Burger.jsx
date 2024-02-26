import React, { useState } from "react";
import "@styles/hamburgers.css";
import styles from "@styles/navbar.module.css";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Burger = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  const handleItemClick = () => {
    setIsActive(false);
  };

  const navItems = [
    <NavLink
      to="/aboutme"
      className={styles.nav_item}
      key="aboutme"
      onClick={handleItemClick}
    >
      Quien soy?
    </NavLink>,
    <NavLink
      to="/tienda"
      className={styles.nav_item}
      key="tienda"
      onClick={handleItemClick}
    >
      Tienda
    </NavLink>,
    <NavLink
      to="/contacto"
      className={`${styles.nav_item} ${styles.button}`}
      key="contacto"
      onClick={handleItemClick}
    >
      ¡Hagamos arte!
    </NavLink>,
  ];

  return (
    <>
      <button
        className={`${styles.burger} hamburger hamburger--spin ${
          isActive ? styles["is-active"] : ""
        }`}
        type="button"
        onClick={handleMenuToggle}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className={styles.nav_menu}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className={styles.nav_list}>
              {navItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Burger;
