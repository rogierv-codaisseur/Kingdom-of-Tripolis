import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Intro from '../sounds/intro';

const HomeScreen = props => {
  const { players } = props;

  return (
    <div className="HomeScreen">
      <h1 className="gameTitle">The Kingdom of Tripolis</h1>

      <div className="homePlayers">
        {!players && 'Loading...'}
        {players &&
          players.slice(0, 2).map((player, index) => (
            <ul key={player.id} className="homeList">
              <li className="homeId">{`Player ${index + 1}`}</li>
              <li className="homeName">{player.name}</li>
            </ul>
          ))}
      </div>

      <div className="homeStartText">
        {players.length === 1 ? 'Waiting for more players!' : <Link to="/1">Start Game</Link>}
      </div>
      <Intro />
    </div>
  );
};

HomeScreen.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default HomeScreen;
