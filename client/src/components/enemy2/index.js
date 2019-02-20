import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import walkSprite from './soldier2_walk.png';
import handleEnemyMovement from './movement';

const Enemy2 = props => {
  const { position, spriteLocation } = props;

  return (
    <div
      className="enemy"
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

Enemy2.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  spriteLocation: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    ...state.enemy2
  };
}

export default connect(mapStateToProps)(handleEnemyMovement(Enemy2));
