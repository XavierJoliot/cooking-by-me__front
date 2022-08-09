import { SET_USER_ROLE, SET_USER_TOKEN } from "../actions/general";

const initialState = {
  token: '',
  userRole: ''
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_TOKEN: {
      return {
        ...state,
        token: action.token,
      }
    }
    case SET_USER_ROLE: {
      return {
        ...state,
        userRole: action.role,
      }
    }
    default:
      return state;
  }
};

export default reducer;