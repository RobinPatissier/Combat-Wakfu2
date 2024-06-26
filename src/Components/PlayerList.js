import React from "react";
import { useSelector } from "react-redux";
import PlayerCard from "./PlayerCard";

const PlayerList = () => {
  const players = useSelector((state) => state.fight.players);

  const displayPlayers = () => {
    if (!players || Object.keys(players).length === 0) {
      return <div>Pas de players trouvé</div>;
    }
    

    return Object.keys(players).map((key) => (
      <div key={players[key].id} className="player">
        <PlayerCard player={players[key]} />
      </div>
    ));
  };

  return <div className="row2">{displayPlayers()}</div>;
};

export default PlayerList;
