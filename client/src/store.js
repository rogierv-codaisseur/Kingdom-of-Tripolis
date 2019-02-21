import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import soundsMiddleware from 'redux-sounds';
// import { createLogger } from 'redux-logger';
import handleNewMessage from './sagas';
import setupSocket from './sockets';
import username from './utils/name';
import reducer from './reducers';

// const logger = createLogger({
//   duration: true
// });

const soundsData = {
  // intro: './data/sounds/intro.mp3',
  // stage: './data/sounds/stage.mp3',
  walk: './data/sounds/walk.mp3',
  respawn: './data/sounds/respawn.mp3',
  win: './data/sounds/win.mp3'
};

const loadedSoundsMiddleware = soundsMiddleware(soundsData);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware, loadedSoundsMiddleware),
  devTools
);

const store = createStore(reducer, enhancer);

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username });

export default store;
