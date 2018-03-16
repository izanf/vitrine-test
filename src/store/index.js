import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { ENV } from '../config/constants';
import magazines from './magazines';

export const history = createHistory();

const reducers = combineReducers({
  magazines,
  router: routerReducer
});

const middlewares = [thunk, routerMiddleware(history)];

if (ENV !== 'production') {
  middlewares.push(logger);
}

export const store = createStore(reducers, applyMiddleware(...middlewares));

if (ENV !== 'production' && module.hot) {
  module.hot.accept('./', () => store.replaceReducer(reducers));
}
