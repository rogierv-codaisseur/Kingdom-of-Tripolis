import React from 'react';

export default props => {
  if (props.enemy) {
    return (
      <div className="loot-message">
        <p className="loot-message-title">Enemy has taken the loot! </p>
        <p className="loot-message-text">
          <a href="/">Go back to the Homescreen</a>
          <br />
          <a href="/1">Replay this game</a>
        </p>
      </div>
    );
  }
  return (
    <div className="loot-message">
      <p className="loot-message-title">Player {props.player} won!</p>
      <p className="loot-message-text">
        <a href="/">Go back to the Homescreen</a>
        <br />
        <a href="/1">Replay this game</a>
      </p>
    </div>
  );
};
