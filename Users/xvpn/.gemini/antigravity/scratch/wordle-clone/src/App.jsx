import { useEffect, useState } from 'react';
import useWordle from './hooks/useWordle';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import Modal from './components/Modal';
import { SOLUTIONS } from './data/words';

function App() {
  const [solution, setSolution] = useState(null);
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup, hints, revealHint } = useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const random = SOLUTIONS[Math.floor(Math.random() * SOLUTIONS.length)];
    setSolution(random);
  }, []);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener('keyup', handleKeyup);
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && (
        <>
          <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} hints={hints} />
          <button className="hint-button" onClick={revealHint} disabled={turn > 5}>
            Hint
          </button>
          <Keyboard usedKeys={usedKeys} handleKeyup={handleKeyup} />
          {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        </>
      )}
    </div>
  );
}

export default App;
