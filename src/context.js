import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  };

  const winner = checkWinner(board);

  const handleClick = (i) => {
    //create a copy of the board
    const boardCopy = [...board];
    //if there is a winner || the square is already filled
    if (winner || boardCopy[i]) return;
    //if currentPlayer is X
    else if (currentPlayer === "X") {
      boardCopy[i] = "X";
      console.log("1 - " + boardCopy[i]);
      //if currentPlayer is O
    } else if (currentPlayer === "O") {
      boardCopy[i] = "O";
      console.log("2 - " + boardCopy[i]);
    }
    setBoard(boardCopy);
    switchNextPlayer();

    console.log(boardCopy);
  };

  const switchNextPlayer = () => {
    if (currentPlayer === "X") {
      setCurrentPlayer("O");
    }
    if (currentPlayer === "O") {
      setCurrentPlayer("X");
    }
  };

  const displayWinner = () => {
    if (winner) {
      setTimeout(() => alert("Congrats " + winner), 100);
    }
  };

  return (
    <AppContext.Provider
      value={{ handleClick, checkWinner, displayWinner, board }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
