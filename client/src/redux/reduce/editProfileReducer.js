import {PROFILE_EDIT} from '../types/editProfile'

export default function profileReducer(state = [], action) {
  switch(action.type){
    case PROFILE_EDIT: {
      const users = action.payload;
      const newProfileState = state.map((el) => {
        return el.id === users.id ? { ...el, ...users } : el;
      });
      return newProfileState;
    }

    default:
      return state;
  }
}
