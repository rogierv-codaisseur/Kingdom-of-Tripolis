import { combineReducers } from 'redux';
import map from './map';
import moves from './moves';
import player from './player';
import players from './players';

export default combineReducers({
  map,
  moves,
  player,
  players
});
