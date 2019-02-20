import * as React from 'react';
import PropTypes from 'prop-types';

const PlayersList = props => {
  const { players } = props;
  return (
    <div className="heroesList">
      <h1>Codastroids</h1>

      {!players && 'Loading...'}
      {players &&
        players.slice(0, 2).map((player, index) => (
          <ul key={player.id}>
            <li className="playersId">{`Player ${index + 1}`}</li>
            <li>{player.name}</li>
          </ul>
        ))}
    </div>
  );
};

PlayersList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default PlayersList;
