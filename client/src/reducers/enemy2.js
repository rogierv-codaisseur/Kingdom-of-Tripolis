import { MOVE_ENEMY2, RECEIVE_MOVE_ENEMY2 } from '../constants/actionTypes';

const initialState = {
  position: [120, 280],
  spriteLocation: '0px 80px',
  direction: 'Left',
  walkIndex: 0
};

const enemy2 = (state = initialState, action) => {
  const { position, walkIndex, spriteLocation } = action;
  switch (action.type) {
    case MOVE_ENEMY2:
      return {
        ...action.payload
      };
    case RECEIVE_MOVE_ENEMY2:
      return {
        position,
        direction: action.action,
        walkIndex,
        spriteLocation
      };
    default:
      return state;
  }
};

export default enemy2;
