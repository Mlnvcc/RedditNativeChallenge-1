import { PROFILE_EDIT } from "../types/editProfile";



export const editProfile = (id, changes) => async (dispatch) => {
 
  const response = await fetch("http://localhost:3001/edit", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, changes }),
    })
   const res = await response.json();
  return dispatch({
     type: PROFILE_EDIT,
     payload: res,
  });
};
