import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { hitBack, hitMonster } from "../features/fight/fightSlice";

//modification de src/Components/ButtonCapacity.js
const ButtonCapacity = () => {
  const dispatch = useDispatch();

  const combat = () => {
      dispatch(hitMonster({ damage: 5 }));
    console.log("aie !");
    dispatch(hitBack());
    console.log("outch !");
  };

  return (
    <button
      type="button"
      onClick={combat}
      className="btn btn-success material-tooltip-main "
    >
      HIT
      <i className="fas fa-bomb"></i>
      <i className="fas fa-fire-alt"></i> -5
    </button>
  );
};



export default ButtonCapacity;