import { GET_CONTENT_START, POST_CREATE } from "../types/content";
import { CREATE_COMMENT } from "../types/comment";

const contentReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CONTENT_START: {
      return [...state, ...payload];
    }
    case POST_CREATE: {
      return [...state, payload];
    }
    case CREATE_COMMENT: {
      const { text, autorId, postId } = payload;
      console.log(text);
      console.log(postId);
      // return [
      //   ...state.map(el =>
      //     el._id == postId
      //       ? {
      //           ...el,
      //           comments: [...el.comments.push({ text: text, autor: autorId })],
      //         }
      //       : el
      //   ),
      // ];
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
