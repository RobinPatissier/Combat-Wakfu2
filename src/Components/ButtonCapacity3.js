import React from "react";
import { useDispatch } from "react-redux";
import { hitBack, heal } from "../features/fight/fightSlice";

const ButtonCapacity3 = ({ player }) => {
  const dispatch = useDispatch();

  const dispatchHeal = () => {
    const healAmount = 50; // Par exemple, un heal fixe de 50
    dispatch(heal({ playerID: player.id, healAmount: healAmount }));
    setTimeout(() => {
      dispatch(hitBack({ playerID: player.id }));
    }, 1000);
  };

  return (
    <button
      type="button"
      onClick={dispatchHeal}
      className="btn material-tooltip-main "
    >
      <img src={`/images/spell/${player.heal}.png`} id="icon_button" />
    </button>
  );
};

export default ButtonCapacity3;
