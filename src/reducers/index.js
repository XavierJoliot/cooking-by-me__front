import { combineReducers } from 'redux';

// import reducers
import recipesReducer from './recipes';
import recipeModalReducer from './addRecipeModal';
import itemModalReducer from './addItemModal';
import userReducer from './user';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  addRecipeModal: recipeModalReducer,
  addItemModal: itemModalReducer,
  user: userReducer,
});

export default rootReducer;