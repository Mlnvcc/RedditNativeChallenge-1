import { GET_CONTENT_START } from "../types/";

const getContentStart = payload => ({ type: GET_CONTENT_START, payload });
export const getGame = () => async dispatch => {
  const response = await fetch("http://localhost:8080/main");
  const game = await response.json();

  dispatch(getContentStart(game));
};
