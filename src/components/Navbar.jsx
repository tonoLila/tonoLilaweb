import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Burger from "@components/Burger";
import { motion } from "framer-motion";
import styles from "@styles/navbar.module.css";

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleItemClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    <Link
      to="/aboutme"
      className={styles.nav_item}
      key="aboutme"
      onClick={handleItemClick}
    >
      Quien soy?
    </Link>,
    <Link
      to="/tienda"
      className={styles.nav_item}
      key="tienda"
      onClick={handleItemClick}
    >
      Tienda
    </Link>,
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link
        to="/contacto"
        className={`${styles.nav_item} ${styles.button}`}
        key="contacto"
        onClick={handleItemClick}
      >
        ¡Hagamos arte!
      </Link>
      ,
    </motion.div>,
  ];

  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.logo}>
        Tono{" "}
        <motion.span
          style={{ textShadow: "0 0 5px #fff" }}
          animate={{
            textShadow: ["0 0 5px #fff", "0 0 15px #fff", "0 0 5px #fff"],
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          Lila
        </motion.span>
      </Link>
      {!isDesktop && <Burger />}
      {(isDesktop || isMenuOpen) && (
        <motion.div
          className={styles.nav_menu}
          initial={{ scale: 2, filter: "blur(10px)", opacity: 0 }}
          animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
          transition={{
            scale: { type: "tween", duration: 0.2, ease: "easeOut" },
          }}
        >
          <ul className={styles.nav_list}>
            {navItems.map((item, index) => (
              <li key={index} onClick={handleItemClick}>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
