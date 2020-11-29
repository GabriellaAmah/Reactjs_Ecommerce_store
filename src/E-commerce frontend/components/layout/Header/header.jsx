import React, { useState } from "react";
import Navigation from "../Nav/Nav";
import NavBrand from "../Nav/NavBrand";
import "./header.css";
import Menu from "../hamburger/menu";

export const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  const handleClick = () => {
    setShowHamburger(!showHamburger)
  };

  return (
    <div>
      <div className="header">
        <NavBrand />
        <Navigation handleClick={handleClick} />
      </div>
      <div>
      {showHamburger === true ?  <Menu handleClick={handleClick} /> : ""}
      </div>
    </div>
  );
};
