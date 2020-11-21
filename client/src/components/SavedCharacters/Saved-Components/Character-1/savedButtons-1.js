import React from 'react';

function SavedButtons() {
    return(
        <div className='selectdelete'>
            <button id='selectcharacter1' className="savedBtn btn btn-lg btn-dark revealButton" type="button">
                Select
            </button>
            <button id='deletecharacter1' className="savedBtn btn btn-lg btn-dark revealButton" type="button">
                Delete
            </button>
        </div>

    );
}

export default SavedButtons;