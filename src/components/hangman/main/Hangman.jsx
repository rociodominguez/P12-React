import React from 'react';
import WordDisplay from '../utils/word/Word';
import Keyboard from '../utils/keyboard/Keyboard';
import { useHangman } from '../hook/useHangman';
import './Hangman.css';

const Hangman = () => {
  const { word, guessedLetters, wrongGuesses, isWinner, isLoser, handleLetterClick, handleRestart } = useHangman();

  return (
    <div className="hangman">
      <h1 className="hangman-title">Ahorcado</h1>
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <div className="hangman-drawing">Intentos: {wrongGuesses}</div>
      {!isWinner && !isLoser && <Keyboard onLetterClick={handleLetterClick} />}
      {isWinner && <p className="message winner">¡Enhorabuena! Has ganado.</p>}
      {isLoser && <p className="message loser">¡Lo siento! La palabra era {word}.</p>}
      <button className="restart-button" onClick={handleRestart}>Reiniciar Partida</button>
    </div>
  );
}

export default Hangman;
