import React, { useState, useEffect } from "react";
import ButtonCapacity from "./ButtonCapacity";
import ButtonCapacity2 from "./ButtonCapacity2";
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
    backgroundImage: `url(images/${player.name}-card.gif)`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div
      key={player.id}
      className="col-sm-3 card center"
      id={`joueur${player.id}`}
    >
      <div
        className={`card-body text-center ${player.pv < 0 ? "gris" : ""}`}
        style={style}
      >
        <div className="corps">
          <ProgressBar
            pv={player.pv}
            pvMax={player.pvMax}
            faType="fa-heart"
            barName=" pv "
            bgType="bg-danger"
          />
          <ProgressBar
            pv={player.mana}
            pvMax={player.manaMax}
            faType="fa-fire-alt"
            barName=" wakfu "
          />
          {player.pv > 0 && (
            <div className="row">
              <div>
                <ButtonCapacity playerID={player.id} />
                <ButtonCapacity2 playerID={player.id} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
