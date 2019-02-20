import * as React from 'react';
import PropTypes from 'prop-types';

const PlayersList = props => {
  const { players } = props;
  return (
    <div className="heroesList">
      <h1>Heroes:</h1>

      {!players && 'Loading...'}
      {players &&
        players.slice(0, 2).map((player, index) => (
          <ul key={player.id}>
            <li className="playersId">{`Player ${index + 1}`}</li>
            <li>{player.name}</li>
          </ul>
        ))}
      <div className="information2">
        GAME RULES:
        <br />
        Player 1 - Use arrow keys
        <br />
        Player 2 - Use W A S D
        <br />
        Navigate around the map
        <br />
        Avoid the Guards
        <br />
        Claim your LOOT!
      </div>
    </div>
  );
};

PlayersList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default PlayersList;
