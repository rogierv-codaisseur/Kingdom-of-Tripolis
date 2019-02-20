import { isEqual } from 'lodash';
import store from '../../store';
import { move, sendMove } from '../../actions';
import {
  getNewPosition,
  getSpriteLocation,
  getWalkIndex,
  observeBoundaries,
  observeImpassable
} from '../../helpers/handleMovement';
import { MOVE_ENEMY, SEND_MOVE_ENEMY } from '../../constants/actionTypes';

const dispatchMove = (direction, newPos) => {
  const walkIndex = getWalkIndex();
  const spriteLocation = getSpriteLocation(direction, walkIndex, 1);
  store.dispatch(move(MOVE_ENEMY, newPos, direction, walkIndex, spriteLocation));
  store.dispatch(sendMove(SEND_MOVE_ENEMY, newPos, direction, walkIndex, spriteLocation));
};

const handleEnemyMovement = enemy => {
  const attemptMove = direction => {
    const { enemy, loot } = store.getState();
    const newPos = getNewPosition(enemy.position, direction, 1);

    if (isEqual(loot.position, newPos)) alert('The Guards have reclaimed the LOOT!');

    if (observeBoundaries(enemy.position, newPos) && observeImpassable(enemy.position, newPos, true))
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

  return enemy;
};

export default handleEnemyMovement;
