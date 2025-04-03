import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import LoadingScreen from './LoadingScreen.jsx';
import Footer from './Footer.jsx';

const initialCards = [
  '🍎', '🍎', '🍌', '🍌', '🍉', '🍉', '🍇', '🍇',
  '🍒', '🍒', '🍍', '🍍', '🥝', '🥝', '🍓', '🍓'
];

export default function MemoryCardGame() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  // Shuffle cards on game start
  useEffect(() => {
    setCards(shuffleCards(initialCards));
  }, []);

  // Shuffle function
  const shuffleCards = (cards) => {
    return cards
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        id: index,
        value: card,
        isFlipped: false,
        isMatched: false
      }));
  };

  const handleCardClick = (index) => {
    if (selectedCards.length === 2 || cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newSelectedCards = [...selectedCards, index];
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      setAttempts(attempts + 1);
      checkMatch(newSelectedCards, newCards);
    }
  };

  const checkMatch = (selected, newCards) => {
    const [first, second] = selected;

    if (newCards[first].value === newCards[second].value) {
      newCards[first].isMatched = true;
      newCards[second].isMatched = true;
      setMatchedPairs((prev) => [...prev, newCards[first].value]);
      setSelectedCards([]);
    } else {
      setTimeout(() => {
        newCards[first].isFlipped = false;
        newCards[second].isFlipped = false;
        setCards(newCards);
        setSelectedCards([]);
      }, 1000);
    }
  };

  const resetGame = () => {
    setCards(shuffleCards(initialCards));
    setMatchedPairs([]);
    setAttempts(0);
    setSelectedCards([]);
  };

  const isGameOver = matchedPairs.length === initialCards.length / 2;

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }


  return (
    <div className="game-container">
      <button className="back-button" onClick={() => navigate('/')}>← Back</button>
      <h1 className="game-heading">Memory Card Game</h1>

      {/* Grid */}
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {card.isFlipped || card.isMatched ? card.value : '❓'}
          </div>
        ))}
      </div>

      {/* Status */}
      {isGameOver ? (
        <div className="status">🎉 You matched all pairs in {attempts} attempts!</div>
      ) : (
        <div className="status">Attempts: {attempts}</div>
      )}

      {/* Reset */}
      <button className="reset-btn" onClick={resetGame}>Restart</button>
      <Footer />
    </div>
  );
}
