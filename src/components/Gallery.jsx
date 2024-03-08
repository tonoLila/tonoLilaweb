import { useRef,useEffect } from "react";
import { motion, useScroll, useTransform, useVelocity } from "framer-motion";
import styles from "@styles/gallery.module.css";
import { images } from "@utils";

const Gallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });


  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-30%"]);

  return (
    <div>
      <section className={styles.gallery_section} ref={targetRef}>
        <div className={styles.gallery_container}>
          <motion.div className={styles.image_wrapper} style={{ x , transition: { duration: 0.3 }}}>
            {images.map((image, index) => (
              <img
                className={styles.image}
                key={index}
                src={`/gallery/${image}`}
                alt={`Image ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
