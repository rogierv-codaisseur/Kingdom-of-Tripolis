import {
  RECEIVE_MOVE,
  RECEIVE_MOVE2,
  RECEIVE_MOVE_ENEMY,
  RECEIVE_MOVE_ENEMY2,
  PLAYERS_LIST
} from '../constants/actionTypes';

let nextMoveId = 0;

//cc:socket#7;The move is received
export const receiveMove = (action, player, position, walkIndex, spriteLocation, playerTurn, result) => ({
  type: RECEIVE_MOVE,
  id: nextMoveId++,
  action,
  player,
  position,
  walkIndex,
  spriteLocation,
  playerTurn,
  result
});

export const receiveMove2 = (action, player, position, walkIndex, spriteLocation, playerTurn, result) => ({
  type: RECEIVE_MOVE2,
  id: nextMoveId++,
  action,
  player,
  position,
  walkIndex,
  spriteLocation,
  playerTurn,
  result
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

export const move = (typeAction, newPos, direction, walkIndex, spriteLocation, result) => ({
  type: typeAction,
  payload: {
    position: newPos,
    direction,
    walkIndex,
    spriteLocation,
    result
  },
  meta: { sound: { play: 'walk' }},
});

//cc:socket#3;Dispatch move
export const sendMove = (typeAction, newPos, direction, walkIndex, spriteLocation, result) => ({
  type: typeAction,
  action: direction,
  position: newPos,
  walkIndex,
  spriteLocation,
  result
});
