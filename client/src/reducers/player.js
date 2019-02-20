import { MOVE_PLAYER, RECEIVE_MOVE, PLAYER_TURN } from '../constants/actionTypes';

const initialState = {
  position: [40, 0],
  spriteLocation: '0px 0px',
  direction: 'Right',
  walkIndex: 0,
  playerTurn: true
};

const player = (state = initialState, action) => {
  const { position, walkIndex, spriteLocation } = action;
  switch (action.type) {
    case PLAYER_TURN:
      return {
        ...state,
        playerTurn: !state.playerTurn
      };
    case MOVE_PLAYER:
      return {
        ...action.payload,
        playerTurn: state.playerTurn
      };
    case RECEIVE_MOVE:
      return {
        position,
        direction: action.action,
        walkIndex,
        spriteLocation,
        playerTurn: state.playerTurn
      };

    default:
      return state;
  }
};

export default player;
