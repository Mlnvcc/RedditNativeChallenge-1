import { GET_CONTENT_START, POST_CREATE, LIKE_ADD } from "../types/content";

const contentReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CONTENT_START: {
      return [...state, ...payload];
    }
    case POST_CREATE: {
      return [...state, payload];
    }
    case LIKE_ADD: {
      return [...state, payload]
    }
    default:
      return state;
  }
};
export default contentReducer;
