import React from "react";
import yo from "../../images/yo.png";
import git from "../../images/icon-git.png";
import ig from "../../images/icon-ig.png";
import linkin from "../../images/icon-in.png";
import styles from "./About.module.css";


function About() {
  return (
    <div>
      <h1 style={{ color: "white", textAlign: "left", marginLeft: "70px" }}>
        About
      </h1>
      <div className={styles.foto}>
        <div>
          <img className={styles.image} src={yo} alt="" />
        </div>
        <div>
          <p style={{ width: "20%", textAlign: "justify" }}>
            Yo soy <strong>Nestor Jair Riascos Mosquera</strong>, Ingeniero de
            Sistemas, proximamente Desarrollador Fullstack (SoyHenry), vivo en la ciudad de Medellín, Antioquia - Colombia. 
            <br /><br />
            
              <li>
                <a href="https://www.linkedin.com/in/nestor-j-riascos-m-37b58622a/" target="_blank">
                  <img className={styles.git} src={linkin} alt="linkin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/nriascos1974" target="_blank">
                  <img className={styles.git} src={git} alt="git" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/nestor_riascos/" target="_blank">
                  <img className={styles.git} src={ig} alt="ig" />
                </a>
              </li>
          
          </p>
        </div>
      </div>
      <p style={{ color: "white", textAlign: "left", marginLeft: "40px", fontSize:"20px" }}>
        Desarrollo realizado aplicando los conocimientos adquiridos en el Módulo 2 Bootcamp <strong>SoyHenry</strong>.
        <br /><br />
        Esta aplicación ha sido desarrorrada con:
        <ul>
          <li>React</li>
          <li>React-Redux</li>
          <li>CSS</li>
          <li>JavaScript ES6</li>
          <li>Componentes de Clase y de Función</li>
          <li>Consumo de API con Fetch y Axios</li>
          <li>Hooks</li>
        </ul>
      </p>
    </div>
  );
}

export default About;
