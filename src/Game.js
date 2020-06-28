import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory} from 'react-router-dom';

import './App.css';
import Score from './Score.js';

const Game = () =>{

const history = useHistory();

  const [trivia, getTrivia] = useState([]); // used to retrieve actual questions
  const [count, setCount] = useState(0); // keeping track of number of quesitons
  const [score, setScore] = useState(0); // keeping track of score
  const [newQ, setNewQ] = useState(false); // used to change questions
  
  const URL = "https://opentdb.com/api.php?amount=1&type=boolean";
  const totalQuestions = 10;

  useEffect(() => {
    getQuestions();
  }, [newQ]);
  
  const getQuestions = async () => {
    const response = await fetch(URL); // used 'await' since we have to wait for the data
    const data = await response.json();
    getTrivia(data.results);
    console.log(data.results);
  }

  const changeCount = () => {
    setCount(0);
    setScore(0);
  }

  const checkAnswerTrue = (e) => {
    if(count < totalQuestions){
      
      setCount(count + 1);
      if("True" === e.target.value){
        console.log("Yay, you got it right!");
        setScore(score + 1);
      }else{
        console.log("sorry, thats incorrect!");
      }
      setNewQ(!newQ);

    }else{
        // return <Redirect exact="true" to="/end"/>
      // random edit
       
        // history.push('/end');
    }
    
  }

  const checkAnswerFalse = (e) => {
    if(count < totalQuestions){
      
      setCount(count + 1);
      if("False" === e.target.value){
        console.log("Yay, you got it right!");
        setScore(score + 1);
      }else{
        console.log("sorry, thats incorrect!");
      }
      setNewQ(!newQ);

    }else{
        // return <Redirect to="/end"/>
       
        // history.push('/end');
    }

  }

  return (
    <div className="App">

      <button onClick={changeCount}>New Questions</button>

      <div className="score-box">
        <div className="score">{score}/{count}</div>
        </div>

    <h1>

        {
            trivia.map(triv =>(
            <div>
                
            <div className="trivia-app">
                <div className="question-answer">
                    <div className="">{triv.category}</div>
                    <div className="question">{triv.question}</div>
                </div>

                <div className="true-false-buttons"> 
                    <button className="button" value={triv.correct_answer} onClick={checkAnswerTrue}>True</button>
                    <button className="button" value={triv.correct_answer} onClick={checkAnswerFalse}>False</button>
                </div>

                {count >= totalQuestions && 
                  <button className="button" onClick={() => endGame(score, count)}>Finish</button>
                }

                </div>
                

            </div>
            ))
        }

    </h1>

    </div>
  );
}


function endGame(score, count){
  console.log(score);
  return(
    <Score numScore={score} numCount={count}/>
  );
}

export default Game;
