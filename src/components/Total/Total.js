import React from 'react';

// CSS File
import './total.css';

class Total extends React.Component {
    render() {
        const teamIds = Object.keys(this.props.team);

        const total = teamIds.reduce((prevTotal, key) => {
            const player = this.props.players[key];

            prevTotal = prevTotal + player.value;

            return prevTotal;
        }, 0);
        
        return (
            <div id="totalContainer">
                <p>{total}</p>
            </div>
        );
    }
}

export default Total;