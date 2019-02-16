let nextMoveId = 0;

const SEND_MOVE = 'SEND_MOVE';
const RECEIVE_MOVE = 'RECEIVE_MOVE';

export const sendMove = (direction, player) => ({
  type: SEND_MOVE,
  id: nextMoveId++,
  direction,
  player
});

export const receiveMove = (direction, player) => ({
  type: RECEIVE_MOVE,
  id: nextMoveId++,
  direction,
  player
});
