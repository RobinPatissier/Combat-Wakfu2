import React from "react";
import { useDispatch } from "react-redux";
import { hitBack, hitSpecial } from "../features/fight/fightSlice";

const ButtonCapacity2 = ({ playerID }) => {
  const dispatch = useDispatch();

  const specialHit = () => {
    const damage = 50; // Par exemple, un dommage fixe de 50
    dispatch(hitSpecial({ playerID, damage }));
    setTimeout(() => {
      dispatch(hitBack({ playerID }));
    }, 1000);
  };

  return (
    <button
      type="button"
      onClick={specialHit}
      className="btn btn-success material-tooltip-main "
    >
      SPECIAL
      <img src="/images/skull.png" id="skull" alt="skull" />
    </button>
  );
};

export default ButtonCapacity2;
