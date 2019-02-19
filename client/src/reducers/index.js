import { combineReducers } from 'redux';
import map from './map';
import player from './player';
import player2 from './player2';
import players from './players';

export default combineReducers({
  map,
  player,
  player2,
  players
});
