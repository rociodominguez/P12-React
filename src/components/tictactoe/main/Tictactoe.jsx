import React, { useState } from 'react';
import Board from '../utils/board/Board';
import { calculateWinner } from '../utils/TictactoeUtils';
import './Tictactoe.css';

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || newSquares[index]) {
      return;
    }
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(squares);
  
  const isBoardFull = squares.every(square => square !== null);
  const isDraw = isBoardFull && !winner;

  const status = winner
    ? `El ganador es ${winner}`
    : isDraw
    ? '¡Empate!'
    : `Es el turno de ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="tic-tac-toe">
      <h1 className="title">Tres en Raya</h1>
      <div className={`status ${winner ? 'status-winner' : (xIsNext ? 'status-x' : 'status-o')}`}>
        {status}
      </div>
      <Board squares={squares} onClick={handleClick} />
      <button className="restart-button" onClick={handleRestart}>Reiniciar Partida</button>
    </div>
  );
};

export default TicTacToe;
