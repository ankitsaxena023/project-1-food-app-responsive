import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prev)=>!prev);
  };

  return (
    <>
      <div className={`navContainer ${isNavVisible ? "visible" : "hidden"}`}>
        <a href="#" className="navbarLink">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </a>
        <a href="#" className="navbarLink">
          <i className="fas fa-utensils"></i>
          <span>Meals</span>
        </a>
        <a href="#" className="navbarLink">
          <i className="fas fa-hamburger"></i>
          <span>Burger</span>
        </a>
        <a href="#" className="navbarLink">
          <i className="fas fa-pizza-slice"></i>
          <span>Pizza</span>
        </a>
        <a href="#" className="navbarLink">
          <i className="fas fa-blender-phone"></i>
          <span>Contact</span>
        </a>
      </div>
      <div
        className={`menu ${isNavVisible ? "menu-open" : ""}`}
        onClick={toggleNav}
      ></div>
    </>
  );
};

export default Navbar;
