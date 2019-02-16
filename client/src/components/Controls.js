import React from 'react';

const Controls = props => {
  const { dispatch } = props;
  return (
    <div>
      <button onClick={() => dispatch('Left', 'Me')}>Left</button>
      <button onClick={() => dispatch('Right', 'Me')}>Right</button>
      <button onClick={() => dispatch('Up', 'Me')}>Up</button>
      <button onClick={() => dispatch('Down', 'Me')}>Down</button>
    </div>
  );
};

export default Controls;
