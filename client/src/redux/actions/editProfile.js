import apiService from "../../api/apiService";
import { PROFILE_EDIT } from "../types/userTypes";

const editUserProfile = payload => ({type: PROFILE_EDIT, payload})

export const editProfile = user => async dispatch => {
    apiService
    .patch("profile/edit", {user})
    .then(({data}) => dispatch(editUserProfile(data)))
};
