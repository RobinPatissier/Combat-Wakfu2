import React from "react";
import { useDispatch } from "react-redux";
import { hitBack, hitMonster } from "../features/fight/fightSlice";

const ButtonCapacity4 = ({ player }) => {
  const dispatch = useDispatch();

  const petite = () => {
    const damage = 5; // Par exemple, un dommage fixe de 10
    dispatch(hitMonster({ playerID: player.id, damage }));
    setTimeout(() => {
      dispatch(hitBack({ playerID: player.id }));
    }, 1000);
  };

  return (
    <button
      type="button"
      onClick={petite}
      className="btn material-tooltip-main "
    >
      <img src={`/images/spell/${player.petite}.png`} id="icon_button" />
    </button>
  );
};

export default ButtonCapacity4;
