import { combineReducers } from 'redux';
import map from './map';
import player from './player';
import player2 from './player2';
import players from './players';
import enemy from './enemy';
import enemy2 from './enemy2';
import loot from './loot';

export default combineReducers({
  map,
  player,
  players,
  enemy,
  enemy2,
  player2,
  loot
});
