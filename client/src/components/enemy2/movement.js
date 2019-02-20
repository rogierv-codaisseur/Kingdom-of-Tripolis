import store from '../../store';
import { SPRITE_SIZE } from '../../constants/gameConstants';
import { MOVE_ENEMY2, SEND_MOVE_ENEMY2 } from '../../constants/actionTypes';
import {
  getNewPositionEnemy2,
  getSpriteLocationEnemy2,
  getWalkIndex,
  observeBoundaries
} from '../../helpers/handleMovement';

export default function handleEnemyMovement(enemy2) {
  function observeImpassable(oldPos, newPos) {
    const playerPos = store.getState().player.position;
    const playerPos2 = store.getState().player2.position;
    const enemyPos = store.getState().enemy.position;
    const tiles = store.getState().map.tiles;
    const y = newPos[1] / SPRITE_SIZE;
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];

    if (playerPos[0] === newPos[0] && playerPos[1] === newPos[1]) {
      return false;
    }
    if (playerPos2[0] === newPos[0] && playerPos2[1] === newPos[1]) {
      return false;
    }
    if (enemyPos[0] === newPos[0] && enemyPos[1] === newPos[1]) {
      return false;
    }

    return nextTile < 5;
  }

  function dispatchMove(direction, newPos) {
    const walkIndex = getWalkIndex();
    store.dispatch({
      type: MOVE_ENEMY2,
      payload: {
        position: newPos,
        direction,
        walkIndex,
        spriteLocation: getSpriteLocationEnemy2(direction, walkIndex)
      }
    });
    store.dispatch({
      type: SEND_MOVE_ENEMY2,
      action: direction,
      position: newPos,
      walkIndex,
      spriteLocation: getSpriteLocationEnemy2(direction, walkIndex)
    });
  }

  function attemptMove(direction) {
    const oldPos = store.getState().enemy2.position;
    const newPos = getNewPositionEnemy2(oldPos, direction);
    const lootPos = store.getState().loot.position;

    if (lootPos[0] === newPos[0] && lootPos[1] === newPos[1]) {
      alert('The Guards have reclaimed the LOOT!');
    }

    if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos)) dispatchMove(direction, newPos);
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
