import { SET_ALL_RECIPES, SET_CURRENT_RECIPE } from '../actions/recipes';
import imgTest from '../assets/images/slider-head-home.jpg';

const initialState = {
  myRecipes: [],
  cookingRecipes: [
    {
      id: 1,
      title: 'test titre 1',
      duration: 45,
      quantity: 4,
      imagePath: imgTest
    },
    {
      id: 2,
      title: 'test titre2',
      duration: 45,
      quantity: 4,
      imagePath: imgTest
    },
    {
      id: 3,
      title: 'test titre 3',
      duration: 45,
      quantity: 4,
      imagePath: imgTest
    },
    {
      id: 4,
      title: 'test titre 4',
      duration: 45,
      quantity: 4,
      imagePath: imgTest
    },
    {
      id: 5,
      title: 'test titre 5',
      duration: 45,
      quantity: 4,
      imagePath: imgTest
    },
  ], 
  currentRecipe: {}
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
    default:
      return state;
  }
};

export default reducer;