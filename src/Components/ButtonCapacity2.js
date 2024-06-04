import React from "react";
import { useDispatch } from "react-redux";
import { hitBack, hitSpecial } from "../features/fight/fightSlice";

const ButtonCapacity2 = ({ player }) => {
  const dispatch = useDispatch();

  const specialHit = () => {
    const damage = 50; // Par exemple, un dommage fixe de 50
    dispatch(hitSpecial({ playerID: player.id, damage }));
    setTimeout(() => {
      dispatch(hitBack({ playerID: player.id }));
    }, 1000);
  };

  return (
    <button
      type="button"
      onClick={specialHit}
      className="btn material-tooltip-main "
    >
      <img src={`/images/spell/${player.special}.png`} id="icon_button" />
    </button>
  );
};

export default ButtonCapacity2;
