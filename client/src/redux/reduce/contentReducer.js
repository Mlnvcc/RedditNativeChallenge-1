import {
  GET_CONTENT_START,
  POST_CREATE,
  SET_LIKE_ADD,
  SET_DISLIKE_ADD,
  CREATE_COMMENT,
  CREATE_COMMENT_TO_COMMENT,
  EDIT_POST,
  DELETE_POST,
} from "../types/content";

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
      const comment = payload.data;
      const mainId = payload.description.mainId;
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

    case EDIT_POST: {
      const newState = state.map(el=> el._id === payload._id ? payload : el)
      return newState;
    }

    case DELETE_POST: {
      const {id} = payload
      console.log('=========', payload);
      const newPostState = state.filter(el => el.id !== id)
      return newPostState
    }

    default:
      return state;
  }
};
export default contentReducer;
