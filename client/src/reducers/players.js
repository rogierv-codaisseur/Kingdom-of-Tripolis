import { PLAYERS_LIST } from '../constants/actionTypes';

const players = (state = [], action) => {
  switch (action.type) {
    case PLAYERS_LIST:
      return action.players;
    default:
      return state;
  }
};

export default players;
