import { takeEvery } from 'redux-saga/effects';

const SEND_MOVE = 'SEND_MOVE';

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(SEND_MOVE, action => {
    action.player = params.username;
    params.socket.send(JSON.stringify(action));
  });
};

export default handleNewMessage;
