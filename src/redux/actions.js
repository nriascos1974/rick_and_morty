import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  CLEAN_FAVORITE,
  FILTER,
  ORDER,
  UNFILTER,
} from "./type-actions";

export const addFavorites = (favorite) => {
  return {
    type: ADD_FAVORITE,
    payload: favorite,
  };
};
export const cleanFavorites = () => {
  return {
    type: CLEAN_FAVORITE,
  };
};

export const deleteFavorites = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
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