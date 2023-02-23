import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from "./Nav.module.css";

function Nav({onSearch}) {
  return (
    <nav className={styles.Nav}>
      <SearchBar onSearch={onSearch} />
    </nav>
  )
}

export default Nav
