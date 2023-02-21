import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  
  return (
    <>
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
    </>
  );
}
