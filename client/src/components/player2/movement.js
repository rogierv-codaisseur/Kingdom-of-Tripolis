import { isEqual } from 'lodash';
import store from '../../store';
import { move, sendMove } from '../../actions';
import {
  MOVE_PLAYER2,
  SEND_MOVE2,
  PLAYER_LOST,
  PLAYER_WON,
  PLAYER2_LOST,
  PLAYER2_WON,
  SEND_PLAYER_WON,
  SEND_PLAYER2_WON,
  SEND_PLAYER_LOST,
  SEND_PLAYER2_LOST
} from '../../constants/actionTypes';
import {
  getNewPosition,
  getSpriteLocation,
  getWalkIndex,
  observeBoundaries,
  observeImpassable
} from '../../helpers/handleMovement';

export const dispatchMove = (direction, newPos) => {
  const walkIndex = getWalkIndex();
  const result = store.getState().player.result;
  const spriteLocation = getSpriteLocation(direction, walkIndex);
  store.dispatch(move(MOVE_PLAYER2, newPos, direction, walkIndex, spriteLocation, result));
  store.dispatch(sendMove(SEND_MOVE2, newPos, direction, walkIndex, spriteLocation, result));
};

const handleMovement = player2 => {
  const attemptMove = direction => {
    const { enemy, enemy2, player, player2, loot } = store.getState();
    const newPos = getNewPosition(player2.position, direction);
    const walkIndex = getWalkIndex();
    const spriteLocation = getSpriteLocation(direction, walkIndex);

    if (observeBoundaries(player2.position, newPos) && observeImpassable(player2.position, newPos)) {
      if (isEqual(enemy.position, newPos) || isEqual(enemy2.position, newPos)) {
        store.dispatch(move(MOVE_PLAYER2, [80, 0], direction, walkIndex, spriteLocation, player.result));
        store.dispatch(sendMove(SEND_MOVE2, [80, 0], direction, walkIndex, spriteLocation, player.result));
        return false;
      }
      if (isEqual(loot.position, newPos))
        [PLAYER2_WON, PLAYER_LOST, SEND_PLAYER2_WON, SEND_PLAYER_LOST].map(type => store.dispatch({ type }));

      if (isEqual(loot.position, player2.position))
        [PLAYER_WON, PLAYER2_LOST, SEND_PLAYER_WON, SEND_PLAYER2_LOST].map(type => store.dispatch({ type }));

      if (isEqual(loot.position, enemy.position))
        [PLAYER2_LOST, PLAYER_LOST, SEND_PLAYER2_LOST, SEND_PLAYER_LOST].map(type => store.dispatch({ type }));

      if (isEqual(loot.position, enemy2.position))
        [PLAYER2_LOST, PLAYER_LOST, SEND_PLAYER2_LOST, SEND_PLAYER_LOST].map(type => store.dispatch({ type }));

      if (store.getState().player.result === 'Won' || store.getState().player.result === 'Lost') return false;
      dispatchMove(direction, newPos);
    }
  };

  const handleKeyDown = e => {
    e.preventDefault();
    switch (e.keyCode) {
      case 65:
        return attemptMove('Left');
      case 87:
        return attemptMove('Up');
      case 68:
        return attemptMove('Right');
      case 83:
        return attemptMove('Down');
      default:
        break;
    }
  };

  window.addEventListener('keydown', e => {
    handleKeyDown(e);
  });
  return player2;
};

export default handleMovement;
