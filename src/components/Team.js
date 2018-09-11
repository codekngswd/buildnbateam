import React from 'react';
import '../css/team.css';

class Team extends React.Component {
  renderTeam = key => {
    const player = this.props.players[key];
    // const totalPoints = this.props.team[key];

    if (!player) {
      return null;
    }

    return (
      <div id="playerChoice" key={key}>
        <h3>{player.name}</h3>
        <p>{player.position}</p>
        {/* <img src={player.image} alt={player.name} /> */}
        <button onClick={() => this.props.removeFromTeam(key)}>&times;</button>
      </div>
    );
  };

  render() {
    const teamIds = Object.keys(this.props.team);

    return (
      <div id="teamContainer">
        <h1>Your Team</h1>
        <button onClick={this.props.clearTeamState}>
          Clear Team
        </button>
        <div id="team">
          {teamIds.map(this.renderTeam)}
        </div>
      </div>
    );
  }
}

export default Team;