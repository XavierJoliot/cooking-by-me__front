import { combineReducers } from 'redux';

// import reducers
import recipesReducer from './recipes';

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

export default rootReducer;