import React, { useState, useEffect } from "react";
import ButtonGA from "./ButtonGA";
import ButtonULT from "./ButtonULT";
import ButtonHEAL from "./ButtonHEAL";
import ButtonPA from "./ButtonPA";
import ProgressBar from "./ProgressBar";

const PlayerCard = (props) => {
  const { player } = props;
  const [isHit, setIsHit] = useState(false);

  useEffect(() => {
    if (player.pv !== prevPlayerPv) {
      setIsHit(true);
      const timer = setTimeout(() => setIsHit(false), 500);
      return () => clearTimeout(timer);
    }
  }, [player.pv]);

  const prevPlayerPv = usePrevious(player.pv);

  function usePrevious(value) {
    const ref = React.useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const style = {
    backgroundImage: `url(images/${
      player.pv <= 0 ? "doscarte.png" : player.name + "-card.gif"
    })`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div
      key={player.id}
      className={`col-sm-3 card center ${isHit ? "red-shadow shake" : ""}`}
      id={`joueur${player.id}`}
      style={style}
    >
      <div className="image_player text-center">
        <div className="card-body">
          {player.pv > 0 ? (
            <>
              <div>
                <ProgressBar
                  pv={player.pv}
                  pvMax={player.pvMax}
                  faType="fa-heart"
                  barName="pv"
                  className="progress_bar_pv rounded-0"
                  bgType={player.color}
                />
              </div>
              <div className="bar_boutons">
                <ProgressBar
                  pv={player.mana}
                  pvMax={player.manaMax}
                  faType="fa-fire-alt"
                  barName="wakfu"
                  className="progress_bar_mana rounded-0"
                />
                <div className="row">
                  <div>
                    <ButtonPA player={props.player} />
                    <ButtonGA player={props.player} />
                    <ButtonULT player={props.player} />
                    <ButtonHEAL player={props.player} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;