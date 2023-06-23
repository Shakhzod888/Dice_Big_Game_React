import React, { useState } from "react";
import dice_1 from "./assets/images/dice-1.png";
import dice_2 from "./assets/images/dice-2.png";
import dice_3 from "./assets/images/dice-3.png";
import dice_4 from "./assets/images/dice-4.png";
import dice_5 from "./assets/images/dice-5.png";
import dice_6 from "./assets/images/dice-6.png";
import "./app.scss";

let name_1 = prompt("Enter First Player Name !");
let name_2 = prompt("Enter Second Player Name !");

const App = () => {
  const [score, setScore] = useState(0);
  const [img, setDiceImges] = useState(dice_2);

  const [player0Score, setPlayer0Score] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(1);
  const [checkWinner, setCheckWinner] = useState("player--winner")

  const reset = () => {
    setPlayer0Score(0);
    setPlayer1Score(0);
    setCurrentScore(0);
    setActivePlayer(1);
  };


  const handleRoll = () => {
    const score = Math.floor(Math.random() * 6) + 1;
    setScore(score);

    if (score === 1) {
      setDiceImges(dice_1);
      setActivePlayer(activePlayer === 1 ? 2 : 1);
      setCurrentScore(0);

    } else if (score === 2) {
      setDiceImges(dice_2);
      setCurrentScore(currentScore + score);
    } else if (score === 3) {
      setDiceImges(dice_3);
      setCurrentScore(currentScore + score);
    } else if (score === 4) {
      setDiceImges(dice_4);
      setCurrentScore(currentScore + score);
    } else if (score === 5) {
      setDiceImges(dice_5);
      setCurrentScore(currentScore + score);
    } else if (score === 6) {
      setDiceImges(dice_6);
      setCurrentScore(currentScore + score);
    }
  };

  const handleHold = () => {
    setCurrentScore(0);
    const nextScore = activePlayer === 1 ? player0Score + currentScore : player1Score + currentScore;
    setActivePlayer(activePlayer === 1 ? 2 : 1);

    if (nextScore >= 100) {
      setCheckWinner(checkWinner === 1 ? 2 : 1);
      alert(`O'yinchi ${activePlayer == 1 ? name_1.toUpperCase() : name_2.toUpperCase()} g'alaba qozondi!`);
      setPlayer0Score(0);
      reset()
      setPlayer1Score(0);
    } else {
      activePlayer === 1 ? setPlayer0Score(nextScore) : setPlayer1Score(nextScore);
      console.log(activePlayer);
    }
  }

  return (
    <>
      <main>
        <section className={`player player--0 ${checkWinner === 1 ? 'player--winner' : ''} ${activePlayer === 1 ? 'player--active' : ''}`}>
          <h2 className="name" id="name--0">{name_1}</h2>
          <p className="score" id="score--0">{player0Score}</p>
          <div className="current">
            <p className="current-label">Current</p>
            <p className="current-score" id="current--0">{activePlayer === 1 ? currentScore : 0}</p>
          </div>
        </section>

        <section className={`player player--1 ${checkWinner === 2 ? 'player--winner' : ''} ${activePlayer === 2 ? 'player--active' : ''}`} >
          <h2 className="name" id="name--1">{name_2}</h2>
          <p className="score" id="score--1">{player1Score}</p>
          <div className="current">
            <p className="current-label">Current</p>
            <p className="current-score" id="current--1">{activePlayer === 2 ? currentScore : 0}</p>
          </div>
        </section>

        <img src={img} alt="Playing dice" className="dice" />

        <button className="btn btn--new" onClick={reset}>🔄 New game</button>

        <button className="btn btn--roll" onClick={handleRoll}>🎲 Roll dice</button>
        <button className="btn btn--hold" onClick={handleHold}>📥 Hold</button>
      </main>
    </>
  );
};

export default App;
