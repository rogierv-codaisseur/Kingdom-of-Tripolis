import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import walkSprite from './player_walk.png';
import handleMovement from './movement';

const Player = props => {
  const { position, spriteLocation, result } = props;

  if (result === 'Won') {
    return (
      <div
        style={{
          backgroundColor: 'yellow',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '810px',
          height: '490px',
          zIndex: 9,
          fontSize: '3rem'
        }}
      >
        Player 1 won!
        <button type="button">
          <Link to="/">Go back to the Homescreen</Link>
        </button>
      </div>
    );
  }

  return (
    <div
      className="player"
      style={{
        position: 'absolute',
        top: position[1],
        left: position[0],
        backgroundImage: `url(${walkSprite})`,
        backgroundPosition: spriteLocation,
        width: '40px',
        height: '40px'
      }}
    />
  );
};

Player.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  spriteLocation: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    ...state.player
  };
}

export default connect(mapStateToProps)(handleMovement(Player));
