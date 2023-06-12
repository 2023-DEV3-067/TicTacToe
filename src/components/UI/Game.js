import React, { useState } from 'react';
import Board from './board';

export default function Game() {
  const [historyGame, setHistoryGame] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // if the number of the current move is even, the next player is X, otherwise, the next player is O
  const xIsNext = currentMove % 2 === 0;
  // get the current squares
  const currentSquares = historyGame[currentMove];

// update the history of the game with the new squares
const updateHistoryGame  = (nextSquares) => {
  const updatedHistory  = [...historyGame.slice(0, currentMove + 1), nextSquares];
  // update the history of the game
  setHistoryGame(updatedHistory);
  // update the current move
  setCurrentMove(updatedHistory.length - 1);
};

// restart the game
const restartGame = (e) => {
    e.preventDefault();
    setHistoryGame([Array(9).fill(null)]);
    setCurrentMove(0);
}
  return (
    <div className="game" data-testid="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={updateHistoryGame} />
      </div>
      <button onClick={(e) => restartGame(e)} className='btn' data-testid="restart">Restart</button>
    </div>
  );
}
