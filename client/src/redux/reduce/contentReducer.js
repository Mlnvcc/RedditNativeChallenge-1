<<<<<<< HEAD
import {
  GET_CONTENT_START,
  POST_CREATE,
  SET_LIKE_ADD,
  SET_DISLIKE_ADD,
} from "../types/content";
import { CREATE_COMMENT } from "../types/comment";
=======
import { GET_CONTENT_START, POST_CREATE, LIKE_ADD } from "../types/content";
import { CREATE_COMMENT, CREATE_COMMENT_TO_COMMENT } from "../types/comment";
>>>>>>> origin/db

const initialState = [];

const contentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CONTENT_START: {
      return payload;
    }
    case POST_CREATE: {
      return [...state, payload];
    }
    case SET_LIKE_ADD: {
      return state.map(el => (el._id === payload._id ? payload : el));
    }

    case SET_DISLIKE_ADD: {
      return state.map(el => (el._id === payload._id ? payload : el));
    }

    case CREATE_COMMENT: {
      const { text, autorId, postId } = payload;
      return state.map(el =>
        el._id == postId
          ? { ...el, comments: [...el.comments, { text, autor: autorId }] }
          : el
      );
    }
    case CREATE_COMMENT_TO_COMMENT: {
      console.log("ya tut");
      console.log(payload);
      const comment = payload.data;
      console.log("comment", comment);
      const mainId = payload.description.mainId;
      console.log("mainId", mainId);

      return state.map(el =>
        el._id == mainId
          ? {
              ...el,
              comments: [
                ...el.comments.map(el =>
                  el._id == payload.description.commentId
                    ? {
                        ...el,
                        comments: [...el.comments, comment],
                      }
                    : el
                ),
              ],
            }
          : el
      );
    }
    default:
      return state;
  }
};
export default contentReducer;
