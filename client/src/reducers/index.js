import { combineReducers } from 'redux';
import map from './map';
import player from './player';
import players from './players';
import enemy from './enemy'

export default combineReducers({
  map,
  player,
  players,
  enemy
});
