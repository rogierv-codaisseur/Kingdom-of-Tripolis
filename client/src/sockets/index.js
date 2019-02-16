import { receiveMove } from '../actions';

const setupSocket = dispatch => {
  const SEND_MOVE = 'SEND_MOVE';

  const socket = new WebSocket('ws://localhost:4000');

  socket.onopen = () =>
    socket.send(JSON.stringify({ message: 'Socket opened' }));

  socket.onmessage = event => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case SEND_MOVE:
        dispatch(receiveMove(data.direction, data.player));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
