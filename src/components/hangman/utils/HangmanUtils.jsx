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
    default:
      return state;
  }
};

const words = ['LIBRO', 'OLA', 'PERRO', 'PLAYA', 'MANZANA', 'CASA'];

export const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export const hasPlayerWon = (word, guessedLetters) => {
  return word.split('').every(letter => guessedLetters.includes(letter));
};

export const hasPlayerLost = (wrongGuesses, maxWrongGuesses = 6) => {
  return wrongGuesses >= maxWrongGuesses;
};
