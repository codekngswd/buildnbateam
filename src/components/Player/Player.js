import React from 'react';

// Component Files
import AddPlayer from '../AddPlayer/AddPlayer';

// CSS Files
import './player.css';

class Player extends React.Component {

    render() {
        const { name, image } = this.props.details;

        return (
            <div id="player">
                <h3>{name}</h3>

                <img src={image} alt={name} />

                <AddPlayer />
            </div>
        );
    }
}

export default Player;