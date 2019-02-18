const initialState = {
  position: [0, 0],
  spriteLocation: '0px 0px',
  direction: 'Right',
  walkIndex: 0
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_PLAYER':
      return {
        ...action.payload
      };
    case 'RECEIVE_MOVE':
      return {
        position: action.position,
        direction: action.action,
        walkIndex: 1,
        spriteLocation: '40px 0px'
      };
    default:
      return state;
  }
};

export default player;
