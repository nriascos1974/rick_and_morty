import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
 /*  CLEAN_FAVORITE, */
  FILTER,
  ORDER,
  UNFILTER,
  GET_FAVORITE,
} from "./type-actions";
import axios from "axios";

export const addFavorites = (favorite) => {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/rickandmorty/favs", favorite)
      .then((response) => {
        return dispatch({
          type: ADD_FAVORITE,
          payload: response.data,
        });
      });
  };
};

/* export const cleanFavorites = () => {
  return {
    type: CLEAN_FAVORITE,
  };
};
 */

export const getFavorites = () => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/rickandmorty/fav/`)
      .then((response) => {
        return dispatch({
          type: GET_FAVORITE,
          payload: response.data,
        });
      });
  };
};

export const deleteFavorites = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      .then((response) => {
        return dispatch({
          type: DELETE_FAVORITE,
          payload: response.data,
        });
      });
  };
  
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};

export const unfilterCards = () => {
  return {
    type: UNFILTER,
  };
};
