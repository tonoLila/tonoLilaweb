import React from "react";

const WheelControls = ({ onPrev, onNext }) => {
  return (
    <>
      <button onClick={onPrev}>&lt;Prev</button>
      <button onClick={onNext}>Next&gt;</button>
    </>
  );
};

export default WheelControls;
