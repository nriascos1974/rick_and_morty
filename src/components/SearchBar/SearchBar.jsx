import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [character, setCaracter] = useState("");

  /* function ramdom() {
    const characterRandom = Math.floor(Math.random() *826)
    setCaracter(characterRandom,console.log(character))
    return character
  } */


  return (
    <div className={style.busqueda}>
      {/* <button className={style.Button} onClick={ramdom}>
        Random
      </button>
      <br /> */}  
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
