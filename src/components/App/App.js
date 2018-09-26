import React, { Component } from 'react';

// Component Files
import Header from "../Header/Header";
import Player from '../Player/Player';
import Team from "../Team/Team";

// CSS Files
import './app.css';

// JavaScript File
import playerList from '../../player-list.js';
import PointsTitle from '../PointsTitle/PointsTitle';
import PositionsTitle from '../PositionsTitle/PositionsTitle';
import Total from '../Total/Total';

// Context
const AddToTeamContext = React.createContext({});
const IsDisabledContext = React.createContext({});

// Add Player Method From App Context
export const ProviderAddToTeam = AddToTeamContext.Provider;
export const ConsumerAddToTeam = AddToTeamContext.Consumer;

// Disable Player Method From App Context
export const ProviderIsDisabled = IsDisabledContext.Provider;
export const ConsumerIsDisabled = IsDisabledContext.Consumer;

// Global Variable
var isDisabled;

class App extends Component {
  state = {
    players: {},
    team: {},
  };

  /** When the component mounts load player-list.js */
  componentDidMount() {
    this.setState({ players: playerList });
  }

  /** This method tales a copy of the current
   * team state and then adds a Player to 
   * Team State via key */
  addToTeam = key => {
    const team = { ...this.state.team };
    team[key] = team[key] + 1 || 1;
    this.setState({ team });
  }

  /** This method takes a copy of the current
   * team state and then deletes a Player from 
   * Team State via key */
  removeFromTeam = key => {
    const team = { ...this.state.team };
    delete team[key];
    this.setState({ team });
  };

  /** This function clears the current Team State
   *  with an empty array */
  clearTeamState = () => {
    this.setState({ team: "" });
  };

  render() {
    /** Using Team State take each Player, add their
     * values and save in total */
    const teamIds = Object.keys(this.state.team);

    const total = teamIds.reduce((prevTotal, key) => {
      const player = this.state.players[key];
      prevTotal = prevTotal + player.value;
      return prevTotal;
    }, 0);

    /** If the length of Team State is less than 5 AND
     * total points is equal to or greater than 15
     * alert user. set isDisabled TRUE below
     */
    if (Object.keys(this.state.team).length < 5 && total >= 15) {
      alert("Team Size " + Object.keys(this.state.team).length + " Players with " + total + " Points.");
    }
    /** If the length of Team State is equal to 5 AND
     * total points is greater than 15
     * alert user. set isDisabled TRUE below
     */
    if (Object.keys(this.state.team).length === 5 && total > 15) {
      alert("Total Points: " + total + ". Too high.");
    }

    /** If the length of Team State is equal to 5 AND
     * total points is less than 15
     * alert user. set isDisabled TRUE
     */
    if (Object.keys(this.state.team).length === 5 && total < 15) {
      isDisabled = true;
      alert("Total Points: " + total + ". Too low.");
    }

    /** If the length of Team State is equal to 5 OR
     * total points is equal to or greater than 15, 
     * then set isDisabled to true and disable all
     * Player buttons */
    if (Object.keys(this.state.team).length === 5 || total >= 15) {
      isDisabled = true;
    } else {
      isDisabled = false;
    }

    return (
      <div>
        {/*
        Header Component
        Title
        */}
        <Header />

        {/*
        Total Component
        Displays user's current total
        */}
        <Total
          players={this.state.players}
          team={this.state.team}
        />

        <div class="grid-container">
          {/** Horizontal Table that indicates Player Point value */}
          <PointsTitle />

          {/** Vertical Table that indicates Player Position */}
          <PositionsTitle />

          {/*
          Player Component
          Contains all Players

          Functionality (Passed using Context):
          - Add Player
          - isDisabled
          */}
          <div class="content background" id="playerContainer">
            {Object.keys(this.state.players).map(key => (
              <ProviderIsDisabled key={key} value={isDisabled}>
                <ProviderAddToTeam value={() => this.addToTeam(key)}>
                  <Player
                    key={key}
                    details={this.state.players[key]}
                  />
                </ProviderAddToTeam>
              </ProviderIsDisabled>
            ))}
          </div>
        </div>

        {/*
        Team Component
        Contains selected Players. 
        
        Functionality:
        - Remove Individual Player
        - Clear All Selected Players
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