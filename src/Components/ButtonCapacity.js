import React from "react";
import { useDispatch } from "react-redux";
import { hitBack, hitMonster, hitSpecial } from "../features/fight/fightSlice";

const ButtonCapacity = ({ playerID }) => {
  const dispatch = useDispatch();

  const combat = () => {
    const damage = 10; // Par exemple, un dommage fixe de 10
    dispatch(hitMonster({ playerID, damage }));
    setTimeout(() => {
      dispatch(hitBack({ playerID }));
    }, 1000);
  };

  return (
    <button
      type="button"
      onClick={combat}
      className="btn material-tooltip-main "
    >
      HIT
      <img src="/images/swords.png" id="swords" alt="swords" />
    </button>
  );
};

export default ButtonCapacity;
