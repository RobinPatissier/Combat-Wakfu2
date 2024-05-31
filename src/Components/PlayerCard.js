import React from "react";
import ButtonCapacity from "./ButtonCapacity";
import ButtonCapacity2 from "./ButtonCapacity2";
import ProgressBar from "./ProgressBar";

class PlayerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHit: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.player.pv !== this.props.player.pv) {
      this.setState({ isHit: true }, () => {
        setTimeout(() => this.setState({ isHit: false }), 500);
      });
    }
  }

  render() {
    const { player } = this.props;
    const { isHit } = this.state;
    // if ( player.pv > 0) {
    return (
      <div
        key={player.id}
        className="col-sm-3 card center"
        id={`joueur${player.id}`}
      >
        <div className={`card-body text-center ${player.pv < 0 ? "gris" : ""}`}>
          <img
            className={`image_player ${isHit ? "red-shadow shake" : ""}`}
            src={`images/${player.name}.png`}
            alt={player.name}
          />
          <h5 className="card-title">{player.name}</h5>
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
    );
  }
}
// }

export default PlayerCard;
