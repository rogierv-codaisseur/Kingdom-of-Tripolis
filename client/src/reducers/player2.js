import { MOVE_PLAYER2, RECEIVE_MOVE2, PLAYER_TURN, PLAYER2_WON, PLAYER2_LOST } from '../constants/actionTypes';

const initialState = {
  position: [0, 0],
  spriteLocation: '0px 0px',
  direction: 'Right',
  walkIndex: 0,
  playerTurn: true,
  result: 'In Progress'
};

const player2 = (state = initialState, action) => {
  const { position, walkIndex, spriteLocation } = action;
  switch (action.type) {
    case PLAYER_TURN:
      return {
        ...state,
        playerTurn: !state.playerTurn
      };
    case MOVE_PLAYER2:
      return {
        ...action.payload,
        playerTurn: state.playerTurn,
        result: state.result
      };
    case RECEIVE_MOVE2:
      return {
        position,
        direction: action.action,
        walkIndex,
        spriteLocation,
        playerTurn: state.playerTurn,
        result: state.result
      };
    case PLAYER2_WON:
      return {
        ...state,
        result: 'Won'
      };
    case PLAYER2_LOST:
      return {
        ...state,
        result: 'Lost'
      };
    default:
      return state;
  }
};

export default player2;
