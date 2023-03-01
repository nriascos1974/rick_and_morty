import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [character, setCaracter] = useState("");

  function random() {
    const characterRandom = Math.floor(Math.random() *826)
    setCaracter(characterRandom)

    return characterRandom
  }

  return (
    <div className={style.busqueda}>
      <button className={style.Button} onClick={() => onSearch("")}>
        Clean
      </button>
      
      <button className={style.Button} onClick={() => onSearch(random())}>
        Random
      </button>

      <input
        value={character}
        onChange={(e) => setCaracter(e.target.value)}
        className={style.input}
        type="search"
        placeholder="Search…"
      />
      
      <button className={style.Button} onClick={() => onSearch(character)}>
        Add
      </button>
    </div>
  );
}
