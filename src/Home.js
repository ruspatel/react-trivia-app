import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';
import Game from './Game.js';

function Home(){

  return (
    <div className="App">
    <Link to="/game">Game</Link>

    </div>
  );
}

export default Home;
