import React from "react";
import styles from "./Card.module.css";

export default function Card({ name, species, gender, image, onClose }) {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={onClose}>X</button>
      </div>

      <div className={styles.dataContainer}>
        <img className={styles.image} src={image} alt="" />
        <h2 className={styles.name}>{name}</h2>
      </div>
      <div className={styles.SG}>
        <h4>{species}</h4>
        <h4>{gender}</h4>
      </div>
    </div>
  );
}
