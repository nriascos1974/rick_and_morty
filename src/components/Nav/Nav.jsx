import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

function Nav({ onSearch }) {
  return (
    <nav className={styles.Nav}>
      <div className={styles.navLink}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? styles.active : styles.disable
          }
        >
          <span>
            <strong>Home</strong>
          </span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.active : styles.disable
          }
        >
          <span>
            <strong>About</strong>
          </span>
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? styles.active : styles.disable
          }
        >
          <span>
            <strong>Favorites</strong>
          </span>
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : styles.disable
          }
        >
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
