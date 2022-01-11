import React, { useContext } from "react";
import { AppContext } from "./context";

const style = {
  background: "orange",
  border: "2px solid green",
  width: "50px",
  height: "50px",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
};

const Square = ({ value, index }) => {
  const { handleClick } = useContext(AppContext);

  return (
    <div>
      <button style={style} onClick={() => handleClick(index)}>
        {value}
      </button>
    </div>
  );
};

export default Square;
