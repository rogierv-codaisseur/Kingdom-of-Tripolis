const moves = (state = [], action) => {
  switch (action.type) {
    case 'SEND_MOVE':
    case 'RECEIVE_MOVE':
      return [
        ...state,
        {
          action: action.action,
          player: action.player,
          id: action.id,
          time: action.time
        }
      ];
    default:
      return state;
  }
};

export default moves;
