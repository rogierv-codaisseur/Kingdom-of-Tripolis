import { takeEvery } from 'redux-saga/effects';
import { SEND_MOVE } from '../constants/actionTypes';

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(SEND_MOVE, action => {
    action.player = params.username;
    params.socket.send(JSON.stringify(action));
  });
};

export default handleNewMessage;
