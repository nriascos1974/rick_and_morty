import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [character, setCaracter] = useState("");



  return (
    <div className={style.busqueda}>
      <input
        value={character}
        onChange={(e) => setCaracter(e.target.value)}
        className={style.input}
        type="search"
        placeholder="Agregar…"
      />
      <button className={style.Button} onClick={() => onSearch(character)}>
        Agregar
      </button>
    </div>
  );
}
