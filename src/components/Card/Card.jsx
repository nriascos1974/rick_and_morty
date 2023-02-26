import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, species, gender, image, onClose }) {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.dataContainer}>
        <Link to={`/detail/${id}`}>
          <img className={styles.image} src={image} alt={name} />
          <h2 className={styles.name}>{name}</h2>
        </Link>
      </div>
      <div className={styles.SG}>
        <h4>{species}</h4>
        <h4>{gender}</h4>
      </div>
    </div>
  );
}
