import { SET_CONTACT_INPUT_VALUE } from "../actions/input";

const initialState = {
  mail: '',
  object: '',
  message: '',
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CONTACT_INPUT_VALUE: {
      return {
        ...state,
        [action.name]: action.value,
      }
    }
    default:
      return state;
  }
};

export default reducer;