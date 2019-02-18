import React from 'react';
// import Player from '../player'
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
        backgroundColor: 'lightgreen',
        position: 'relative',
        width: '600px',
        height: '300px',
        margin: '20px auto'
      }}>
      <Map />
      <Player />
    </div>
  );
}

export default World;
