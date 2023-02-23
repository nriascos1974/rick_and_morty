import Card from "../Card/Card";

export default function Cards(props) {
  const { characters } = props;
  
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
      {characters.map((card, index) => (
        <Card 
          key={index}
          name={card.name}
          species={card.species}
          gender={card.gender}
          image={card.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      ))}
    </div>
  );
}
