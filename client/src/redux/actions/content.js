import apiService from "../../api/apiService";
import {
  GET_CONTENT_START,
  POST_CREATE,
  SET_LIKE_ADD,
  SET_DISLIKE_ADD,
  EDIT_POST,
  DELETE_POST,
  CREATE_COMMENT,
  CREATE_COMMENT_TO_COMMENT,
  SET_DISLIKE_TO_COMMENT,
  SET_LIKE_TO_COMMENT,
  DISABLE_LOADER,
  ENABLE_LOADER,
} from "../types/content";

const enableLoader = () => ({ type: ENABLE_LOADER });
const disableLoader = () => ({ type: DISABLE_LOADER });

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
const getPostEdit = payload => ({ type: EDIT_POST, payload });
const getPostDelete = payload => ({ type: DELETE_POST, payload });

const getCommentCreate = payload => ({ type: CREATE_COMMENT, payload });
const getComToComtCreate = payload => ({
  type: CREATE_COMMENT_TO_COMMENT,
  payload,
});

const setLikeToComment = currComment => ({
  type: SET_LIKE_TO_COMMENT,
  payload: currComment,
});
const setDislikeToComment = currComment => ({
  type: SET_DISLIKE_TO_COMMENT,
  payload: currComment,
});

export const getContent = () => async dispatch => {
  dispatch(enableLoader());

  apiService.get("/post").then(response => {
    dispatch(getContentStart(response.data));
  });

  dispatch(disableLoader());
};

export const createPost = description => async dispatch => {
  apiService.post("/post/add", description).then(({ data }) => {
    console.log("createPostDATA", data);
    dispatch(getPostCreate(data));
  });
};

export const addLike = (idUser, idPost) => async dispatch => {
  console.log("addLike", { idUser, idPost });
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
    .patch("/post/edit", { post })
    .then(({ data }) => dispatch(getPostEdit(data)));
};

export const deletePost = id => async dispatch => {
  apiService
    .delete("/post/delete", { data: { id } })
    .then(({ data }) => dispatch(getPostDelete(data)));
};

export const createComMain = description => async dispatch => {
  apiService.post("/comment/add", description).then(({ data }) => {
    dispatch(getCommentCreate({ data, description }));
  });
};

export const createComToCom = description => async dispatch => {
  apiService.post("/comment/addcomtocom", description).then(({ data }) => {
    console.log("DATA", data, description);
    dispatch(getComToComtCreate({ data, description }));
  });
};

export const addLikeComment = (userId, commentId) => async dispatch => {
  apiService
    .patch("/post/likescomment", { userId, commentId })
    .then(({ data }) => {
      console.log("11DATA", data);
      dispatch(setLikeToComment(data.currComment));
    });
};

export const addDislikeComment = (userId, commentId) => async dispatch => {
  apiService
    .patch("/post/dislikescomment", { userId, commentId })
    .then(({ data }) => dispatch(setDislikeToComment(data.currComment)));
};
