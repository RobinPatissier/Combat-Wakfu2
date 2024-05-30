import React from "react";
import ButtonCapacity from "./ButtonCapacity";
import ProgressBar from "./ProgressBar";

class PlayerCard extends React.Component {
  constructor(props) {
    super(props);
    // Initialisation de l'état local pour gérer l'effet de toucher
    this.state = {
      isHit: false, // Indique si le joueur est touché
    };
  }

  // Méthode appelée à chaque mise à jour du composant
  componentDidUpdate(prevProps) {
    // Si les points de vie ont changé, le joueur a été touché
    if (prevProps.player.pv !== this.props.player.pv) {
      // Met à jour l'état isHit à true pour déclencher l'animation
      this.setState({ isHit: true }, () => {
        // Après 0.5 seconde, remet isHit à false pour arrêter l'animation
        setTimeout(() => this.setState({ isHit: false }), 500);
      });
    }
  }

  render() {
    const { player } = this.props;
    const { isHit } = this.state;
    return (
      <div
        key={this.props.player.id}
        className="col-sm-3 card center"
        id={`joueur${this.props.player.id}`}
      >
        <div className="card-body text-center">
          <img
            className={`image_player ${isHit ? "red-shadow shake" : ""}`}
            src={`images/${player.name}.png`}
            alt={player.name}
          />
          <h5 className="card-title">{this.props.player.name}</h5>

          <ProgressBar
            pv={this.props.player.pv}
            pvMax={this.props.player.pvMax}
            faType="fa-heart"
            barName=" pv "
            bgType="bg-danger"
          />
          <ProgressBar
            pv={this.props.player.mana}
            pvMax={this.props.player.manaMax}
            img="/images/flamme.gif"
            faType="fa-fire-alt"
            barName=" wakfu "
          />
          {/* Condition ternaire pour afficher les ButtonCapacity */}
          {this.props.player.pv > 0 && (
            <div className="row">
              <div>
                <ButtonCapacity player={this.props.player} />
                <ButtonCapacity player={this.props.player} />
                <ButtonCapacity player={this.props.player} />
                <ButtonCapacity player={this.props.player} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PlayerCard;
