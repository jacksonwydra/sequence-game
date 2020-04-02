import React from "react";

import GameConfig from "./GameConfig.js";
import GameBoard from "./GameBoard.js";

let Game = () => {
  return (
    <div className="game">
      <GameConfig />
      <GameBoard />
    </div>
  );
};

export default Game;
