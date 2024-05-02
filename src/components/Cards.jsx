import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import styles from "@styles/cards.module.css";

const Cards = ({ imageUrl, text, link }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleHover = async () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsHovered(true);
      await controls.start({
        filter: "none",
        rotateY: 180,
        scaleX: -1,
      });
      setIsAnimating(false);
    }
  };
  const handleLeave = () => {
    setIsHovered(false);
    controls.start({
      filter: "grayscale(100%)",
      rotateY: 0,
      scaleX: 1,
    });
  };
  return (
    <a
      href={`https://www.youtube.com/@${link}`}
      className={styles.card}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className={styles.card}>
        <div className={styles.image_container}>
          <motion.img
            src={`/voces/${imageUrl}.jpg`}
            alt="Card image"
            className={styles.card_image}
            initial={{ filter: "grayscale(100%)" }}
            animate={controls}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div
          className={styles.text_container}
          style={{
            opacity: isHovered ? 1 : 0,
            transitionDelay: isHovered ? "0.2s" : "0s",
          }}
        >
          <motion.p className={styles.card_text}>{text}</motion.p>
        </div>
      </div>
    </a>
  );
};

export default Cards;
