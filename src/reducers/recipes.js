import { SET_ALL_RECIPES, SET_COOKING_RECIPES, SET_CURRENT_RECIPE } from '../actions/recipes';
import imgTest from '../assets/images/slider-head-home.jpg';

const initialState = {
  myRecipes: [],
  cookingRecipes: [
  ], 
  currentRecipe: {
    id: 0,
    userId: null,
    title: null,
    duration: 0,
    quantity: 0,
    imagePath: null,
    note: null,
    stepsList: [
    ],
    ingredientsList: [
    ],
    group_Recipe: [
    ]
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ALL_RECIPES: {
      return {
        ...state,
        isMyRecipesLoaded: true,
        myRecipes: action.recipes
      }
    }
    case SET_CURRENT_RECIPE: {
      return {
        ...state,
        currentRecipe: action.data,
      }
    }
    case SET_COOKING_RECIPES: {
      return {
        ...state,
        cookingRecipes: action.data
      }
    }
    default:
      return state;
  }
};

export default reducer;