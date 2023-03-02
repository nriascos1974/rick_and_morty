import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards, unfilterCards } from "../../redux/actions";

export function Favorites({ characters, onClose, myFavorites }) {
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    const order = event.target.value;
    dispatch(orderCards(order));
  };

  const handlerFilter = (event) => {
    const filter = event.target.value;
    if (filter === "All") dispatch(unfilterCards())
    else dispatch(filterCards(filter))
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <div>
        <select onChange={handlerOrder} name="order">
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlerFilter} name="filter">
          <option value="All">All</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Male">Male</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {myFavorites.map((card, index) => (
        <Card
          style={{ flexbasis: "20%" }}
          key={card.id}
          id={card.id}
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
