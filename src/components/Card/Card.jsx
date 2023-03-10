import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/actions";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);

   const handleFavorite = (event) => {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorites(props.id);
    } else {
      setIsFav(true);
      props.addFavorites(props);
    }
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (Number(fav.id) === Number(props.id)) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {isFav
          ? props.onClose && (
              <button className={styles.buttonFav} onClick={handleFavorite}>
                ❤️
              </button>
            )
          : props.onClose && (
              <button className={styles.buttonFav} onClick={handleFavorite}>
                🤍
              </button>
            )}
        {props.onClose && (
          <button className={styles.buttonClose} onClick={props.onClose}>
            X
          </button>
        )}
      </div>
      <div className={styles.dataContainer}>
        <Link to={`/detail/${props.id}`}>
          <img className={styles.image} src={props.image} alt={props.name} />
          <h2 className={styles.name}>{props.name}</h2>
        </Link>
      </div>
      <div className={styles.SG}>
        <h4>{props.species}</h4>
        <h4>{props.gender}</h4>
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
