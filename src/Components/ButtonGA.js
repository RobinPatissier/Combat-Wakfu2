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
    if (monster.pv <= 0) {
      dispatch(victory());
    }
    setTimeout(() => {
      dispatch(hitBack({ playerID: player.id }));
    }, 1000);
  };

  return (
    <button
      type="button"
      onClick={dispatchGA}
      className={`btn tooltip-container ${player.mana < 5 ? "gris" : ""}`}
      disabled={player.mana < 5}
    >
      <img src={`/images/spell/${player.attaque}.png`} id="icon_button" />
      <div className="tooltip-image">
        <img
          src={`/images/spell/${player.attaque}.png`}
          alt="Tooltip Image 1"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 className="p-3">{player.titleGA}</h3>
          <p className="mx-auto">
            <i class="fa-solid fa-fire-flame-curved icon-spacing blue"> -5 </i>
            <i class="fa-solid fa-hand-fist icon-spacing yellow"> 10</i>
          </p>
        </div>
      </div>
    </button>
  );
};

export default ButtonGA;
