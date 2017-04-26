import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from 'history';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import API from '../api';
import status from './status';

const store = createStore(
  connectRouter(history)(reducer),
  compose(
    applyMiddleware(
      thunk.withExtraArgument(API),
      status,
      routerMiddleware(history)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
