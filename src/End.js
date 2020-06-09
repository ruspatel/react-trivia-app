import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';
import Game from './Game.js';

function End(){

  return (
    <div className="App">
        <h1>Game over</h1>
        <Link to="/game">New Game</Link>
    </div>
  );
}

export default End;
