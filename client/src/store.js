import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import handleNewMessage from './sagas';
import setupSocket from './sockets';
import username from './utils/name';
import reducer from './reducers';

// import logger from 'redux-logger';
// import { createLogger } from 'redux-logger';
// const logger = createLogger({
//   duration: true
// });

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  devTools
  // applyMiddleware(logger)
);
const store = createStore(reducer, enhancer);

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username });

export default store;
