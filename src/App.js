import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
//import characters from "./data.js";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "c9c4684eb62f.3cbe7e7fb6376e8e878d";

    fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && (characters.findIndex(obj => obj.id === data.id ) === -1)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else if (characters.findIndex(obj => obj.id === data.id ) !== -1){
          window.alert("Ya fue Agregado el personajes con ese ID");
        }        
        else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(character) {
    console.log(characters)
    const filterCharacter = characters.filter((char) => char.id !== character);
    console.log(filterCharacter)
    setCharacters(filterCharacter);
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
