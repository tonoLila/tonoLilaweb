import styles from "@styles/markers.module.css";

const Markers = ({ sections, currentSection }) => {
  return (
    <div className={styles.markers_container}>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`${styles.marker} ${
            currentSection === section ? styles.active : ""
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Markers;
