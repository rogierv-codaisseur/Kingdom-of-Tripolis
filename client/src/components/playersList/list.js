import * as React from 'react';
import PropTypes from 'prop-types';

const PlayersList = props => {
  const { players } = props;
  return (
    <div className="heroesList">
      <h1>Heroes</h1>
      <ul>
        {!players && 'Loading...'}
        {players &&
          players.map(player => (
            <li key={player.name}>
              <i>
                Player
                {player.id}
              </i>
              <br />
              {player.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

PlayersList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default PlayersList;
