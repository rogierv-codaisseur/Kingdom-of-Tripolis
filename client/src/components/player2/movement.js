import store from '../../store';
import {
  MOVE_PLAYER2,
  SEND_MOVE2,
  PLAYER2_WON,
  PLAYER2_LOST,
  PLAYER_WON,
  PLAYER_LOST
} from '../../constants/actionTypes';
import {
  getNewPosition,
  getSpriteLocation,
  getWalkIndex,
  observeBoundaries,
  observeImpassable
} from '../../helpers/handleMovement';

export default function handleMovement(player2) {
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
            position: [80, 0],
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
          position: [80, 0],
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
            position: [80, 0],
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
          position: [80, 0],
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
      if (store.getState().player.result === 'Won' || store.getState().player.result === 'Lost') {
        return false;
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
