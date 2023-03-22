import React from "react";
import styles from "./Info.module.css";

function Info() {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <p style={{ width: "100%", textAlign: "justify" }}>
            No hay Characters, puedes adicionar uno ingresando un código entre 1
            y 826, luego presiona el botón <button className={`${styles.Button} ${styles["Button-add"]}`} />,
            también puede generar un Character aleatorio presionando el botón  <button className={`${styles.Button} ${styles["Button-random"]}`}/>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
