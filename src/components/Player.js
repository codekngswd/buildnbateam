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

                <AddPlayer />
            </div>
        );
    }
}

export default Player;