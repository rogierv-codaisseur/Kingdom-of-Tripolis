import {
  SEND_MOVE,
  RECEIVE_MOVE,
  PLAYERS_LIST
} from '../constants/actionTypes';

let nextMoveId = 0;

export const sendMove = (action, player) => ({
  type: SEND_MOVE,
  id: nextMoveId++,
  action,
  player,
  position: action.position
});

export const receiveMove = (
  action,
  player,
  position,
  walkIndex,
  spriteLocation
) => ({
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
