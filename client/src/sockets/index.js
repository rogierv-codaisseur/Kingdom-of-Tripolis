import { receiveMove, receiveMove2, receiveMoveEnemy, populatePlayersList, receiveMoveEnemy2 } from '../actions';
import {
  ADD_PLAYER,
  SEND_MOVE,
  SEND_MOVE2,
  SEND_MOVE_ENEMY,
  SEND_MOVE_ENEMY2,
  PLAYERS_LIST
} from '../constants/actionTypes';

const setupSocket = (dispatch, player) => {
  const port = process.env.PORT || 4000;
  const socket = new WebSocket(`ws://localhost:${port}`);

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
    const { action, player, players, position, spriteLocation, type, walkIndex, playerTurn } = data;
    switch (type) {
      case SEND_MOVE:
        dispatch(receiveMove(action, player, position, walkIndex, spriteLocation, playerTurn));
        dispatch({ type: 'PLAYER_TURN' });
        break;
      case SEND_MOVE2:
        dispatch(receiveMove2(action, player, position, walkIndex, spriteLocation, playerTurn));
        dispatch({ type: 'PLAYER_TURN' });
        break;
      case SEND_MOVE_ENEMY:
        dispatch(receiveMoveEnemy(action, player, position, walkIndex, spriteLocation));
        break;
      case SEND_MOVE_ENEMY2:
        dispatch(receiveMoveEnemy2(action, player, position, walkIndex, spriteLocation));
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
