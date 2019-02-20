import { isEqual } from 'lodash';
import store from '../../store';
import { move, sendMove } from '../../actions';
import { MOVE_ENEMY2, SEND_MOVE_ENEMY2 } from '../../constants/actionTypes';
import {
  getNewPosition,
  getSpriteLocation,
  getWalkIndex,
  observeBoundaries,
  observeImpassable
} from '../../helpers/handleMovement';

export const dispatchMove = (direction, newPos) => {
  const walkIndex = getWalkIndex();
  const spriteLocation = getSpriteLocation(direction, walkIndex, 2);
  store.dispatch(move(MOVE_ENEMY2, newPos, direction, walkIndex, spriteLocation));
  store.dispatch(sendMove(SEND_MOVE_ENEMY2, newPos, direction, walkIndex, spriteLocation));
};

const handleEnemyMovement = enemy2 => {
  const attemptMove = direction => {
    const { enemy2, loot } = store.getState();
    const newPos = getNewPosition(enemy2.position, direction, 2);

    if (isEqual(loot.position, newPos)) alert('The Guards have reclaimed the LOOT!');

    if (observeBoundaries(enemy2.position, newPos) && observeImpassable(enemy2.position, newPos, true))
      dispatchMove(direction, newPos);
  };

  const handleKeyDown = e => {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
      case 65:
        return attemptMove('Left');
      case 38:
      case 87:
        return attemptMove('Up');
      case 39:
      case 68:
        return attemptMove('Right');
      case 40:
      case 83:
        return attemptMove('Down');
      default:
        break;
    }
  };
  window.addEventListener('keydown', e => {
    handleKeyDown(e);
  });

  return enemy2;
};

export default handleEnemyMovement;
