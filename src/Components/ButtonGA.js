import React from "react";
import { useDispatch } from "react-redux";
import { hitBack, hitGA } from "../features/fight/fightSlice";

const ButtonGA = ({ player }) => {
  const dispatch = useDispatch();

  const dispatchGA = () => {
    const damage = 10;
    dispatch(hitGA({ playerID: player.id, damage }));
    setTimeout(() => {
      dispatch(hitBack({ playerID: player.id }));
    }, 1000);
  };

  return (
    <button
      type="button"
      onClick={dispatchGA}
      className="btn material-tooltip-main "
    >
      <img src={`/images/spell/${player.attaque}.png`} id="icon_button" />
    </button>
  );
};

export default ButtonGA;
