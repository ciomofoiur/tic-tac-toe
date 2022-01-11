import React, { useContext } from "react";
import Board from "./Board";
import { AppContext } from "./context";

const Game = () => {
  const { displayWinner } = useContext(AppContext);
  displayWinner();

  return <Board />;
};

export default Game;
