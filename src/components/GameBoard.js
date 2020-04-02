import React from "react";

import Square from "./Square.js";

let GameBoard = () => {
  return (
    <div className="game-board">
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default GameBoard;
