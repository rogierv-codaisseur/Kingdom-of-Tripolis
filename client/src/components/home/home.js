import * as React from 'react';
import { Link } from 'react-router-dom'


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
        {players.length === 1 ? "Waiting for more players!" : <Link to = '/1'>Start Game</Link>}
      </div>

      {/* <div className="homeButtonDiv">
        <button className="homeButton" ><Link to = '/'>Start Game</Link></button>
      </div> */}

      <div className="information">
        GAME RULES:<br />
        Player 1 - Use arrow keys<br />
        Player 2 - Use W A S D<br />
        Navigate around the map<br />
        Avoid the Guards<br />
        Claim your LOOT!
      </div>


    </div>
  );
};





export default HomeScreen;
