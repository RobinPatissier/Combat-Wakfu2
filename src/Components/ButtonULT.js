import React from "react";
import { useDispatch } from "react-redux";
import { hitBack, hitULT } from "../features/fight/fightSlice";

const ButtonULT = ({ player }) => {
  const dispatch = useDispatch();

  const dispatchHitULT = () => {
    const damage = 50;
    dispatch(hitULT({ playerID: player.id, damage }));
    setTimeout(() => {
      dispatch(hitBack({ playerID: player.id }));
    }, 1000);
  };

  return (
    <button
      type="button"
      onClick={dispatchHitULT}
      className={`btn material-tooltip-main ${player.mana < 25 ? "gris" : ""}`}
      disabled={player.mana < 25}
    >
      <img src={`/images/spell/${player.special}.png`} id="icon_button" />
    </button>
  );
};

export default ButtonULT;
