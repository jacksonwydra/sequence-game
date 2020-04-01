import React from "react";

import GameConfig from "./GameConfig.js";
import GameBoard from "./GameBoard.js";

export default function Game() {
  return (
    <div>
      <GameConfig />
      <GameBoard />
    </div>
  );
}
