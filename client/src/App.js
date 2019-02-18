import React from 'react';
import './App.css';
import World from './components/world';
import PlayersListContainer from './components/playersList/listContainer';

const App = () => (
  <div className='playScreen'>
    <PlayersListContainer />
    <World />
  </div>
);

export default App;
