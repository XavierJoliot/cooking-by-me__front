import { SET_USER_TOKEN } from "../actions/recipes";

const initialState = {
  token: '',
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_TOKEN: {
      return {
        ...state,
        token: action.token,
      }
    }
    default:
      return state;
  }
};

export default reducer;