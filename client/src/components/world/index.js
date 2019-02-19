import React from 'react';
import Map from '../map';
import Player from '../player/index';
import Enemy from '../enemy/index';
import Player2 from '../player2/index';
import level1 from '../../data/maps/1';
import level2 from '../../data/maps/2';
import store from '../../store';
import { ADD_TILES } from '../../constants/actionTypes';

const World = ({ match }) => {
  const level = match.params.id;
  switch (level) {
    case '1':
      store.dispatch({
        type: ADD_TILES,
        payload: {
          tiles: level1
        }
      });
      break;
    case '2':
      store.dispatch({
        type: ADD_TILES,
        payload: {
          tiles: level2
        }
      });
      break;
    default:
      break;
  }

  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      <Map />
      <Player />
      <Enemy />
      <Player2 />
    </div>
  );
};

export default World;
