import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';
import { SPRITE_SIZE } from '../../constants/gameConstants';

const getTileSprite = type => {
  // 0 -> 4 = passable; 5 -> 9 = impassable
  switch (type) {
    case 0:
      return 'grass';
    case 3:
      return 'tree';
    case 4:
      return 'chest';
    case 5:
      return 'rock';
    case 6:
      return 'tree';
    case 7:
      return 'enemy';
    default:
      return 'grass';
  }
};

const MapTile = props => {
  const { tile } = props;
  return (
    <div
      className={`tile ${getTileSprite(tile)}`}
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE
      }}
    />
  );
};

function generateRandomNum() {
  return Math.floor(Math.random() * 9999999)
}

const MapRow = props => {
  const { tiles } = props;
  return (
    <div
      className="row"
      style={{
        height: '40px'
      }}
    >
      {tiles.map(tile => (
        <MapTile tile={tile} key= { generateRandomNum() } />
      ))}
    </div>
  );
};

const Map = props => {
  const { tiles } = props;
  return (
    <div
      style={{
        position: 'relative',
        top: '0px',
        left: '0px',
        width: '800px',
        height: '480px',
        border: '5px solid white',
        borderRadius: '10px'
      }}
    >
      {tiles.map(row => (
        <MapRow key={row} tiles={row} />
      ))}
    </div>
  );
};

MapTile.propTypes = {
  tile: PropTypes.number.isRequired
};

MapRow.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.number).isRequired
};

Map.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
};

const mapStateToProps = state => {
  return {
    tiles: state.map.tiles
  };
};

export default connect(mapStateToProps)(Map);
