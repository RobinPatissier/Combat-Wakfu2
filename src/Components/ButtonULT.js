import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hitBack, hitULT, victory } from "../features/fight/fightSlice";

const ButtonULT = ({ player }) => {
  const dispatch = useDispatch();
  const monster = useSelector((state) => state.fight.monster);

  const dispatchHitULT = () => {
    const damage = 50;
    dispatch(hitULT({ playerID: player.id, damage }));
    if (monster.pv <= 0){
      dispatch(victory())
    }
    setTimeout(() => {
      dispatch(hitBack({ playerID: player.id }));
    }, 1000);
  };

  return (
    <button
      title={player.titleULT}
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
