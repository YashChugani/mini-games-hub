import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import LoadingScreen from './LoadingScreen.jsx';

export default function NumberGuessingGame() {
  const navigate = useNavigate();
  const [minRange, setMinRange] = useState(1);
  const [maxRange, setMaxRange] = useState(100);
  const [targetNumber, setTargetNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(5);
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  // Function to generate a random number in the selected range
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  };

  const startGame = () => {
    setTargetNumber(generateRandomNumber());
    setAttempts(5);
    setGuesses([]);
    setGameOver(false);
    setGameWon(false);
    setMessage('');
    setGameStarted(true);
  };

  const handleGuess = () => {
    if (gameOver || guess === '') return;

    const numGuess = Number(guess);
    const newGuesses = [...guesses, numGuess];
    setGuesses(newGuesses);

    if (numGuess === targetNumber) {
      setMessage(`🎉 Correct! You guessed the number in ${6 - attempts} tries.`);
      setGameWon(true);
      setGameOver(true);
    } else if (attempts - 1 === 0) {
      setMessage(`❌ Game Over! The correct number was ${targetNumber}.`);
      setGameOver(true);
    } else {
      setMessage(numGuess < targetNumber ? '⬆️ Too low! Try again.' : '⬇️ Too high! Try again.');
      setAttempts(attempts - 1);
    }

    setGuess('');
  };

  const resetGame = () => {
    setGameStarted(false);
    setTargetNumber(null);
    setGuess('');
    setMessage('');
    setAttempts(5);
    setGuesses([]);
    setGameOver(false);
    setGameWon(false);
  };

  if (loading) {
      return <LoadingScreen onComplete={() => setLoading(false)} />;
    }
  
  return (
    <div className="game-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/')}>← Back</button>

      {/* Heading */}
      <h1 className="game-heading">Number Guessing Game</h1>

      {/* Range Setting */}
      {!gameStarted && (
        <div className="range-setting">
          <label>
            Min:  
            <input
              type="number"
              value={minRange}
              onChange={(e) => setMinRange(Number(e.target.value))}
              min="1"
              className="range-input"
            />
          </label>
          <label>
            Max:  
            <input
              type="number"
              value={maxRange}
              onChange={(e) => setMaxRange(Number(e.target.value))}
              min={minRange + 1}
              className="range-input"
            />
          </label>
          <button className="start-btn" onClick={startGame}>Start Game</button>
        </div>
      )}

      {/* Game Status */}
      {gameStarted && <div className="status">{message}</div>}

      {/* Guess Input */}
      {gameStarted && !gameOver && (
        <div className="guess-section">
          <input
            type="number"
            className="guess-input"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter your guess"
          />
          <button className="submit-btn" onClick={handleGuess}>Guess</button>
        </div>
      )}

      {/* Attempts Left */}
      {gameStarted && !gameOver && (
        <div className="attempts-left">Attempts Left: {attempts}</div>
      )}

      {/* List of Guesses (After Loss) */}
      {gameOver && !gameWon && (
        <div className="guess-list">
          <p>Your guesses: {guesses.join(', ')}</p>
        </div>
      )}

      {/* Reset Button */}
      {gameStarted && (
        <button className="reset-btn" onClick={resetGame}>Play Again</button>
      )}
    </div>
  );
}
