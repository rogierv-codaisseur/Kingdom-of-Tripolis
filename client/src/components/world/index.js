import React from 'react';
import PropTypes from 'prop-types';
import Map from '../map';
import Player from '../player/index';
import Enemy from '../enemy/index';
import Enemy2 from '../enemy2/index';
import Player2 from '../player2/index';
import Loot from '../loot/index';
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
      <Player2 />
      <Enemy />
      <Enemy2 />
      <Loot />
    </div>
  );
};

World.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.object.isRequired
  }).isRequired
};

export default World;
