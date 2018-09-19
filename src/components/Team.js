import React from 'react';

// CSS Files
import '../css/team.css';

class Team extends React.Component {
  /** */
  renderTeam = key => {
    const player = this.props.players[key];

    if (!player) {
      return null;
    }

    return (
      <div id="playerChoice" key={key}>
        <h3>{player.position}: {player.name}</h3>
        <p>{player.value}</p>
        <img src={player.image} alt={player.name} />
        <button onClick={() => this.props.removeFromTeam(key)}>&times;</button>
      </div>
    );
  };

  render() {
    const teamIds = Object.keys(this.props.team);

    const total = teamIds.reduce((prevTotal, key) => {
      const player = this.props.players[key];

      prevTotal = prevTotal + player.value;

      return prevTotal;
    }, 0);

    return (
      <div id="teamContainer">
        <table id="teamContainerTitle">
          <tbody>
            <tr>
            <td></td>
              <td><h1>Your Team</h1></td>
              <td><button id="clearTeamButton" onClick={this.props.clearTeamState}>Clear Team</button></td>
            </tr>
            <tr>
              <td></td>
              <td><h2>Total Points: {total}</h2></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div id="team">
          {teamIds.map(this.renderTeam)}
        </div>
      </div>
    );
  }
}

export default Team;