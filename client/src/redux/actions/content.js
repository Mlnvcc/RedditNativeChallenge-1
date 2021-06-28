import { GET_CONTENT_START, POST_CREATE } from "../types/content";
import apiService from "../../api/apiService";

const getContentStart = payload => ({ type: GET_CONTENT_START, payload });
const getPostCreate = payload => ({ type: POST_CREATE, payload });

const ip = { vlad: "192.168.1.140" };

export const getContent = () => async dispatch => {
  apiService
    .get("http://localhost:8080/post")
    .then(({ data }) => dispatch(getContentStart(data.Posts)));
};

export const createPost = description => async dispatch => {
  apiService
    .post("http://localhost:8080/post/add", description)
    .then(({ data }) => dispatch(getPostCreate(data)));
};
