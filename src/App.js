import React, { useState, useEffect } from 'react';
import './App.css';

const App = () =>{

  const [trivia, getTrivia] = useState([]);
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [score, setScore] = useState(0);

  
  const URL = "https://opentdb.com/api.php?amount=1&type=boolean";


  useEffect(() => {
    getQuestions();
  }, [count]);
  
  const getQuestions = async () => {
    const response = await fetch(URL); // used 'await' since we have to wait for the data
    const data = await response.json();
    getTrivia(data.results);
    console.log(data.results);
  }

  const changeCount = () => {
    setCount(count + 1);
  }

  
  const printHello = (word) => {

    console.log(word);
  }

  const checkAnswerTrue = (e) => {
    if("True" === e.target.value){
      console.log("Yay, you got it right!");
    }else{
      console.log("sorry, thats incorrect!");
    }
  }

  const checkAnswerFalse = (e) => {
    if("False" === e.target.value){
      console.log("Yay, you got it right!");
    }else{
      console.log("sorry, thats incorrect!");
    }
  }

  return (
    <div className="App">

      <button onClick={changeCount}>New Questions</button>

      <h1>  
      {trivia.map(triv =>(
        <div>
          <div className="">{triv.category}</div>
          <div className="question">{triv.question}</div>
          <div className="answer">{triv.correct_answer} </div>

          <div> 
            <button value={"True", triv.correct_answer} onClick={checkAnswerTrue}>True</button>
            {/* <button onClick={() => alert(triv.correct_answer === "True")}>True</button> */}
            {/* <button onClick={() => {
              if(triv.correct_answer === "True"){
                console.log("Yay, you got it right!");
              }else{
                console.log("sorry, thats incorrect!");
              }
            }}>True</button> */}


            {/* <button onClick={() => checkAnswer.bind("False", triv.correct_answer)}>False</button> */}
            <button value={triv.correct_answer} onClick={checkAnswerFalse}>False</button>

            {/* <button onClick={() => {
              if(triv.correct_answer === "False"){
                console.log("Yay, you got it right!");
              }else{
                console.log("sorry, thats incorrect!");
              }
            }}>False</button> */}

          </div>

          <button onClick={printHello.bind("hello")}>test example</button>

          <p></p>
        </div>
        ))}
      </h1>


    </div>
  );
}

export default App;
