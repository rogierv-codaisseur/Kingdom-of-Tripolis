import { MOVE_ENEMY, RECEIVE_MOVE_ENEMY } from '../constants/actionTypes';

const initialState = {
  position: [600, 120],
  spriteLocation: '0px 80px',
  direction: 'Left',
  walkIndex: 0
};

const enemy = (state = initialState, action) => {
  const { position, walkIndex, spriteLocation } = action;
  switch (action.type) {
    case MOVE_ENEMY:
      return {
        ...action.payload
      };
    case RECEIVE_MOVE_ENEMY:
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

export default enemy;
