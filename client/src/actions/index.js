let nextMoveId = 0;

const SEND_MOVE = 'SEND_MOVE';
const RECEIVE_MOVE = 'RECEIVE_MOVE';

export const sendMove = (action, player) => ({
  type: SEND_MOVE,
  id: nextMoveId++,
  action,
  player,
  time: Date.now()
});

export const receiveMove = (action, player) => ({
  type: RECEIVE_MOVE,
  id: nextMoveId++,
  action,
  player,
  time: Date.now()
});
