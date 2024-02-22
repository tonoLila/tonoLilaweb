import React, { useState } from "react";
import "../../styles/hamburgers.css";
import "../../styles/navbar.css";
import { NavLink } from "react-router-dom";

const Burger = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  const handleItemClick = () => {
    setIsActive(false);
  };

  const navItems = [
    <NavLink to="/aboutme" className="nav-item" key="aboutme" onClick={handleItemClick}>
      Quien soy?
    </NavLink>,
    <NavLink to="/tienda" className="nav-item" key="tienda" onClick={handleItemClick}>
      Tienda
    </NavLink>,
    <NavLink to="/contacto" className="nav-item button" key="contacto" onClick={handleItemClick}>
      ¡Hagamos arte!
    </NavLink>,
  ];

  return (
    <>
      <button
        className={`hamburger hamburger--spin ${isActive ? "is-active" : ""}`}
        type="button"
        onClick={handleMenuToggle}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      {isActive && (
        <div className="nav-menu">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Burger;
