import store from '../../store';
import { moveEnemy, sendMoveEnemy } from '../../actions';
import {
  getNewPosition,
  getSpriteLocation,
  getWalkIndex,
  observeBoundaries,
  observeImpassable
} from '../../helpers/handleMovement';
import { MOVE_ENEMY, SEND_MOVE_ENEMY } from '../../constants/actionTypes';

export default function handleEnemyMovement(enemy) {
  const dispatchMove = (direction, newPos) => {
    const walkIndex = getWalkIndex();
    const spriteLocation = getSpriteLocation(direction, walkIndex, 1);
    store.dispatch(moveEnemy(MOVE_ENEMY, newPos, direction, walkIndex, spriteLocation));
    store.dispatch(sendMoveEnemy(SEND_MOVE_ENEMY, newPos, direction, walkIndex, spriteLocation));
  };

  function attemptMove(direction) {
    const oldPos = store.getState().enemy.position;
    const newPos = getNewPosition(oldPos, direction, 1);
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

  return enemy;
}
