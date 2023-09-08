import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    navigate("/");
  };

  return (
    <div className={style.nav}>
      <div>
        <NavLink className={style.links} to="/welcome">
          Home
        </NavLink>
        <NavLink className={style.links} to="/contact">
          Contact Us
        </NavLink>
        <NavLink className={style.links} to="/todo">
          Todo
        </NavLink>
      </div>
      <div className={style.logout_div}>
        <NavLink onClick={handleLogout} className={style.logout} to="/">
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
