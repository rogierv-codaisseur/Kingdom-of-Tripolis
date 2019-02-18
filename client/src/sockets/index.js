import { receiveMove, populatePlayersList } from '../actions';
import { ADD_PLAYER, SEND_MOVE, PLAYERS_LIST } from '../constants/actionTypes';

const setupSocket = (dispatch, player) => {
  const socket = new WebSocket('ws://localhost:4000');

  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: ADD_PLAYER,
        name: player
      })
    );
  };

  socket.onmessage = event => {
    const data = JSON.parse(event.data);
    const { action, player, players, position, spriteLocation, type, walkIndex } = data;
    switch (type) {
      case SEND_MOVE:
        dispatch(receiveMove(action, player, position, walkIndex, spriteLocation));
        break;
      case PLAYERS_LIST:
        dispatch(populatePlayersList(players));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
