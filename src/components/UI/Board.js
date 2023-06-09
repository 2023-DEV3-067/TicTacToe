import React from 'react';
import Square from './Square';
import calculateWinner from '../Utils/CalculateWinner';

export default function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : '0'}`;

  console.log(status);
  const isMatchNull = squares.every((square) => square !== null && winner === null);

  const handleClick = (i) => {
    if (winner || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onSquareClick={() => handleClick(i)} />;
  };

  return (
    <>
      <div className="status">{!isMatchNull && ( 
        <p>{status}</p>
      )}</div>
      <div className="matchNull">{isMatchNull && ( 
        <p>Match null</p>
      )}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
}
