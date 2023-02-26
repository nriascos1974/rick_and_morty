import Card from "../Card/Card";

export default function Cards({characters, onClose}) {
  //const { characters } = props;
  
  return (
    <div style={{display:"flex", flexWrap: "wrap", justifyContent:"space-around"}}>
      {characters.map((card, index) => (
        <Card style={{flexbasis: '20%'}}
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
