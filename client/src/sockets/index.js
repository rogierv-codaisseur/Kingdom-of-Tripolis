import { receiveMove } from '../actions';

const setupSocket = dispatch => {
  const SEND_MOVE = 'SEND_MOVE';

  const socket = new WebSocket('ws://localhost:4000');

  // Send a message if the connection through sockets it open.
  // socket.onopen = () =>
  //   socket.send(JSON.stringify({ message: 'Socket opened' }));

  socket.onmessage = event => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case SEND_MOVE:
        dispatch(receiveMove(data.action, data.player));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
