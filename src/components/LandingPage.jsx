
import { useNavigate } from 'react-router-dom';
import { FaGamepad, FaDice, FaBrain, FaPuzzlePiece } from 'react-icons/fa'; 
import '../styles.css';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <h1>Mini Games Hub</h1>
            <div className="game-list">
                <button className="game-button" onClick={() => navigate('/tic-tac-toe')}>
                    <FaGamepad className="icon" /> Tic-Tac-Toe
                </button>
                <button className="game-button" onClick={() => navigate('/rock-paper-scissors')}>
                    <FaDice className="icon" /> Rock, Paper, Scissors
                </button>
                <button className="game-button" onClick={() => navigate('/number-guessing')}>
                    <FaBrain className="icon" /> Number Guessing Game
                </button>
                <button className="game-button" onClick={() => navigate('/memory-card-game')}>
                    <FaPuzzlePiece className="icon" /> Memory Card Game
                </button>
            </div>
        </div>
    );
}
