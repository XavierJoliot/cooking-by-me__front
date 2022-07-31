import { SET_INPUT_ADD_RECIPE_VALUE } from "../actions/input";
import { SET_INGREDIENTS, SET_STEPS, SET_IS_MODAL_OPEN } from "../actions/recipes";

const initialState = {
  isOpen: false,
  newRecipe: {
    userId: '',
    groupId: 0,
    title: '',
    duration: 0,
    quantity: 0,
    imagePath: '',
    note: '',
    stepsList: [
      {
        order: 1,
        description: 'Test',
      }
    ],
    ingredientsList: [
      {
        name: 'ingredient 1',
        quantity: 100,
        unit: 'g',
      }
    ]
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
      return {
        ...state,
        newRecipe: {
          ...state.newRecipe,
          ingredientsList: state.ingredients.push(action.object)
        }
      }
    }
    case SET_STEPS: {
      return {
        ...state,
        newRecipe: {
          ...state.newRecipe,
          stepsList: state.steps.push(action.object)
        }
      }
    }
    default:
      return state;
  }
};

export default reducer;