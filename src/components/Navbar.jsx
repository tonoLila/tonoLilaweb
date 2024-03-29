import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Burger from "@components/Burger";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import styles from "@styles/navbar.module.css";

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const {scrollY} = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
    <motion.nav
      className={styles.nav}
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <Link to="/" className={styles.logo}>
        Tono Lila
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
    </motion.nav>
  );
};

export default Navbar;
