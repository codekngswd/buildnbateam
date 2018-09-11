import React from 'react';

class AddPlayer extends React.Component {

  render() {
    return (
      <div id="addPlayerButton">
        <button disabled={this.props.disableButton()} onClick={() => this.props.addToTeam(this.props.index)}>
          {/* {isAvailable ? 'Add Player' : 'Unavailable'} */}
          Add Player
        </button>
      </div>
    );
  }
}

export default AddPlayer;