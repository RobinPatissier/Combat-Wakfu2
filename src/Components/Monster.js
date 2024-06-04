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
      <section>
        <div className="container">
          <div className="row">
            <div className="card-monstre col-sm-12">
              <div id="monsterCard">
                <div className="text-center">
                  <div className="cardMonster">
                    <img
                      className={`image_player ${
                        isHit ? "red-shadow shake" : ""
                      }`}
                      src={`images/${monster.name}-card.gif`}
                      alt={monster.name}
                    />
                    <ProgressBar
                      pv={monster.pv}
                      pvMax={monster.pvMax}
                      faType="fa-heart"
                      barName=" : pv"
                      className="progress_bar_pv rounded-0 "
                      bgType={monster.color}
                    />
                  </div>
                </div>
                {/* <h4 className="card-title">{monster.name}</h4> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Monster;
