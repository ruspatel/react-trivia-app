import React, { useState, useEffect } from 'react';
import './App.css';

const App = () =>{

  const [trivia, getTrivia] = useState([]); // used to retrieve actual questions
  const [count, setCount] = useState(0); // keeping track of number of quesitons
  const [score, setScore] = useState(0); // keeping track of score
  const [newQ, setNewQ] = useState(false); // used to change questions
  
  const URL = "https://opentdb.com/api.php?amount=1&type=boolean";


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
    if(count < 10){
      setCount(count + 1);
    }

    if("True" === e.target.value){
      console.log("Yay, you got it right!");
      setScore(score + 1);
    }else{
      console.log("sorry, thats incorrect!");
    }
    setNewQ(!newQ);
  }

  const checkAnswerFalse = (e) => {
    if(count < 10){
      setCount(count + 1);
    }
    if("False" === e.target.value){
      console.log("Yay, you got it right!");
      setScore(score + 1);
    }else{
      console.log("sorry, thats incorrect!");
    }
    setNewQ(!newQ);

  }

  return (
    <div className="App">

      <button onClick={changeCount}>New Questions</button>

      <div className="score-box">
        <div className="score">{score}/{count}</div>
        </div>

      <h1>  
      {trivia.map(triv =>(
        <div>
          <div className="">{triv.category}</div>
          <div className="question">{triv.question}</div>

          <div> 
            <button value={triv.correct_answer} onClick={checkAnswerTrue}>True</button>
          
            <button value={triv.correct_answer} onClick={checkAnswerFalse}>False</button>
          </div>

        </div>
        ))}
      </h1>


    </div>
  );
}

export default App;
