import { combineReducers } from 'redux';
import map from './map';
import player from './player';
import players from './players';

export default combineReducers({
  map,
  player,
  players
});
