import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import './App.css';
import Game from './Game.js';
import Home from './Home.js';
import End from './End.js';

function App(){

  return (
    <div className="App">
    <Router>
      <Switch>
      <Route exact="true" path="/" component={Home}/>
      <Route exact="true" path="/game" component={Game}/>
      <Route exact="true" path="/end" component={End}/>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
