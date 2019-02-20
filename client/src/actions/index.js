import {
  RECEIVE_MOVE,
  RECEIVE_MOVE2,
  RECEIVE_MOVE_ENEMY,
  RECEIVE_MOVE_ENEMY2,
  PLAYERS_LIST
} from '../constants/actionTypes';

let nextMoveId = 0;

export const receiveMove = (action, player, position, walkIndex, spriteLocation, playerTurn) => ({
  type: RECEIVE_MOVE,
  id: nextMoveId++,
  action,
  player,
  position,
  walkIndex,
  spriteLocation,
  playerTurn
});

export const receiveMove2 = (action, player, position, walkIndex, spriteLocation, playerTurn) => ({
  type: RECEIVE_MOVE2,
  id: nextMoveId++,
  action,
  player,
  position,
  walkIndex,
  spriteLocation,
  playerTurn
});

export const receiveMoveEnemy = (action, player, position, walkIndex, spriteLocation) => ({
  type: RECEIVE_MOVE_ENEMY,
  id: nextMoveId++,
  action,
  player,
  position,
  walkIndex,
  spriteLocation
});

export const receiveMoveEnemy2 = (action, player, position, walkIndex, spriteLocation) => ({
  type: RECEIVE_MOVE_ENEMY2,
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
