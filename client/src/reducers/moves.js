const moves = (state = [], action) => {
  switch (action.type) {
    case 'SEND_MOVE':
      console.log(action);
      return [
        ...state,
        {
          action: action.action,
          player: action.player,
          id: action.id,
          position: action.position
        }
      ];
    case 'RECEIVE_MOVE':
      console.log(action);
      return [
        ...state,
        {
          action: action.action,
          player: action.player,
          id: action.id,
          position: action.position
        }
      ];
    default:
      return state;
  }
};

export default moves;
