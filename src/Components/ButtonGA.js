import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { victory, hitBack, hitGA } from "../features/fight/fightSlice";

const ButtonGA = ({ player }) => {
  const dispatch = useDispatch();
  const monster = useSelector((state) => state.fight.monster);
  const state = useSelector((state) => state.fight);

  const dispatchGA = () => {
    const damage = 10;
    dispatch(hitGA({ playerID: player.id, damage }));
    if (monster.pv <= 0){
      dispatch(victory())
    }
    setTimeout(() => {
      dispatch(hitBack({ playerID: player.id }));
    }, 1000);

  };

  return (
    <button
      type="button"
      onClick={dispatchGA}
      className={`btn material-tooltip-main ${player.mana < 5 ? "gris" : ""}`}
      disabled={player.mana < 5}
    >
      <img src={`/images/spell/${player.attaque}.png`} id="icon_button" />
    </button>
  );
};

export default ButtonGA;
