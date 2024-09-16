import React from 'react';
import './Keyboard.css';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Keyboard = ({ onLetterClick }) => {
  return (
    <div className="keyboard">
      {letters.map(letter => (
        <button
          key={letter}
          className="keyboard-button"
          onClick={() => onLetterClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
