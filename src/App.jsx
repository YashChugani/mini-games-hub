import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TicTacToe from './components/TicTacToe';
import RockPaperScissors from './components/RockPaperScissors';
import NumberGuessingGame from './components/NumberGuessingGame';
import MemoryCardGame from './components/MemoryCardGame';

function App() {
  console.log("App loaded");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        <Route path="/number-guessing" element={<NumberGuessingGame />} />
        <Route path="/memory-card-game" element={<MemoryCardGame />} />
      </Routes>
    </Router>
  );
}

export default App;


