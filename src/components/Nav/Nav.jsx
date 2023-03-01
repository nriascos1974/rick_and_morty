import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

function Nav({ onSearch }) {
  return (
    <nav className={styles.Nav}>
      <div className={styles.navLink}>
        <NavLink to="/home">
          <span>
            <strong>Home</strong>
          </span>
        </NavLink>

        <NavLink to="/about">
          <span>
            <strong>About</strong>
          </span>
        </NavLink>

        <NavLink to="/favorites">
          <span>
            <strong>Favorites</strong>
          </span>
        </NavLink>

        <NavLink to="/">
          <span>
            <strong>Logout</strong>
          </span>
        </NavLink>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
