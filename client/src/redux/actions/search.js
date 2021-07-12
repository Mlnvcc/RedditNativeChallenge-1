import apiService from "../../api/apiService";
import { SEARCH_INIT } from "../types/search";

const host = "http://localhost:8080"; //main

export const searchInit = (sesrchText, searchTag) => async dispatch => {
  apiService
    .post(`/search`, { sesrchText, searchTag })
    .then(res => dispatch({ type: SEARCH_INIT, payload: res.data }));
};
