import store from '../../store';
import {
  SPRITE_SIZE,
  MAP_HEIGHT,
  MAP_WIDTH
} from '../../constants/gameConstants';

export default function handleMovement(player) {
  function getNewPosition(oldPos, direction) {
    switch (direction) {
      case 'Left':
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case 'Right':
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
      case 'Down':
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
      case 'Right':
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
      case 'Left':
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`;
      case 'Up':
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`;
      default:
        return `0px 0px`;
    }
  }

  function getWalkIndex() {
    const walkIndex = store.getState().player.walkIndex;
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
    const tiles = store.getState().map.tiles;
    const y = newPos[1] / SPRITE_SIZE;
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];
    return nextTile < 5;
  }

  function dispatchMove(direction, newPos) {
    const walkIndex = getWalkIndex();
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: newPos,
        direction,
        walkIndex,
        spriteLocation: getSpriteLocation(direction, walkIndex)
      }
    });
    store.dispatch({
      type: 'SEND_MOVE',
      action: direction,
      player: 'Me',
      position: newPos,
      walkIndex,
      spriteLocation: getSpriteLocation(direction, walkIndex)
    });
  }

  function attemptMove(direction) {
    const oldPos = store.getState().player.position;
    const newPos = getNewPosition(oldPos, direction);

    if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos))
      dispatchMove(direction, newPos);
  }

  function handleKeyDown(e) {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
        return attemptMove('Left');

      case 38:
        return attemptMove('Up');

      case 39:
        return attemptMove('Right');

      case 40:
        return attemptMove('Down');

      default:
        break;
    }
  }

  window.addEventListener('keydown', e => {
    handleKeyDown(e);
  });

  return player;
}
