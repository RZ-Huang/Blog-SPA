import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import navReducer from './reducer.js';

const reducers = combineReducers({
  nav: navReducer,
});

const store = createStore(reducers, applyMiddleware(promise));

export default store;
