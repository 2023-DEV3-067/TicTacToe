import React, { useState } from 'react';
// import './App.scss';
import Board from './Board';

export default function Game() {

  const [gameHistory, setGameHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = gameHistory[currentMove];

const handlePlay = (nextSquares) => {
  const nextHistory = [...gameHistory.slice(0, currentMove + 1), nextSquares];
  setGameHistory(nextHistory);
  setCurrentMove(nextHistory.length - 1);
};

return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} onPlay={handlePlay} />
      </div>
    </div>
  );
}
