import { RECEIVE_MOVE, PLAYERS_LIST } from '../constants/actionTypes';

let nextMoveId = 0;

export const receiveMove = (action, player, position, walkIndex, spriteLocation) => ({
  type: RECEIVE_MOVE,
  id: nextMoveId++,
  action,
  player,
  position,
  walkIndex,
  spriteLocation
});

export const populatePlayersList = players => ({
  type: PLAYERS_LIST,
  players
});
