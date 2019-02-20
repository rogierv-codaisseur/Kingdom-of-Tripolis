import store from '../../store';
import { moveEnemy, sendMoveEnemy } from '../../actions';
import { MOVE_ENEMY2, SEND_MOVE_ENEMY2 } from '../../constants/actionTypes';
import {
  getNewPosition,
  getSpriteLocation,
  getWalkIndex,
  observeBoundaries,
  observeImpassable
} from '../../helpers/handleMovement';

export default function handleEnemyMovement(enemy2) {
  function dispatchMove(direction, newPos) {
    const walkIndex = getWalkIndex();
    const spriteLocation = getSpriteLocation(direction, walkIndex, 1);
    store.dispatch(moveEnemy(MOVE_ENEMY2, newPos, direction, walkIndex, spriteLocation));
    store.dispatch(sendMoveEnemy(SEND_MOVE_ENEMY2, newPos, direction, walkIndex, spriteLocation));
  }

  function attemptMove(direction) {
    const oldPos = store.getState().enemy2.position;
    const newPos = getNewPosition(oldPos, direction, 2);
    const lootPos = store.getState().loot.position;

    if (lootPos[0] === newPos[0] && lootPos[1] === newPos[1]) {
      alert('The Guards have reclaimed the LOOT!');
    }

    if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos, true)) dispatchMove(direction, newPos);
  }

  function handleKeyDown(e) {
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
  }
  window.addEventListener('keydown', e => {
    handleKeyDown(e);
  });

  return enemy2;
}
