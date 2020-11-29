import React from "react";
import logo from "../../../assets/images/logo.png";
import "./nav.css";

const NavBrand = () => {
  return (
    <div className="brand">
      <div className="headerLogo">
        <img src={logo} alt="nav brand logo" />
      </div>
      <h3>Explore</h3>
    </div>
  );
};

export default NavBrand;
