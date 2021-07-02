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

const initialState = { content: [], loader: false };

const contentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CONTENT_START: {
      return { ...state, content: payload };
    }
    case POST_CREATE: {
      return { ...state, content: [...state.content, payload] };
    }
    case SET_LIKE_ADD: {
      console.log("SHOZA EBALA", state.content);
      return {
        ...state,
        content: [
          ...state.content.map(el => (el._id === payload._id ? payload : el)),
        ],
      };
    }

    case SET_DISLIKE_ADD: {
      return {
        ...state,
        content: [
          ...state.content.map(el => (el._id === payload._id ? payload : el)),
        ],
      };
    }

    case EDIT_POST: {
      const newState = state.content.map(el =>
        el._id === payload._id ? payload : el
      );
      return { ...state, content: newState };
    }

    case DELETE_POST: {
      const { id } = payload;
      const newPostState = state.content.filter(el => el._id !== id);
      return { ...state, content: newPostState };
    }

    case CREATE_COMMENT: {
      const { postId } = payload.description;

      return {
        ...state,
        content: state.content.map(el =>
          el._id === postId
            ? { ...el, comments: [...el.comments, { ...payload.data }] }
            : el
        ),
      };
    }

    case CREATE_COMMENT_TO_COMMENT: {
      const postId = payload.description.postId;

      return {
        ...state,
        content: state.content.map(post =>
          post._id == postId
            ? {
                ...post,
                comments: [
                  ...post.comments.map(comment =>
                    comment.id === payload.description.commentId
                      ? {
                          ...comment,
                          comments: [...comment.comments, payload.data],
                        }
                      : comment
                  ),
                ],
              }
            : post
        ),
      };
    }

    case SET_LIKE_TO_COMMENT: {
      console.log("payID", payload);

      if (payload.father.uri || payload.father.content) {
        console.log("FATHERPOST");

        return {
          ...state,
          content: state.content.map(post =>
            post._id === payload.father._id
              ? {
                  ...post,
                  comments: [
                    ...post.comments.map(comment =>
                      comment._id === payload._id ? payload : comment
                    ),
                  ],
                }
              : post
          ),
        };
      }
      if (payload.postId) {
        console.log("FATHERCOMMENT");
        return {
          ...state,
          content: state.content.map(post =>
            post._id == payload.postId
              ? {
                  ...post,
                  comments: [
                    ...post.comments.map(comment =>
                      comment._id === payload.father._id
                        ? {
                            ...comment,
                            comments: [
                              ...comment.comments.map(el =>
                                el._id == payload._id ? payload : el
                              ),
                            ],
                          }
                        : comment
                    ),
                  ],
                }
              : post
          ),
        };
      }
      return state;
    }

    case SET_DISLIKE_TO_COMMENT: {
      console.log("FATHERPOST", payload);
      console.log("FATHERCOMMENT", payload.postId);
      if (payload.father.uri || payload.father.content) {
        console.log("FATHERPOST");
        return {
          ...state,
          content: state.content.map(post =>
            post._id === payload.father._id
              ? {
                  ...post,
                  comments: [
                    ...post.comments.map(comment =>
                      comment._id === payload._id ? payload : comment
                    ),
                  ],
                }
              : post
          ),
        };
      }
      if (payload.postId) {
        console.log("FATHERCOMMENT");
        return {
          ...state,
          content: state.content.map(post =>
            post._id == payload.postId
              ? {
                  ...post,
                  comments: [
                    ...post.comments.map(comment =>
                      comment._id === payload.father._id
                        ? {
                            ...comment,
                            comments: [
                              ...comment.comments.map(el =>
                                el._id == payload._id ? payload : el
                              ),
                            ],
                          }
                        : comment
                    ),
                  ],
                }
              : post
          ),
        };
      }
      return state;
    }
    case ENABLE_LOADER: {
      return { ...state, loader: true };
    }
    case DISABLE_LOADER: {
      return { ...state, loader: false };
    }

    default:
      return state;
  }
};

export default contentReducer;
