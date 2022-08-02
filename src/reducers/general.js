import { REDIRECT_NOT_FOUND } from "../actions/general";

const initialState = {
  redirectTo: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REDIRECT_NOT_FOUND: {
      return {
        ...state,
        redirectTo: action.url
      }
    }
    default:
      return state;
  }
};

export default reducer;