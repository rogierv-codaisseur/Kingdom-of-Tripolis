import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import World from './components/world';
import HomeScreen from './components/home/homeContainer';

const App = () => (
  <div>
    <div>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/:id" component={World} />
    </div>
  </div>
);

export default App;
