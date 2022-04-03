import React from "react";
import { NavLink } from "react-router-dom";
import IMAGES from "./image";
export default function Header() {
  return (
    <header>
      <nav>
        <figure>
          <NavLink to="/">
            <img src={IMAGES.Logo} alt="Logo" />
          </NavLink>
        </figure>
        <ul className="nav-links">
          <NavLink exact activeClassName="active" to="/">
            <li>Home</li>
          </NavLink>
          <NavLink exact activeClassName="active" to="/TodoMain" title="To do list">
            <li>To do list</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
