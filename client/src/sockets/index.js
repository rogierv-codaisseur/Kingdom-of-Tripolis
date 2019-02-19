import { receiveMove, receiveMove2, receiveMoveEnemy, populatePlayersList } from '../actions';
import { ADD_PLAYER, SEND_MOVE, SEND_MOVE2, SEND_MOVE_ENEMY, PLAYERS_LIST } from '../constants/actionTypes';

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
      case SEND_MOVE2:
        dispatch(receiveMove2(action, player, position, walkIndex, spriteLocation));
        break;
      case SEND_MOVE_ENEMY:
        dispatch(receiveMoveEnemy(action, player, position, walkIndex, spriteLocation));
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
