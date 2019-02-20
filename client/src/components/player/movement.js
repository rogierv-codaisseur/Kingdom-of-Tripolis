import store from '../../store';
import {
  MOVE_PLAYER,
  SEND_MOVE,
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

export default function handleMovement(player) {
  function dispatchMove(direction, newPos) {
    const walkIndex = getWalkIndex();
    const playerTurn = store.getState().player.playerTurn;
    const result = store.getState().player.result;

    store.dispatch({
      type: MOVE_PLAYER,
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
      type: SEND_MOVE,
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
    const oldPos = store.getState().player.position;
    const newPos = getNewPosition(oldPos, direction);
    const posPlayer2 = store.getState().player2.position;
    const lootPos = store.getState().loot.position;
    const playerTurn = store.getState().player.playerTurn;

    if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && playerTurn) {
      if (enemyPos[0] === newPos[0] && enemyPos[1] === newPos[1]) {
        const walkIndex = getWalkIndex();
        const playerTurn = store.getState().player.playerTurn;
        const result = store.getState().player.result;

        store.dispatch({
          type: MOVE_PLAYER,
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
          type: SEND_MOVE,
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
          type: MOVE_PLAYER,
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
          type: SEND_MOVE,
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
        store.dispatch({ type: PLAYER_WON });
        store.dispatch({ type: PLAYER2_LOST });
        store.dispatch({ type: SEND_PLAYER_WON });
        store.dispatch({ type: SEND_PLAYER2_LOST });
      }
      if (lootPos[0] === posPlayer2[0] && lootPos[1] === posPlayer2[1]) {
        store.dispatch({ type: PLAYER_LOST });
        store.dispatch({ type: PLAYER2_WON });
        store.dispatch({ type: SEND_PLAYER2_WON });
        store.dispatch({ type: SEND_PLAYER_LOST });
      }
      if (store.getState().player2.result === 'Won' || store.getState().player2.result === 'Lost') {
        return false;
      }
      dispatchMove(direction, newPos);
    }
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
