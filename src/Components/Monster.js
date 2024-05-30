import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProgressBar from "./ProgressBar";

const Monster = () => {
  // Utilise useSelector pour accéder à l'état du monstre dans le store Redux
  const monster = useSelector((state) => state.fight.monster);

  // Utilisation de useState pour gérer l'état isHit, qui indique si le monstre est touché
  const [isHit, setIsHit] = useState(false);

  // Utilisation de useEffect pour détecter les changements dans les points de vie du monstre
  useEffect(() => {
    if (monster) {
      // Si les points de vie changent, le monstre est marqué comme touché
      setIsHit(true);
      // Après 0.5 seconde, réinitialise isHit à false pour arrêter l'animation
      const timer = setTimeout(() => setIsHit(false), 500);
      // Nettoie le timer pour éviter les fuites de mémoire
      return () => clearTimeout(timer);
    }
  }, [monster?.pv]); // Dépendance sur monster.pv pour relancer l'effet

  // Si le monstre n'existe pas, retourne un message d'erreur
  if (!monster) {
    return "Y'a pas de monstre";
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="card-monstre col-sm-12">
            <div id="monsterCard">
              <div className="text-center">
                <div className="">
                  {/* <div className="col-sm-2 offset-sm-3"> */}
                  {/* <span
                      className="badge badge-danger ml-2 "
                      id="degatSpanMonster"
                    ></span> */}
                  <img
                    className={`image_player ${
                      isHit ? "red-shadow shake" : ""
                    }`}
                    src={`images/${monster.name}.png`}
                    alt={monster.name}
                  />
                  {/* </div> */}
                  {/* <div id="comboOnMonster" className="col-sm-6"></div> */}
                </div>
              </div>
              <h4 className="card-title">Oropo</h4>
              <ProgressBar
                pv={monster.pv}
                pvMax={monster.pvMax}
                bgType="bg-danger"
                faType="fa-heart"
                barName=" : pv"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monster;
