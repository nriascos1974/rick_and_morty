import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards, unfilterCards } from "../../redux/actions";
import "./Favorites.module.css";
import styles from "./Favorites.module.css";



export default function Favorites({ onClose }) {
  const dispatch = useDispatch();

  const myFavorites = useSelector(state => state.myFavorites);
  
  const handlerOrder = (event) => {
    const order = event.target.value;
    dispatch(orderCards(order));
  };

  const handlerFilter = (event) => {
    const filter = event.target.value;
    if (filter === "All") dispatch(unfilterCards());
    else dispatch(filterCards(filter));
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div className={styles.Nav}>
        <div>
          <select className={styles.input} onChange={handlerOrder} name="order">
            <option value="" selected disabled hidden>
              Choose here Order
            </option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
        </div>

        <div>
          <select
            className={styles.input}
            onChange={handlerFilter}
            name="filter"
          >
            <option value="" selected disabled hidden>
              Choose here Filter
            </option>
            <option value="All">All</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="Male">Male</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {myFavorites.map((card) => (
          <Card
            style={{ flexbasis: "20%" }}
            key={card.id}
            id={card.id}
            name={card.name}
            species={card.species}
            gender={card.gender}
            image={card.image}
            onClose={false}
          />
        ))}
      </div>
    </div>
  );
}
