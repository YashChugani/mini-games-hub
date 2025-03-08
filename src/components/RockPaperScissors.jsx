
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const choices = ['Rock', 'Paper', 'Scissors'];

export default function RockPaperScissors() {
  const navigate = useNavigate();
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [scores, setScores] = useState({ player: 0, computer: 0 });

  const getResult = (player, computer) => {
    if (player === computer) return 'Draw';
    if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) return 'You Win!';
    return 'You Lose!';
  };

  const handleChoice = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(compChoice);

    const outcome = getResult(choice, compChoice);
    setResult(outcome);

    setScores((prev) => ({
      player: outcome === 'You Win!' ? prev.player + 1 : prev.player,
      computer: outcome === 'You Lose!' ? prev.computer + 1 : prev.computer,
    }));
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult('');
  };

  const resetScore = () => {
    setScores({ player: 0, computer: 0 });
    resetGame();
  };

  return (
    <div className="game-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back
      </button>

      {/* Heading */}
      <h1 className="game-heading">Rock, Paper, Scissors</h1>

      {/* Scoreboard */}
      <div className="scoreboard">
        <span>Player: {scores.player}</span>
        <span>Computer: {scores.computer}</span>
      </div>

      {/* Choices */}
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} className="choice-btn" onClick={() => handleChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>

      {/* Result */}
      {result && (
        <div className={`result-text ${result === 'You Win!' ? 'win' : result === 'You Lose!' ? 'lose' : 'draw'}`}>
          {result}
        </div>
      )}

      {/* Chosen Values */}
      {playerChoice && (
        <div className="choice-result">
          <p>You chose: <strong>{playerChoice}</strong></p>
          <p>Computer chose: <strong>{computerChoice}</strong></p>
        </div>
      )}

      {/* Reset Buttons */}
      <div className="reset-buttons">
        <button className="reset-btn" onClick={resetGame}>
          Reset Game
        </button>
        <button className="reset-btn reset-score-btn" onClick={resetScore}>
          Reset Score
        </button>
      </div>
    </div>
  );
}
