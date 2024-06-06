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
      type="button"
      onClick={dispatchHEAL}
      className={`btn tooltip-container ${player.mana < 5 ? "gris" : ""}`}
      disabled={player.mana < 5}
    >
      <img src={`/images/spell/${player.heal}.png`} id="icon_button" />
      <div className="tooltip-image">
        <img src={`/images/spell/${player.heal}.png`} alt="Tooltip Image 1" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 className="p-3">{player.titleHEAL}</h3>
          <p className="mx-auto">
            <i class="fa-solid fa-fire-flame-curved blue"> -10</i>
            <i class="fa-solid fa-heart icon-spacing"> +50</i>
          </p>
        </div>
      </div>
    </button>
  );
};

export default ButtonHEAL;
