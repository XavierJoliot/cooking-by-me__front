import { combineReducers } from 'redux';

// import reducers
import recipesReducer from './recipes';
import recipeModalReducer from './addRecipeModal';
import itemModalReducer from './addItemModal';
import userReducer from './user';
import groupReducer from './groups';
import generalReducer from './general';
import contactReducer from './contact';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  addRecipeModal: recipeModalReducer,
  addItemModal: itemModalReducer,
  user: userReducer,
  groups: groupReducer,
  general: generalReducer,
  contact: contactReducer,
});

export default rootReducer;