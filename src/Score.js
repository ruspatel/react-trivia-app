import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


function Score(props){

  return (
    <div className="App">
        <h1>Hello World</h1>
    <h1>{props.numScore}/{props.numCount}</h1>

    </div>
  );
}

export default Score;
