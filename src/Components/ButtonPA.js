import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { victory, defeat, hitBack, hitPA } from "../features/fight/fightSlice";

const ButtonPA = ({ player }) => {
  const dispatch = useDispatch();
  const monster = useSelector((state) => state.fight.monster);
  const players = useSelector((state) => state.fight.players);

  const dispatchPA = () => {
    const damage = 5;
    dispatch(hitPA({ playerID: player.id, damage }));
    if (monster.pv <= 0) {
      dispatch(victory());
    }
    if (players.pv <= 0) {
      dispatch(defeat());
    }
    setTimeout(() => {
      dispatch(hitBack({ playerID: player.id }));
    }, 1000);
  };

  return (
    <button
      type="button"
      onClick={dispatchPA}
      className="btn tooltip-container"
    >
      <img src={`/images/spell/${player.petite}.png`} id="icon_button" />
      <div className="tooltip-image">
        <img src={`/images/spell/${player.petite}.png`} alt="Tooltip Image 1" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 className="p-3">{player.titlePA}</h3>
          <p className="mx-auto">
            <i class="fa-solid fa-fire-flame-curved icon-spacing blue"> -25</i>
            <i class="fa-solid fa-hand-fist icon-spacing yellow"> 50</i>
          </p>
        </div>
      </div>
    </button>
  );
};

export default ButtonPA;
