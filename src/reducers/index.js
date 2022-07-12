import { combineReducers } from 'redux';

// import reducers
import recipesReducer from './recipes';
import recipeModalReducer from './addRecipeModal';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  addRecipeModal: recipeModalReducer,
});

export default rootReducer;