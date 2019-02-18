import React from 'react';
import PropTypes from 'prop-types';

const Controls = props => {
  const { dispatch } = props;

  // window.addEventListener('keydown', e => {
  //   handleKeyDown(e);
  // });

  // const handleKeyDown = e => {
  //   e.preventDefault();

  //   switch (e.keyCode) {
  //     case 32:
  //       return dispatch('Shoot', 'Me');
  //     case 37:
  //       return dispatch('Left', 'Me');
  //     case 38:
  //       return dispatch('Up', 'Me');
  //     case 39:
  //       return dispatch('Right', 'Me');
  //     case 40:
  //       return dispatch('Down', 'Me');
  //     default:
  //       break;
  //   }
  // };

  const handleButton = e => {
    return dispatch(e, 'Me');
  };

  return (
    <div>
      <button type='button' onClick={() => handleButton('Shoot')}>
        Shoot
      </button>
      <button type='button' onClick={() => handleButton('Left')}>
        Left
      </button>
      <button type='button' onClick={() => handleButton('Up')}>
        Up
      </button>
      <button type='button' onClick={() => handleButton('Right')}>
        Right
      </button>
      <button type='button' onClick={() => handleButton('Down')}>
        Down
      </button>
    </div>
  );
};

export default Controls;

Controls.propTypes = {
  dispatch: PropTypes.func.isRequired
};
