import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import World from './components/world';
import PlayersListContainer from './components/playersList/listContainer';

const App = () => (
  <div>
    <div className="playScreen">
      <PlayersListContainer />
      <Route exact path="/:id" component={World} />
    </div>
    <div className="information">use the key arrows to navigate around the map, avoid the Guards and claim your LOOT!</div>
  </div>
);

export default App;
