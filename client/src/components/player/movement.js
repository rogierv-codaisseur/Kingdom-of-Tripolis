import { isEqual } from 'lodash';
import store from '../../store';
import { move, sendMove } from '../../actions';
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

export const dispatchMove = (direction, newPos) => {
  const walkIndex = getWalkIndex();
  const result = store.getState().player.result;
  const spriteLocation = getSpriteLocation(direction, walkIndex);
  store.dispatch(move(MOVE_PLAYER, newPos, direction, walkIndex, spriteLocation, result));
  store.dispatch(sendMove(SEND_MOVE, newPos, direction, walkIndex, spriteLocation, result));
};

const handleMovement = player => {
  const attemptMove = direction => {
    const { enemy, enemy2, player, player2, loot } = store.getState();
    const newPos = getNewPosition(player.position, direction);
    const walkIndex = getWalkIndex();
    const spriteLocation = getSpriteLocation(direction, walkIndex);

    if (observeBoundaries(player.position, newPos) && observeImpassable(player.position, newPos)) {
      if (isEqual(enemy.position, newPos) || isEqual(enemy2.position, newPos)) {
        store.dispatch(move(MOVE_PLAYER, [80, 0], direction, walkIndex, spriteLocation, player.result));
        store.dispatch(sendMove(SEND_MOVE, [80, 0], direction, walkIndex, spriteLocation, player.result));
        return false;
      }
      if (isEqual(loot.position, newPos))
        [PLAYER_WON, PLAYER2_LOST, SEND_PLAYER_WON, SEND_PLAYER2_LOST].map(type => store.dispatch({ type }));

      if (isEqual(loot.position, player2.position))
        [PLAYER2_WON, PLAYER_LOST, SEND_PLAYER2_WON, SEND_PLAYER_LOST].map(type => store.dispatch({ type }));

      if (store.getState().player2.result === 'Won' || store.getState().player2.result === 'Lost') return false;
      dispatchMove(direction, newPos);
    }
  };

  const handleKeyDown = e => {
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
  };

  window.addEventListener('keydown', e => {
    handleKeyDown(e);
  });
  return player;
};

export default handleMovement;
