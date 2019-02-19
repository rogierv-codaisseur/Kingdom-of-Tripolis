import { takeEvery } from 'redux-saga/effects';
import { SEND_MOVE, SEND_MOVE2, SEND_MOVE_ENEMY } from '../constants/actionTypes';

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
    action.enemy = params.username;
    params.socket.send(JSON.stringify(action));
  });
};

export default handleNewMessage;
