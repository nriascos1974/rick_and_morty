import React from "react";

export default function Card({ name, species, gender, image, onClose }) {
  return (
    <div className="tarjetas">
      <div>
        <button className="button" onClick={onClose}>Cerrar</button>
        <h2>{name}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
