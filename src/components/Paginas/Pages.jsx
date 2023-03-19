import React, { useState, useEffect } from "react";
import axios from "axios";
import cargando from "../../images/rickgirando.gif";
import styles from "./Pages.module.css";

export default function Pages() {
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCharacters = async () => {
    if (location) {
      setIsLoading(true);
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location/${location}`
      );
      const residents = response.data.residents;
      const promesaCharacters = residents.map((urlCharacter) =>
        axios.get(urlCharacter)
      );
      const responses = await Promise.all(promesaCharacters);
      responses.forEach((response) =>
        setCharacters((oldChars) => [...oldChars, response.data])
      );
    }
    setIsLoading(false);
  };

  const fetchLocations = async () => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/location?page=${page}`
    );
    setLocations(response.data.results);
  };

  useEffect(() => {
    fetchCharacters();
    setCharacters([]);
  }, [location]);

  useEffect(() => {
    fetchLocations();
  }, [page]);

  return (
    <div >
      <div className={styles.Nav}>
        
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={`${styles.Button} ${styles["Button-anterior"]}`}
        ></button>
        <select
          className={styles.input}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === 126}
          className={`${styles.Button} ${styles["Button-siguiente"]}`}
        ></button>
      </div>
      {isLoading ? (
        <div>
          <img className={styles.Cargando} src={cargando} alt="cargando..." />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {characters.length ? (
            characters.map((card) => (
              <div className={styles.container}>
                <div className={styles.dataContainer}>
                  <img
                    className={styles.image}
                    src={card.image}
                    alt={card.name}
                  />
                  <h2 className={styles.name}>{card.name}</h2>
                </div>
                <div className={styles.SG}>
                  <h4>{card.species}</h4>
                  <h4>{card.gender}</h4>
                </div>
                <h5>Id: {card.id}</h5>
                <h5>Origin: {card.origin?.name}</h5>
                <h5>Location: {card.location?.name}</h5>
              </div>
            ))
          ) : null}
        </div>
      )}
    </div>
  );
}
