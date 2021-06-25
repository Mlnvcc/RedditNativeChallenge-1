import { GET_CONTENT_START } from "../types/content";

const getContentStart = payload => ({ type: GET_CONTENT_START, payload });

export const getContent = () => async dispatch => {
  const response = await fetch("http://localhost:8080/post");
  console.log(response);
  const data = await response.json();
  const post = data.Posts;

  dispatch(getContentStart(post));
};
