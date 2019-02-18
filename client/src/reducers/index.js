import { combineReducers } from 'redux';
import moves from './moves';
import players from './players';

export default combineReducers({
  moves,
  players
});
