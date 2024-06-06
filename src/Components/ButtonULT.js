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
      type="button"
      onClick={dispatchHitULT}
      className={`btn tooltip-container ${player.mana < 5 ? "gris" : ""}`}
      disabled={player.mana < 5}
    >
      <img src={`/images/spell/${player.special}.png`} id="icon_button" />
      <div className="tooltip-image">
        <img
          src={`/images/spell/${player.special}.png`}
          alt="Tooltip Image 1"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 className="p-3">{player.titleULT}</h3>
          <p className="mx-auto">
            <i class="fa-solid fa-fire-flame-curved icon-spacing blue"> -25</i>
            <i class="fa-solid fa-hand-fist icon-spacing yellow"> 50</i>
          </p>
        </div>
      </div>
    </button>
  );
};

export default ButtonULT;
