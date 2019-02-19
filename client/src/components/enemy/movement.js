import store from '../../store';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../constants/gameConstants';

export default function handleEnemyMovement(enemy) {
  function getNewPosition(oldPos, direction) {
    switch (direction) {
      //switch left and right for enemy
      case 'Right':
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case 'Left':
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case 'Up':
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
      case 'Down':
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
      default:
        return oldPos;
    }
  }

  function getSpriteLocation(direction, walkIndex) {
    switch (direction) {
      case 'Up':
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
      case 'Left':
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
      case 'Down':
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`;
      case 'Right':
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`;
      default:
        return `0px 0px`;
    }
  }

  function getWalkIndex() {
    const walkIndex = store.getState().enemy.walkIndex;
    return walkIndex >= 7 ? 0 : walkIndex + 1;
  }

  function observeBoundaries(oldPos, newPos) {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
      (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
    );
    // returns true or false
  }

  function observeImpassable(oldPos, newPos) {
    const playerPos = store.getState().player.position;
    const playerPos2 = store.getState().player2.position;
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

    return nextTile < 5;
  }

  function dispatchMove(direction, newPos) {
    const walkIndex = getWalkIndex();
    store.dispatch({
      type: 'MOVE_ENEMY',
      payload: {
        position: newPos,
        direction,
        walkIndex,
        spriteLocation: getSpriteLocation(direction, walkIndex)
      }
    });
    store.dispatch({
      type: 'SEND_MOVE_ENEMY',
      action: direction,
      position: newPos,
      walkIndex,
      spriteLocation: getSpriteLocation(direction, walkIndex)
    });
  }

  function attemptMove(direction) {
    const oldPos = store.getState().enemy.position;
    const newPos = getNewPosition(oldPos, direction);

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

  return enemy;
}
