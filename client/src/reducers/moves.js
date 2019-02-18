const moves = (state = [], action) => {
  switch (action.type) {
    case 'SEND_MOVE':
      return [
        ...state,
        {
          action: action.action,
          player: action.player,
          id: action.id,
          position: action.position,
          walkIndex: action.walkIndex,
          spriteLocation: action.spriteLocation
        }
      ];
    case 'RECEIVE_MOVE':
      return [
        ...state,
        {
          action: action.action,
          player: action.player,
          id: action.id,
          position: action.position,
          walkIndex: action.walkIndex,
          spriteLocation: action.spriteLocation
        }
      ];
    default:
      return state;
  }
};

export default moves;
