import { SET_INPUT_VALUE } from "../actions/input";
import { SET_IS_MODAL_OPEN } from "../actions/recipes";

const initialState = {
  isOpen: false,
  newRecipe: {
    title: '',
    imagePath: '',
    time: 0,
    people: 0,
    note: '',
  },
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_IS_MODAL_OPEN: {
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    }
    case SET_INPUT_VALUE: {
      return {
        ...state,
        newRecipe: {
          ...state.newRecipe,
          [action.name]: action.value,
        }
      }
    }
    default:
      return state;
  }
};

export default reducer;