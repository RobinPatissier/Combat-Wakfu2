import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { victory, hitBack, hitPA } from "../features/fight/fightSlice";


const ButtonPA = ({ player }) => {
  const dispatch = useDispatch();
  const monster = useSelector((state) => state.fight.monster);


  const dispatchPA = () => {
    const damage = 5;
    dispatch(hitPA({ playerID: player.id, damage }));
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
      onClick={dispatchPA}
      className="btn material-tooltip-main "
    >
      <img src={`/images/spell/${player.petite}.png`} id="icon_button" />
    </button>
  );
};

export default ButtonPA;
