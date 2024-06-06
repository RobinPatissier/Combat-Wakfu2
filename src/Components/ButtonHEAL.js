import React from "react";
import { useDispatch } from "react-redux";
import { hitBack, heal } from "../features/fight/fightSlice";

const ButtonHEAL = ({ player }) => {
  const dispatch = useDispatch();

  const dispatchHEAL = () => {
    const healAmount = 50; // Par exemple, un heal fixe de 50
    dispatch(heal({ playerID: player.id, healAmount: healAmount }));
    setTimeout(() => {
      dispatch(hitBack({ playerID: player.id }));
    }, 1000);
  };

  return (
    <button
      title={player.titleHEAL}
      type="button"
      onClick={dispatchHEAL}
      className={`btn material-tooltip-main ${player.mana < 10 ? "gris" : ""}`}
      disabled={player.mana < 10}
    >
      <img src={`/images/spell/${player.heal}.png`} id="icon_button" />
    </button>
  );
};

export default ButtonHEAL;
