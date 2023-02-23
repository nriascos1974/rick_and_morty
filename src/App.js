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
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
