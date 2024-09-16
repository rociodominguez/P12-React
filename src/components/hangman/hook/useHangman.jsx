import { useState } from 'react';
import { getRandomWord, hasPlayerWon, hasPlayerLost } from '../utils/HangmanUtils';

export const useHangman = () => {
  const [word, setWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const isWinner = hasPlayerWon(word, guessedLetters);
  const isLoser = hasPlayerLost(wrongGuesses);

  const handleLetterClick = (letter) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const handleRestart = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  return {
    word,
    guessedLetters,
    wrongGuesses,
    isWinner,
    isLoser,
    handleLetterClick,
    handleRestart,
  };
};
