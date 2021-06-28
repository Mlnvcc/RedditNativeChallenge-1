import { GET_CONTENT_START, POST_CREATE, LIKE_ADD } from "../types/content";
import { CREATE_COMMENT } from "../types/comment";

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
    case LIKE_ADD: {
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
    default:
      return state;
  }
};
export default contentReducer;
