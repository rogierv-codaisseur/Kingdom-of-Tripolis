import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { createLogger } from 'redux-logger';
import handleNewMessage from './sagas';
import setupSocket from './sockets';
import username from './utils/name';
import reducer from './reducers';

// const logger = createLogger({
//   duration: true
// });

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  devTools,
  // applyMiddleware(logger)
);

const store = createStore(reducer, enhancer);

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username });

export default store;
