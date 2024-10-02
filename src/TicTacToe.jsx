import "./ttt.css"

import { useState } from "react";

// Initializes an empty 3x3 board
const initialBoard = () => {
  let boardTwoD = [];
  let row = 3;
  let col = 3;
  let h = 0;

  for (let i = 0; i < row; i++) {
    boardTwoD[i] = [];
    for (let j = 0; j < col; j++) {
      boardTwoD[i][j] = null; // Make cells initially empty
    }
  }

  return boardTwoD;
};

export default function TicTacToe() {
  const [board, setBoard] = useState(initialBoard()); // Initialize the board
  const [xTurn, setXTurn] = useState(true); // Boolean to track whose turn it is
  const [pastUserMoves, setPastUserMoves] = useState([]); // Track all user moves

  const compareMoves = (playerMoves) => {
    if (playerMoves.length >= 3) {
      // Check for win condition: same row, column or diagonal
      const rows = new Set(playerMoves.map((move) => move.row));
      const cols = new Set(playerMoves.map((move) => move.col));

      const diagonal1 = playerMoves.every((move) => move.row === move.col); // Top-left to bottom-right
      const diagonal2 = playerMoves.every((move) => move.row + move.col === 2); // Top-right to bottom-left

      if (rows.size === 1 || cols.size === 1 || diagonal1 || diagonal2) {
        console.log(`${xTurn ? "X" : "O"} wins!`);
        return true;
      }
    }
    return false;
  };

  const handleClick = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex]) return; // If cell already clicked, do nothing

    // Update the board with the current player's move
    const newBoard = [...board];
    newBoard[rowIndex][colIndex] = xTurn ? "X" : "O";
    setBoard(newBoard);

    // Store the current move
    const currentMoveByUser = {
      user: xTurn ? "X" : "O",
      row: rowIndex,
      col: colIndex,
    };

    const newMoves = [...pastUserMoves, currentMoveByUser];
    setPastUserMoves(newMoves);

    // Filter the moves of the current player for comparison
    const playerMoves = newMoves.filter((move) => move.user === (xTurn ? "X" : "O"));

    // Check if the player has won
    if (compareMoves(playerMoves)) {
      alert(`${xTurn ? "X" : "O"} wins!`);
      resetGame(); // Reset the game after a win
    } else {
      setXTurn(!xTurn); // Alternate between X and O
    }
  };

  const resetGame = () => {
    setBoard(initialBoard());
    setPastUserMoves([]);
    setXTurn(true); // X starts again
  };

  return (
    <div className="game">
      <div className="status">
        Player {xTurn ? "X" : "O"}'s turn
        <button className="reset-btn" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((row, rowIndex) => {
          return row.map((cell, colIndex) => {
            return (
              <button
                className="cell"
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {cell}
              </button>
            );
          });
        })}
      </div>
    </div>
  );
}
