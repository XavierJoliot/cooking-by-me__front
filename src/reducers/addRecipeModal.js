import { SET_INPUT_ADD_RECIPE_VALUE } from "../actions/input";
import { SET_INGREDIENTS, SET_STEPS, SET_IS_MODAL_OPEN, SET_NEW_RECIPE } from "../actions/recipes";

const initialState = {
  isOpen: false,
  mode: '',
  newRecipe: {
    id: null,
    groupId: null,
    title: null,
    duration: null,
    quantity: null,
    imagePath: null,
    note: null,
    stepsList: [
    ],
    ingredientsList: [
    ],
    isPublic: false,
  },
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_IS_MODAL_OPEN: {
      return {
        ...state,
        isOpen: !state.isOpen,
        mode: action.mode
      }
    }
    case SET_INPUT_ADD_RECIPE_VALUE: {
      return {
        ...state,
        newRecipe: {
          ...state.newRecipe,
          [action.name]: action.value,
        },
      }
    }
    case SET_INGREDIENTS: {
      console.log(action.object);
      return {
        ...state,
        newRecipe: {
          ...state.newRecipe,
          ingredientsList: state.newRecipe.ingredientsList.concat(action.object)
        }
      }
    }
    case SET_STEPS: {
      return {
        ...state,
        newRecipe: {
          ...state.newRecipe,
          stepsList: state.newRecipe.stepsList.concat(action.object)
        }
      }
    }
    case SET_NEW_RECIPE: {
      return {
        ...state,
        newRecipe: action.recipe,
      }
    }
    default:
      return state;
  }
};

export default reducer;