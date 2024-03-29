import React from "react";
import HorizontalCarousel from "@components/HorizontalCarousel";

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

export default Tienda;
