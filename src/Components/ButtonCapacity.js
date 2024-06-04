import React from "react";
import { useDispatch } from "react-redux";
import { hitBack, hitMonster, hitSpecial } from "../features/fight/fightSlice";

const ButtonCapacity = ({ player }) => {
  const dispatch = useDispatch();

  const combat = () => {
    const damage = 10; // Par exemple, un dommage fixe de 10
    dispatch(hitMonster({ playerID: player.id, damage }));
    setTimeout(() => {
      dispatch(hitBack({ playerID: player.id }));
    }, 1000);
  };

  return (
    <button
      type="button"
      onClick={combat}
      className="btn material-tooltip-main "
    >
      <img src={`/images/spell/${player.attaque}.png`} id="icon_button" />
    </button>
  );
};

export default ButtonCapacity;
