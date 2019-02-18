import React from 'react';
import './App.css';
import World from './components/world';
import PlayersListContainer from './components/playersList/listContainer';

const App = () => (
  <div>
    <div className='playScreen'>
      <PlayersListContainer />
      <World />
    </div>
    <div className='information'>use the key arrows to navigate around the map and SPACEBAR to attack</div>
  </div>
  
  
);

export default App;
