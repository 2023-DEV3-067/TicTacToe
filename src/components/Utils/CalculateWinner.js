export default function calculateWinner(squares) {
  // all possible winning lines combos with the index of the squares
  const winningLines = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of winningLines) {
    const [a, b, c] = line;
    // if the index square is equal to the index of the winning line and the value of the square is equal to the value of the other squares in the winning line, you have a winner
    if (squares && squares.length > 0 && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  
  // if there is no winner, return null
  return null;
}
