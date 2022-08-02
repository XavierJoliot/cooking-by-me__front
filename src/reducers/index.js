import { combineReducers } from 'redux';

// import reducers
import recipesReducer from './recipes';
import recipeModalReducer from './addRecipeModal';
import itemModalReducer from './addItemModal';
import userReducer from './user';
import groupReducer from './groups';
import generalReducer from './general';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  addRecipeModal: recipeModalReducer,
  addItemModal: itemModalReducer,
  user: userReducer,
  groups: groupReducer,
  general: generalReducer,
});

export default rootReducer;