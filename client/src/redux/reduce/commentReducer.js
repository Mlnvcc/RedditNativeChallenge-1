// import {
//   CREATE_COMMENT,
//   CREATE_COMMENT_TO_COMMENT,
//   SET_DISLIKE_TO_COMMENT,
//   SET_LIKE_TO_COMMENT,
// } from "../types/comment";

// const initialState = [];

// const commentReducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   // console.log("REDUCER PAYLOAD", payload);
//   switch (type) {
//     case CREATE_COMMENT: {
//       console.log(9999, payload.description);
//       const { postId } = payload.description;
//       console.log(
//         1212,
//         // state.map(el =>
//           el._id === postId
//             ? { ...el, comments: [...el.comments, { ...payload.data }] }
//             : el
//         )
//       );
//       return state.map(el =>
//         el._id === postId
//           ? { ...el, comments: [...el.comments, { ...payload.data }] }
//           : el
//       );
//     }
//     case CREATE_COMMENT_TO_COMMENT: {
//       console.log(1, payload);
//       // console.log(9999, payload.description.fathercomment);
//       console.log(2, state);
//       return state.push(payload.data);
//     }

//     case SET_LIKE_TO_COMMENT: {
//       console.log("payID", payload);
//       return state.map(el => (el._id === payload._id ? payload : el));
//     }

//     case SET_DISLIKE_TO_COMMENT: {
//       return state.map(el => (el._id === payload._id ? payload : el));
//     }

//     default:
//       return state;
//   }
// };
// export default commentReducer;
