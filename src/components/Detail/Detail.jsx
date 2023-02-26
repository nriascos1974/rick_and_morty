import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { TfiControlBackward } from "react-icons/tfi";

function Detail(props) {
  const { detailId } = useParams();

  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const API_KEY = "c9c4684eb62f.3cbe7e7fb6376e8e878d";

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`${URL_BASE}/character/${detailId}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.container}>
        <Link to={"/home"}>
          <button className={styles.Button}><TfiControlBackward/></button>
        </Link>
        <div className={styles.infoContainer}>
          <h3>Status: {character.status}</h3>
          <h3>Species: {character.species}</h3>
          <h3>Gender: {character.gender}</h3>
          {character.origin && <h3>Origin: {character.origin.name}</h3>}
          {character.location && <h3>Location: {character.location.name}</h3>}
        </div>
        <div >
          <h1 style={{fontSize:'30px'}}>{character.name}</h1>
          <img className={styles.image} src={character.image} alt={character.name}></img>
        </div>
      </div>
    </div>
  );
}

export default Detail;
