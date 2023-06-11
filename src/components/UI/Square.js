export default function Square({ value, onSquareClick }) {
    return (
      <button className="square" onClick={onSquareClick} data-testid="square">
        {value}
      </button>
    );
  }
