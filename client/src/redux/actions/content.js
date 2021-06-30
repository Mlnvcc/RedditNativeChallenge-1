import apiService from "../../api/apiService";
import {
  GET_CONTENT_START,
  POST_CREATE,
  SET_LIKE_ADD,
  SET_DISLIKE_ADD,
  EDIT_POST,
  DELETE_POST,
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
const getPostEdit = payload => ({type: EDIT_POST, payload})
const getPostDelete = payload => ({type: DELETE_POST, payload})

export const getContent = () => async dispatch => {
  apiService
    .get("/post")
    .then(({ data }) => dispatch(getContentStart(data.Posts)));
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
};

export const addDislike = (idUser, idPost) => async dispatch => {
  apiService
    .patch("/post/dislikes", { idUser, idPost })
    .then(({ data }) => dispatch(setDislike(data.currPost)));
};

export const editPost = post => async dispatch => {
  apiService
  .patch('/post/edit', {post})
  .then(({data}) => dispatch(getPostEdit(data)))
}

export const deletePost = id => async dispatch => {
  apiService
  .delete('/post/delete', {id})
  .then(({data}) => dispatch(getPostDelete(data)))
}
