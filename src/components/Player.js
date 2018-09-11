import React from 'react';

// Component Files
import AddPlayer from './AddPlayer';

// CSS Files
import '../css/player.css';

class Player extends React.Component {

    render() {
        const { name, image, status } = this.props.details;

        return (
            <div id="player">
                <h3>{name}</h3>

                <p>{status}</p>

                <img src={image} alt={name} />

                <AddPlayer
                    index={this.props.index}
                    addToTeam={this.props.addToTeam}
                    disableButton={this.props.disableButton}
                    players={this.props.players}
                    details={this.props.players}
                />
            </div>
        );
    }
}

export default Player;