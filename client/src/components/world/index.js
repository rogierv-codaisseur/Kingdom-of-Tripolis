import React from 'react';
import Map from '../map';
import Player from '../player/index';
import { tiles } from '../../data/maps/1';
import store from '../../store';

function World(props) {
  store.dispatch({
    type: 'ADD_TILES',
    payload: {
      tiles
    }
  });
  return (
    <div
      style={{
        position: 'relative',
      }}>
      <Map />
      <Player />
    </div>
  );
}

export default World;
