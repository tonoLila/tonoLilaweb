import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@styles/gallery.module.css";
import { images } from "@galleryImages";

const Gallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["75%", "-30%"]);

  return (
    <section className={styles.horizontal_gallery_section} ref={targetRef}>
      <div className={styles.horizontal_gallery_container}>
        <motion.div
          className={styles.horizontal_gallery_images}
          style={{ x, transition: { duration: 0.3 } }}
        >
          {images.map((image, index) => {
            return (
              <motion.div
                key={index}
                className={`${image.class_name} ${styles.image_wrapper}`}
              >
                <img src={`/gallery/${image.img}`} alt={`Image ${image.img}`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
