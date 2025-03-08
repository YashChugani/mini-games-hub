
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function TicTacToe() {
  const navigate = useNavigate();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner.winner);
      setWinningCells(gameWinner.line);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line };
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setWinningCells([]);
    setXIsNext(true);
  };

  const isDraw = !board.includes(null) && !winner;

  return (
    <div className="game-container">
      <button className="back-button" onClick={() => navigate('/')}>← Back</button>

      {/* Heading */}
      <h1 className="game-heading">Tic Tac Toe</h1>

      <div className={`board ${isDraw ? 'draw' : ''}`}>
        {board.map((cell, index) => (
          <button
            key={index}
            className={`cell ${
              winningCells.includes(index) ? 'winning-cell' : isDraw ? 'draw-cell' : ''
            }`}
            onClick={() => handleClick(index)}
            disabled={cell || winner}
          >
            {cell}
          </button>
        ))}
      </div>

      {/* Winner or Draw Message */}
      {winner ? (
        <div className="status">
          🎉 Player {winner} wins!
        </div>
      ) : isDraw ? (
        <div className="status">
          🤝 It's a draw!
        </div>
      ) : (
        <div className="status">
          Current player: {xIsNext ? 'X' : 'O'}
        </div>
      )}

      <button className="reset-btn" onClick={resetGame}>Reset</button>
    </div>
  );
}
