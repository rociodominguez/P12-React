import { getRandomWord } from '../utils/HangmanUtils';

export const initialState = {
  word: '',
  guessedLetters: [],
  wrongGuesses: 0,
};

export const hangmanReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORD':
      return { ...state, word: action.payload };
    case 'GUESS_LETTER':
      return {
        ...state,
        guessedLetters: [...state.guessedLetters, action.payload],
        wrongGuesses: state.word.includes(action.payload)
          ? state.wrongGuesses
          : state.wrongGuesses + 1,
      };
    case 'RESET':
      return { ...initialState, word: getRandomWord() };
    default:
      return state;
  }
};
