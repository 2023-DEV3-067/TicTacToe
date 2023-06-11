import React from 'react';
import Square from './square';
import calculateWinner from '../Utils/calculateWinner';

export default function Board({ xIsNext, squares, onUpdateHistoryGame }) {
  const winner = calculateWinner(squares);

  function getStatusPlayer() {
    // if there is a winner or if all squares are filled, return the winner if is true or the next player
    if (squares && !squares.every(square => square !== null && winner === null)) {
      return winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
    return 'Match null';
  }

  function handleClick(i) {
    // if i click on a square that is already filled or if there is a winner, return
    if (winner || squares[i]) {
      return;
    }

    // create a copy of the squares array and update the value of the square that was clicked
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onUpdateHistoryGame(nextSquares);
  }

  return (
    <div data-testid="game-board">
      <div className="status">
        <p>{getStatusPlayer()}</p>
      </div>
    {squares && squares.length && (
      <>
        <div className="board-row">
          {[0, 1, 2].map(i => <Square value={squares[i]} key={i} onSquareClick={() => handleClick(i)} />)}
        </div>
        <div className="board-row">
          {[3, 4, 5].map(i => <Square value={squares[i]} key={i} onSquareClick={() => handleClick(i)} />)}
        </div>
        <div className="board-row">
          {[6, 7, 8].map(i => <Square value={squares[i]} key={i} onSquareClick={() => handleClick(i)} />)}
        </div>      
      </>
    )}
    
    </div>
  );
}
