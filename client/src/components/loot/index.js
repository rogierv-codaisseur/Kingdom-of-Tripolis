import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import lootSprite from './chest.png';

const Loot = props => {
  const { position } = props;

  return (
    <div
      className="loot"
      style={{
        position: 'absolute',
        top: position[1],
        left: position[0],
        backgroundImage: `url(${lootSprite})`,
        width: '40px',
        height: '40px'
      }}
    />
  );
};

Loot.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

function mapStateToProps(state) {
  return {
    ...state.loot
  };
}

export default connect(mapStateToProps)(Loot);
