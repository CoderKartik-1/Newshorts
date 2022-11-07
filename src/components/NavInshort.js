import React from "react";
import "./NavInshort.css";
import HamburgerDrawer from "./HamburgerDrawer";

const NavInshort = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HamburgerDrawer setCategory={setCategory} />
      </div>

      <img
        style={{ cursor: "pointer" }}
        src="https://i.ibb.co/FVnwB8Q/Brand-logo-news-shorts.png"
        height="80%"
        alt="logo"
      />
    </div>
  );
};

export default NavInshort;
