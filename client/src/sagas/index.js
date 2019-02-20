import { takeEvery } from 'redux-saga/effects';
import {
  SEND_MOVE,
  SEND_MOVE2,
  SEND_MOVE_ENEMY,
  SEND_MOVE_ENEMY2,
  SEND_PLAYER_WON,
  SEND_PLAYER_LOST,
  SEND_PLAYER2_WON,
  SEND_PLAYER2_LOST
} from '../constants/actionTypes';

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(SEND_MOVE, action => {
    action.player = params.username;
    params.socket.send(JSON.stringify(action));
  });

  yield takeEvery(SEND_MOVE2, action => {
    action.player2 = params.username;
    params.socket.send(JSON.stringify(action));
  });

  yield takeEvery(SEND_MOVE_ENEMY, action => {
    params.socket.send(JSON.stringify(action));
  });

  yield takeEvery(SEND_MOVE_ENEMY2, action => {
    params.socket.send(JSON.stringify(action));
  });

  yield takeEvery(SEND_PLAYER_WON, action => {
    params.socket.send(JSON.stringify(action));
  });

  yield takeEvery(SEND_PLAYER_LOST, action => {
    params.socket.send(JSON.stringify(action));
  });

  yield takeEvery(SEND_PLAYER2_WON, action => {
    params.socket.send(JSON.stringify(action));
  });

  yield takeEvery(SEND_PLAYER2_LOST, action => {
    params.socket.send(JSON.stringify(action));
  });
};

export default handleNewMessage;
