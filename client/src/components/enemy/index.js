import React from 'react';
import { connect } from 'react-redux'
import walkSprite from './soldier_walk.png'
import handleEnemyMovement from './movement'

const Enemy = props => {
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

function mapStateToProps(state) {
  return {
    ...state.enemy,
  }
}

export default connect(mapStateToProps)(handleEnemyMovement(Enemy))

