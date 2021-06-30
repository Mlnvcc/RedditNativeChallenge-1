import apiService from "../../api/apiService";
import {
  GET_CONTENT_START,
  POST_CREATE,
  SET_LIKE_ADD,
  SET_DISLIKE_ADD,
  AUTHOR_GET,
} from "../types/content";

const getContentStart = payload => ({ type: GET_CONTENT_START, payload });
const getPostCreate = payload => ({ type: POST_CREATE, payload });
const setLike = currPost => ({
  type: SET_LIKE_ADD,
  payload: currPost,
});
const setDislike = currPost => ({
  type: SET_DISLIKE_ADD,
  payload: currPost,
});

export const getContent = () => async dispatch => {
  apiService
    .get("/post")
    .then(({ data }) => dispatch(getContentStart(data.posts)));
};

export const createPost = description => async dispatch => {
  apiService
    .post("/post/add", description)
    .then(({ data }) => dispatch(getPostCreate(data)));
};

export const addLike = (idUser, idPost) => async dispatch => {
  apiService
    .patch("/post/likes", { idUser, idPost })
    .then(({ data }) => dispatch(setLike(data.currPost)));

  // const response = await fetch("http://localhost:8080/post/likes", {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ idUser, idPost }),
  // });
  // const res = await response.json();
  // const { currPost } = res;
  // return dispatch({
  //   type: LIKE_ADD,
  //   payload: currPost,
  // });
};

export const addDislike = (idUser, idPost) => async dispatch => {
  apiService
    .patch("/post/dislikes", { idUser, idPost })
    .then(({ data }) => dispatch(setDislike(data.currPost)));
};
