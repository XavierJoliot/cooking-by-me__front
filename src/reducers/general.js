import { REDIRECT_NOT_FOUND, SET_IS_LOADING } from "../actions/general";

const initialState = {
  redirectTo: null,
  isLoadingActive: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REDIRECT_NOT_FOUND: {
      return {
        ...state,
        redirectTo: action.url
      }
    }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoadingActive: action.bool,
      }
    }
    default:
      return state;
  }
};

export default reducer;