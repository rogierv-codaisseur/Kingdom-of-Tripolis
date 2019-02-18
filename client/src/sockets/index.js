import { receiveMove, populatePlayersList } from '../actions';

const setupSocket = (dispatch, player) => {
  const SEND_MOVE = 'SEND_MOVE';
  const PLAYERS_LIST = 'PLAYERS_LIST';

  const socket = new WebSocket('ws://localhost:4000');

  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: 'ADD_PLAYER',
        name: player
      })
    );
  };

  socket.onmessage = event => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case SEND_MOVE:
        dispatch(receiveMove(data.action, data.player));
        break;
      case PLAYERS_LIST:
        dispatch(populatePlayersList(data.players));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
