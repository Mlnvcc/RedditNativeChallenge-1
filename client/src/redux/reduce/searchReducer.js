import { SEARCH_INIT } from "../types/search";

const initialState = [];

const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_INIT: {
      return payload;
    }

    default: {
      return state;
    }
  }
};
export default searchReducer;
