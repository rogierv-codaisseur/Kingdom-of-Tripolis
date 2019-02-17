import React from 'react';
import PropTypes from 'prop-types';

const Controls = props => {
  const { dispatch } = props;

  window.addEventListener('keydown', e => {
    handleKeyDown(e);
  });

  const handleKeyDown = e => {
    e.preventDefault();

    switch (e.keyCode) {
      case 32:
        return dispatch('Shoot', 'Me');
      case 37:
        return dispatch('Left', 'Me');
      case 38:
        return dispatch('Up', 'Me');
      case 39:
        return dispatch('Right', 'Me');
      case 40:
        return dispatch('Down', 'Me');
      default:
        break;
    }
  };

  return (
    <div>
      <button onClick={() => dispatch('Left', 'Me')}>Left</button>
      <button onClick={() => dispatch('Up', 'Me')}>Up</button>
      <button onClick={() => dispatch('Right', 'Me')}>Right</button>
      <button onClick={() => dispatch('Down', 'Me')}>Down</button>
      <button onClick={() => dispatch('Shoot', 'Me')}>Shoot (Space)</button>
    </div>
  );
};

export default Controls;

Controls.propTypes = {
  dispatch: PropTypes.func.isRequired
};
