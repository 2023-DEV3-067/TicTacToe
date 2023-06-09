import React, { useState } from 'react';
// import './App.scss';
import Board from './Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);



  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };





const restartGame = (e) => {
    e.preventDefault();
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
}
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <button onClick={(e) => restartGame(e)} className='btn'>Restart</button>
    </div>
  );
}
