import store from '../../store';
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../constants/gameConstants';
import {
  MOVE_PLAYER2,
  SEND_MOVE2,
  PLAYER2_WON,
  PLAYER2_LOST,
  PLAYER_WON,
  PLAYER_LOST
} from '../../constants/actionTypes';

export default function handleMovement(player2) {
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
    const walkIndex = store.getState().player2.walkIndex;
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
    const playerTurn = store.getState().player2.playerTurn;
    const result = store.getState().player2.result;

    store.dispatch({
      type: MOVE_PLAYER2,
      payload: {
        position: newPos,
        direction,
        walkIndex,
        spriteLocation: getSpriteLocation(direction, walkIndex),
        playerTurn,
        result
      }
    });
    store.dispatch({
      type: SEND_MOVE2,
      action: direction,
      position: newPos,
      walkIndex,
      spriteLocation: getSpriteLocation(direction, walkIndex),
      playerTurn,
      result
    });
  }

  function attemptMove(direction) {
    const enemyPos = store.getState().enemy.position;
    const enemy2Pos = store.getState().enemy2.position;
    const oldPos = store.getState().player2.position;
    const newPos = getNewPosition(oldPos, direction);
    const posPlayer = store.getState().player.position;
    const lootPos = store.getState().loot.position;
    const playerTurn = store.getState().player2.playerTurn;

    if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && playerTurn) {
      if (enemyPos[0] === newPos[0] && enemyPos[1] === newPos[1]) {
        const walkIndex = getWalkIndex();
        const playerTurn = store.getState().player.playerTurn;
        const result = store.getState().player.result;

        store.dispatch({
          type: MOVE_PLAYER2,
          payload: {
            position: [0, 0],
            direction,
            walkIndex,
            spriteLocation: getSpriteLocation(direction, walkIndex),
            playerTurn,
            result
          }
        });
        store.dispatch({
          type: SEND_MOVE2,
          action: direction,
          position: [0, 0],
          walkIndex,
          spriteLocation: getSpriteLocation(direction, walkIndex),
          playerTurn,
          result
        });
        return false;
      }
      if (enemy2Pos[0] === newPos[0] && enemy2Pos[1] === newPos[1]) {
        const walkIndex = getWalkIndex();
        const playerTurn = store.getState().player.playerTurn;
        const result = store.getState().player.result;

        store.dispatch({
          type: MOVE_PLAYER2,
          payload: {
            position: [0, 0],
            direction,
            walkIndex,
            spriteLocation: getSpriteLocation(direction, walkIndex),
            playerTurn,
            result
          }
        });
        store.dispatch({
          type: SEND_MOVE2,
          action: direction,
          position: [0, 0],
          walkIndex,
          spriteLocation: getSpriteLocation(direction, walkIndex),
          playerTurn,
          result
        });
        return false;
      }
      if (lootPos[0] === newPos[0] && lootPos[1] === newPos[1]) {
        store.dispatch({ type: PLAYER2_WON });
        store.dispatch({ type: PLAYER_LOST });
      }
      if (lootPos[0] === posPlayer[0] && lootPos[1] === posPlayer[1]) {
        store.dispatch({ type: PLAYER2_LOST });
        store.dispatch({ type: PLAYER_WON });
      }
      const resultPlayer = store.getState().player.result;
      if (resultPlayer === 'Won') {
        alert('Other player won');
      }
      if (resultPlayer === 'Lost') {
        alert('You won');
      }
      dispatchMove(direction, newPos);
    }
  }

  function handleKeyDown(e) {
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
  }

  window.addEventListener('keydown', e => {
    handleKeyDown(e);
  });

  return player2;
}
