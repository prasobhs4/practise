import React, { useState } from "react";
import Square from "./Square";
import "./ticktac.style.css";

const TickTac = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [toggleClick, setToggleClick] = useState(false);
  const [winner, setWinner] = useState(false);

  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkForWinning = () => {
    for (let i = 0; i < winningCombination.length; i++) {
      const [a, b, c] = winningCombination[i];
      if (squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  };

  const winnerPlayer = checkForWinning();

  React.useEffect(() => {
    if (winnerPlayer) {
      setWinner(true);
    }
  }, [winnerPlayer]);

  const handleClick = (i) => {
    if (winner) {
      return;
    }

    if (!squares[i]) {
      squares[i] = !toggleClick ? "X" : "O";
    }

    setSquares(squares);
    setToggleClick(!toggleClick);
  };

  return (
    <div className="container-header">
      <div className="container">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="container">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="container">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <br />
      <button
        style={{ marginLeft: "520px" }}
        onClick={() => {
          setSquares(Array(9).fill(null));
          setWinner(false);
        }}
      >
        Restart
      </button>
      {winner && <h1>{`${winnerPlayer} is the winner`}</h1>}
    </div>
  );
};

export default TickTac;
