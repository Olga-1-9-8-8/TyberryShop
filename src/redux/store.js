import { applyMiddleware, createStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'
import rootReducer from './rootReducer'

export const middlewares =[logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persister = persistStore(store);

export default {
  store,
  persister
};
