import React from 'react';
import { useDispatch } from "react-redux";
import { hitBack, hitMonster } from "../features/fight/fightSlice";

//modification de src/Components/ButtonCapacity.js
const ButtonCapacity = () => {
  const dispatch = useDispatch();

  const combat = () => {
    dispatch(hitMonster({ damage: 5 }));
    setTimeout(() => {
      dispatch(hitBack());
    }, 1000);
  };

  return (
    <button
      type="button"
      onClick={combat}
      className="btn btn-success material-tooltip-main "
    >
      HIT
      <img src="/images/swords.png" id="swords"></img>
    </button>
  );
};


export default ButtonCapacity;