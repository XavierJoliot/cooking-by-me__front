import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import reducer from 'src/reducers';
import apiMiddleware from '../middlewares/api';

// attention à bien brancher le middleware sur le store
// pour qu'il soit utilisé
const middlewares = [apiMiddleware]

const store = configureStore({
  reducer,
  middleware: middlewares,
});

export default store;