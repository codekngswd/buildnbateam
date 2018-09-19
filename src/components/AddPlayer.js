import React from 'react';

// CSS Files
import '../css/addPlayer.css'; 

// Import Consumer Context for IsDisabled and AddToTeam
import { ConsumerIsDisabled } from './App';
import { ConsumerAddToTeam } from './App';

const AddPlayer = () => {
    return (
        <ConsumerIsDisabled>
            {disableButton => (
                <ConsumerAddToTeam>
                    {addToTeam => (
                        <div id="addPlayerButton">
                            <button disabled={disableButton} onClick={addToTeam}>Add Player</button>
                        </div>
                    )}
                </ConsumerAddToTeam>
            )}
        </ConsumerIsDisabled>
    );
}

export default AddPlayer;