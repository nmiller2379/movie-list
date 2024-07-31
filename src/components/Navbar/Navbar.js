import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/movies"> Movies</NavLink>
      <NavLink to="/form"> New Movie</NavLink>
    </nav>
  );
}
