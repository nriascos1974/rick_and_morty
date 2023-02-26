import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

function Nav({ onSearch }) {
  return (
    <nav className={styles.Nav}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginRight: "60%",
          fontSize:'20px',
          width:'20%'

        }}
      >
        <NavLink to="/home">
          <span><strong>Home</strong></span>
        </NavLink>

        <NavLink to="/about">
          <span><strong>About</strong></span>
        </NavLink>

        <NavLink to="/">
          <span><strong>Logout</strong></span>
        </NavLink>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
