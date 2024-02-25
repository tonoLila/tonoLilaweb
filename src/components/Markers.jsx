import "@styles/markers.css";

const Markers = ({ sections, currentSection }) => {
  return (
    <div className="markers-container">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`marker ${currentSection === section ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default Markers;
