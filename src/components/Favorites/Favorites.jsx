import Card from "../Card/Card";
import { connect } from "react-redux";

export function Favorites({characters, onClose, myFavorites}) {
 
  
  return (
    <div style={{display:"flex", flexWrap: "wrap", justifyContent:"space-around"}}>
      {myFavorites.map((card, index) => (
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

export const mapStateToProps = (state) => {
    return { myFavorites: state.myFavorites };
  };
  
export default connect(mapStateToProps, null)(Favorites);
  

