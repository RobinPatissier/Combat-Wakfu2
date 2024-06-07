import React from "react";
import { useDispatch } from "react-redux";
import { resetGame } from "./fightSlice";

const Game = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <div>
      <button onClick={handleReset}>Reset Game</button>
    </div>
  );
};

export default Game;
