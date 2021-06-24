import { GET_CONTENT_START } from "../types/content";

const contentReducer = (state = [], action) => {
  console.log("ya vot tut");

  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case GET_CONTENT_START: {
      return [...state, ...payload];
    }
    default:
      return state;
  }
};
export default contentReducer;
