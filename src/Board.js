import React, { useContext } from "react";
import { AppContext } from "./context";
import Square from "./Square";

const Board = () => {
  const { board } = useContext(AppContext);

  return (
    <div className="grid-container">
      {board.map((square, i) => {
        return <Square key={i} value={square} index={i} />;
      })}

      {/* <Square value="1" />
      <Square value="2" />
      <Square value="3" />
      <Square value="4" />
      <Square value="5" />
      <Square value="6" />
      <Square value="7" />
      <Square value="8" />
      <Square value="9" /> */}
    </div>
  );
};

export default Board;
