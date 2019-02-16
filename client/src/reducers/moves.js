const moves = (state = [], action) => {
  switch (action.type) {
    case 'SEND_MOVE':
    case 'RECEIVE_MOVE':
      return state.concat([
        {
          direction: action.direction,
          player: action.player,
          id: action.id
        }
      ]);
    default:
      return state;
  }
};

export default moves;
