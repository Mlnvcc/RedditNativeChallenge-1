import apiService from "../../api/apiService";
import { GET_CONTENT_START, POST_CREATE, LIKE_ADD } from "../types/content";

const getContentStart = payload => ({ type: GET_CONTENT_START, payload });
const getPostCreate = payload => ({ type: POST_CREATE, payload });

const ip = { vlad: "192.168.1.140" };

export const getContent = () => async dispatch => {
  apiService
    .get("http://localhost:8080/post")
    .then(({ data }) => dispatch(getContentStart(data.Posts)));
};

export const createPost = description => async dispatch => {
  apiService
    .post("http://localhost:8080/post/add", description)
    .then(({ data }) => dispatch(getPostCreate(data)));
};

export const addLike = (idUser, idPost) => async dispatch => {
  const response = await fetch("http://localhost:8080/post/likes", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idUser, idPost }),
  });
  const res = await response.json();
  const { currPost } = res;
  return dispatch({
    type: LIKE_ADD,
    payload: currPost,
  });
};
