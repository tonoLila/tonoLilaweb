import React from "react";
import HorizontalCarousel from "@components/HorizontalCarousel";
import transition from "@transition";

const Tienda = () => {
  return (
    <div>
      <HorizontalCarousel />
      <div
        style={{ height: "200vh", width: "100vw", backgroundColor: "red" }}
      />
    </div>
  );
};

export default transition(Tienda);
