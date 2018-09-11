import React, { Component } from 'react';

// Component Files
import Header from "./Header";
import Player from './Player';
import Team from "./Team";

// JavaScript File
import playerList from '../player-list.js';

var IsDisabled = false;

class App extends Component {
  state = {
    players: {},
    team: {},
  };

  componentDidMount() {
    this.setState({ players: playerList });
  }

  addToTeam = key => {
    const team = { ...this.state.team };
    team[key] = team[key] + 1 || 1;
    this.setState({ team });
  };

  disableButton = (value) => {
    value = IsDisabled;
    return value;
  }

  removeFromTeam = key => {
    const team = { ...this.state.team };
    delete team[key];
    this.setState({ team });
  };

  clearTeamState = () => {
    this.setState({ team: [] });
  };

  // This lifecycle method listens to every single click
  componentDidUpdate() {
    if (Object.keys(this.state.team).length === 5) {
      console.log ("addPlayer disabled: " + this.disableButton(true));
    } else {
     console.log ("addPlayer disabled: " + this.disableButton(false));
    }
    console.log(Object.keys(this.state.team).length);
  }

  render() {
    return (

      <div>
        {/*
        */}
        <Header />

        {/*
        */}
        <div id="playerContainer">
          {Object.keys(this.state.players).map(key => (
            <Player
              key={key}
              index={key}
              addToTeam={this.addToTeam}
              disableButton={this.disableButton}
              players={this.state.players}
              details={this.state.players[key]}
            />
          ))}
        </div>

        {/*
        */}
        <Team
          players={this.state.players}
          team={this.state.team}
          removeFromTeam={this.removeFromTeam}
          clearTeamState={this.clearTeamState}
        />
      </div>
    );
  }
}

export default App;