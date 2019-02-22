import React from 'react';
import PropTypes from 'prop-types';

const LootMessage = props => {
  const { player } = props;
  const currentLevel = window.location.pathname.split('/')[1];
  const nextLevel = Math.min(parseInt(currentLevel) + 1, 5);
  return (
    <div className="loot-message">
      <p className="loot-message-title">{`Player ${player} won!`}</p>
      <p className="loot-message-text">
        <a href="/">Go back to Homescreen</a>
        <br />
        <a href={`/${currentLevel}`}>
          Replay level
          {` ${currentLevel}`}
        </a>
        <br />
        <a href={`/${nextLevel}`}>
          Go to level
          {` ${nextLevel}`}
        </a>
      </p>
    </div>
  );
};

LootMessage.propTypes = {
  player: PropTypes.number.isRequired
};

export default LootMessage;
