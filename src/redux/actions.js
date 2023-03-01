import { ADD_FAVORITE, DELETE_FAVORITE } from "./type-actions";

export const addFavorites = (favorite) =>{
    return {
        type: ADD_FAVORITE,
        payload: favorite,
    }
}
export const deleteFavorites = (id) =>{
    return {
        type: DELETE_FAVORITE,
        payload: id,
    }
}