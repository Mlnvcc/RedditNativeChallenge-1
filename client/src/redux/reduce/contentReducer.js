import {
  GET_CONTENT_START,
  POST_CREATE,
  SET_LIKE_ADD,
  SET_DISLIKE_ADD,
  CREATE_COMMENT,
  CREATE_COMMENT_TO_COMMENT,
} from "../types/content";

const initialState = [];

const contentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log("REDUCER PAYLOAD", payload);
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
      console.log("PAYLOAD", payload);
      const { postId } = payload.description;
      console.log(state);
      console.log(postId);
      return state.map(el =>
        el._id === postId
          ? { ...el, comments: [...el.comments, { ...payload.data }] }
          : el
      );
    }
    case CREATE_COMMENT_TO_COMMENT: {
      const comment = payload.data;
      // console.log(1, comment);
      const mainId = payload.description.mainId;
      // console.log(2, mainId);
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
