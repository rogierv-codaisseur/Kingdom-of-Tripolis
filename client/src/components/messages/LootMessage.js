import React from 'react';
import PropTypes from 'prop-types';

const LootMessage = props => {
  const { player } = props;
  return (
    <div className="loot-message">
      <p className="loot-message-title">{`Player ${player} won!`}</p>
      <p className="loot-message-text">
        <a href="/">Go back to the Homescreen</a>
        <br />
        <a href="/1">Replay this game</a>
      </p>
    </div>
  );
};

LootMessage.propTypes = {
  player: PropTypes.number.isRequired
};

export default LootMessage;
