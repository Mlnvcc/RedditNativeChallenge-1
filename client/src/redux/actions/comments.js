import { CREATE_COMMENT } from "../types/comment";
const ip = { vlad: "192.168.1.140", alina: "195.133.246.50" };
const getCommentCreate = payload => ({ type: CREATE_COMMENT, payload });
export const createComMain = description => async dispatch => {
  const response = await fetch(`http://localhost:8080/comment/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(description),
  });
  const comment = await response.json();
  console.log(comment);
  dispatch(getCommentCreate(description));
};
