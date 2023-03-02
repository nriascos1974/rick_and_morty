import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  CLEAN_FAVORITE,
  FILTER,
  ORDER,
  UNFILTER,
} from "./type-actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAN_FAVORITE:
      return {
        ...state,
        myFavorites: [],
      };

    case FILTER:
      const { allCharacters } = state;
      const charactersFiltered = allCharacters.filter(
        (f) => f.gender === action.payload
      );

      return {
        ...state,
        myFavorites: charactersFiltered,
      };

    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? allCharacters.sort((a, b) => a.id < b.id)
            : allCharacters.sort((a, b) => a.id > b.id),
      };

    case UNFILTER:
      return {
        ...state,
        myFavorites: allCharacters,
      };

    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((f) => f.id !== action.payload),
      };

    default:
      return { ...state };
  }
};

export default reducer;
