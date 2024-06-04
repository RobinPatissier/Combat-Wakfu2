import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProgressBar from "./ProgressBar";

const Monster = () => {
  const monster = useSelector((state) => state.fight.monster);
  const [isHit, setIsHit] = useState(false);

  // détecter les changements dans les points de vie du monstre
  useEffect(() => {
    if (monster) {
      setIsHit(true);
      const timer = setTimeout(() => setIsHit(false), 500);
      return () => clearTimeout(timer);
    }
  }, [monster?.pv]);

  if (!monster) {
    return "Y'a pas de monstre";
  }

  const style = {
    backgroundImage: `url(images/${monster.name}-card.gif)`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

    return (
      <div
        key={monster.id}
        className={`col-sm-3 card card-monster center ${
          isHit ? "red-shadow shake" : ""
        }`}
        id={`joueur${monster.id}`}
        style={style}
      >
        <div
          className={`image_monster text-center ${
            monster.pv < 0 ? "gris" : ""
          }`}
        >
          <div className="card-body">
            <div>
              <ProgressBar
                pv={monster.pv}
                pvMax={monster.pvMax}
                faType="fa-heart"
                barName="pv"
                className="progress_bar_pv_monster rounded-0 "
                bgType={monster.color}
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Monster;
