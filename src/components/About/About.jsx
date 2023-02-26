import React from "react";
import yo from "../../images/yo.png";
import styles from "./About.module.css";

function About() {
  return (
    <div>
      <h1 style={{ color: "white", textAlign: "left", marginLeft: "70px" }}>
        About
      </h1>
      <div className={styles.foto}>
        <img className={styles.image} src={yo} />
        <p style={{width:'40%', textAlign:"justify"}}>Yo soy <strong>Nestor Jair Riascos Mosquera</strong>, Ingeniero de Sistemas, vivo en la ciudad de Medellín, Antioquia - Colombia. Desarrollador de esta Aplicación. </p>
      </div>
      <p style={{ color: "white", textAlign: "center", marginLeft: "40px" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quam
        possimus laudantium doloribus ut excepturi, aliquid tenetur, cum saepe
        natus optio veritatis odit dolorem cumque amet quas iure iste ullam quod
        incidunt magni asperiores sapiente aspernatur. Eligendi unde magnam iure
        non commodi illum quia sunt molestiae, reprehenderit optio sint ullam
        deleniti illo harum voluptatem aut provident architecto praesentium
        quae? Veritatis id in qui, similique fugiat cupiditate voluptatem
        corrupti veniam perferendis quis? Maiores eos veritatis vel magni id
        quibusdam perferendis repellendus, pariatur et molestiae excepturi a
        aliquam fugiat reiciendis, accusamus suscipit! Reprehenderit porro,
        perferendis iusto quam culpa sapiente neque nulla omnis accusantium
        alias eaque corporis excepturi aspernatur nesciunt? Explicabo neque amet
        sequi recusandae est, officia perspiciatis reiciendis vero ipsa corrupti
        error odio obcaecati illum, ratione quibusdam accusantium, nemo natus
        optio facere architecto mollitia voluptatem debitis. Consequuntur nisi
        vitae suscipit reiciendis nostrum, vel quod saepe esse aliquid, ullam
        modi fuga, hic velit!
      </p>
    </div>
  );
}

export default About;
