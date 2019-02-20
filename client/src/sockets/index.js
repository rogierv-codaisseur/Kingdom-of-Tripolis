import { receiveMove, receiveMove2, receiveMoveEnemy, populatePlayersList, receiveMoveEnemy2 } from '../actions';
import {
  ADD_PLAYER,
  SEND_MOVE,
  SEND_MOVE2,
  SEND_MOVE_ENEMY,
  SEND_MOVE_ENEMY2,
  PLAYERS_LIST,
  PLAYER_WON,
  PLAYER_LOST,
  PLAYER2_WON,
  PLAYER2_LOST
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
    const { action, player, players, position, spriteLocation, type, walkIndex, playerTurn, result } = data;
    switch (type) {
      case SEND_MOVE:
        dispatch(receiveMove(action, player, position, walkIndex, spriteLocation, playerTurn, result));
        break;
      case SEND_MOVE2:
        dispatch(receiveMove2(action, player, position, walkIndex, spriteLocation, playerTurn, result));
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
      case PLAYER_WON:
        dispatch({ type: 'PLAYER_WON' });
        break;
      case PLAYER_LOST:
        dispatch({ type: 'PLAYER_LOST' });
        break;
      case PLAYER2_WON:
        dispatch({ type: 'PLAYER2_WON' });
        break;
      case PLAYER2_LOST:
        dispatch({ type: 'PLAYER2_LOST' });
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
