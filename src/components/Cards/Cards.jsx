import Card from "../Card/Card";
import Info from "../InfoInicial/Info";
import styles from "./Cards.module.css";

export default function Cards({characters, onClose}) {
 
  
  return (
    <div style={{display:"flex", flexWrap: "wrap", justifyContent:"space-between", marginLeft:"30px", marginRight:"30px"}}>
      {!characters.length ? <Info /> : characters.map((card, index) => (
        <Card className={styles.container}
          key={card.id}
          id = {card.id}
          name={card.name}
          species={card.species}
          gender={card.gender}
          image={card.image}
          onClose={() => onClose(card.id)}
        />
      ))}
    </div>
  );
}
