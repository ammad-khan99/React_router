import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? "blueviolet" : "rgb(13, 131, 209)",
      "text-decoration": isActive ? "underline" : "none",
    };
  };

  return (
    <div className={style.nav}>
      <div>
        <NavLink style={navStyle} className={style.links} to="/welcome">
          Home
        </NavLink>
        <NavLink style={navStyle} className={style.links} to="/contact">
          Contact Us
        </NavLink>
        <NavLink style={navStyle} className={style.links} to="/todo">
          Todo
        </NavLink>
      </div>
      <div className={style.logout_div}>
        <NavLink className={style.logout} to="/">
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
