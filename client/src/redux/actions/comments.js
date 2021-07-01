// import {
//   CREATE_COMMENT,
//   CREATE_COMMENT_TO_COMMENT,
//   SET_LIKE_TO_COMMENT,
//   SET_DISLIKE_TO_COMMENT,
// } from "../types/comment";
// import apiService from "../../api/apiService";

// const getCommentCreate = payload => ({ type: CREATE_COMMENT, payload });
// const getComToComtCreate = payload => ({
//   type: CREATE_COMMENT_TO_COMMENT,
//   payload,
// });

// const setLikeToComment = currComment => ({
//   type: SET_LIKE_TO_COMMENT,
//   payload: currComment,
// });
// const setDislikeToComment = currComment => ({
//   type: SET_DISLIKE_TO_COMMENT,
//   payload: currComment,
// });

// export const createComMain = description => async dispatch => {
//   apiService.post("/comment/add", description).then(({ data }) => {
//     dispatch(getCommentCreate({ data, description }));
//   });
// };

// export const createComToCom = description => async dispatch => {
//   apiService.post("/comment/addcomtocom", description).then(({ data }) => {
//     console.log("DATA", data, description);
//     dispatch(getComToComtCreate({ data, description }));
//   });
// };

// export const addLikeComment = (userId, commentId) => async dispatch => {
//   apiService
//     .patch("/post/likescomment", { userId, commentId })
//     .then(({ data }) => dispatch(setLikeToComment(data.currPost)));
// };

// export const addDislikeComment = (userId, commentId) => async dispatch => {
//   apiService
//     .patch("/post/dislikescomment", { userId, commentId })
//     .then(({ data }) => dispatch(setDislikeToComment(data.currPost)));
// };
