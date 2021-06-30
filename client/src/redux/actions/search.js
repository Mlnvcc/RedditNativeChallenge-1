import apiService from "../../api/apiService";
import { SEARCH_INIT } from "../types/search";

export const searchInit = (sesrchText, searchTag) => async dispatch => {
  apiService
    .post("http://localhost:8080/search", { sesrchText, searchTag })
    .then(res => dispatch({ type: SEARCH_INIT, payload: res.data }));
};
