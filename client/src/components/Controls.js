import React from 'react';

const Controls = props => {
  const { dispatch } = props;

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
        return dispatch('Left', 'Me');
      default:
        console.log(e.keyCode);
    }
  };

  window.addEventListener('keydown', e => {
    handleKeyDown(e);
  });

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
