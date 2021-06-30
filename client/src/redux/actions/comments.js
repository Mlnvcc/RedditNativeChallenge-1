import { CREATE_COMMENT, CREATE_COMMENT_TO_COMMENT } from "../types/comment";
import apiService from "../../api/apiService";

const getCommentCreate = payload => ({ type: CREATE_COMMENT, payload });
const getComToComtCreate = payload => ({
  type: CREATE_COMMENT_TO_COMMENT,
  payload,
});
export const createComMain = description => async dispatch => {
  apiService.post("/comment/add", description).then(({ data }) => {
    dispatch(getCommentCreate({ data, description }));
  });
};

export const createComToCom = description => async dispatch => {
  apiService.post("/comment/addcomtocom", description).then(({ data }) => {
    dispatch(getComToComtCreate({ data, description }));
  });
};
