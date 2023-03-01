import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/actions";

export function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFavorites,
  deleteFavorites,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = (event) => {
    if (isFav) {
      setIsFav(false);
      deleteFavorites(id);
    } else {
      setIsFav(true);
      addFavorites({ id, name, species, gender, image });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {isFav ? (
          <button className={styles.buttonFav} onClick={handleFavorite}>❤️</button>
        ) : (
          <button className={styles.buttonFav}  onClick={handleFavorite}>🤍</button>
        )}
        <button className={styles.buttonClose} onClick={onClose}>X</button>
      </div>
      <div className={styles.dataContainer}>
        <Link to={`/detail/${id}`}>
          <img className={styles.image} src={image} alt={name} />
          <h2 className={styles.name}>{name}</h2>
        </Link>
      </div>
      <div className={styles.SG}>
        <h4>{species}</h4>
        <h4>{gender}</h4>
      </div>
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (favorite) => dispatch(addFavorites(favorite)),
    deleteFavorites: (id) => dispatch(deleteFavorites(id)),
  };
};

export const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
