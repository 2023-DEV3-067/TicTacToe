import calculateWinner from './CalculateWinner';

describe('calculateWinner function', () => {
  test('returns X as the winner (case 1)', () => {
    const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
    const winner = calculateWinner(squares);
    expect(winner).toBe('X');
  });

  test('returns X as the winner (case 2)', () => {
    const squares = ['X', 'X', 'X', 'O', 'O', 'X', null, null, null];
    const winner = calculateWinner(squares);
    expect(winner).toBe('X');
  });

  test('returns X as the winner (case 3)', () => {
    const squares = ['X', 'X', 'X', 'O', 'O', 'X', 'O', null, null];
    const winner = calculateWinner(squares);
    expect(winner).toBe('X');
  });

  test('returns X as the winner (case 4)', () => {
    const squares = ['X', 'X', 'X', 'O', 'O', 'X', 'O', 'O', 'X'];
    const winner = calculateWinner(squares);
    expect(winner).toBe('X');
  });

  test('returns X as the winner (case 5)', () => {
    const squares = ['X', 'X', 'X', 'O', 'O', 'X', 'O', 'O', null];
    const winner = calculateWinner(squares);
    expect(winner).toBe('X');
  });


  test('returns O as the winner (case 1)', () => {
    const squares = ['X', 'X', 'O', 'O', 'O', 'X', null, null, null];
    const winner = calculateWinner(squares);
    expect(winner).toBe(null);
  });

  test('returns O as the winner (case 2)', () => {
    const squares = ['X', 'X', 'O', 'O', 'O', 'X', 'O', null, null];
    const winner = calculateWinner(squares);
    expect(winner).toBe('O');
  });

  test('returns O as the winner (case 3)', () => {
    const squares = ['X', 'X', 'O', 'O', 'O', 'X', 'O', 'X', 'X'];
    const winner = calculateWinner(squares);
    expect(winner).toBe('O');
  });

  test('returns O as the winner (case 4)', () => {
    const squares = ['X', 'X', 'O', 'O', 'O', 'X', 'O', 'X', null];
    const winner = calculateWinner(squares);
    expect(winner).toBe('O');
  });

  test('returns O as the winner (case 5)', () => {
    const squares = ['X', 'X', 'O', 'O', 'O', 'X', 'O', 'X', 'O'];
    const winner = calculateWinner(squares);
    expect(winner).toBe('O');
  });

  test('returns null as the winner (case 1)', () => {
    const squares = ['O', 'O', 'X', 'X', 'O', 'O', 'X', 'X', 'O'];
    const winner = calculateWinner(squares);
    expect(winner).toBe('O');
  });

  test('returns null as the winner (case 2)', () => {
    const squares = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
    const winner = calculateWinner(squares);
    expect(winner).toBe(null);
  });

  test('returns null as the winner (case 3)', () => {
    const squares = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
    const winner = calculateWinner(squares);
    expect(winner).toBe('X');
  });

  test('returns null as the winner (case 4)', () => {
    const squares = ['X', 'O', 'X', 'O', 'X', 'O',  'O', 'X', 'O'];
    const winner = calculateWinner(squares);
    expect(winner).toBe(null);
  });
});