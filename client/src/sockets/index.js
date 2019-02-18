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
    switch (data.type) {
      case SEND_MOVE:
        dispatch(
          receiveMove(
            data.action,
            data.player,
            data.position,
            data.walkIndex,
            data.spriteLocation
          )
        );
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
