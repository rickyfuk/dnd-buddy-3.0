import React from 'react';

function SavedButtonsThree() {
    return(
        <div className='selectdelete'>
            <button id='selectcharacter3' className="savedBtn btn btn-lg btn-dark revealButton" type="button">
                Select
            </button>
            <button id='deletecharacter3' className="savedBtn btn btn-lg btn-dark revealButton" type="button">
                Delete
            </button>
        </div>

    );
}

export default SavedButtonsThree;