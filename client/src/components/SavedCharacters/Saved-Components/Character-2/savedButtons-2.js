import React from 'react';

function SavedButtonsTwo() {
    return(
        <div className='selectdelete'>
            <button id='selectcharacter2' className="savedBtn btn btn-lg btn-dark revealButton" type="button">
                Select
            </button>
            <button id='deletecharacter2' className="savedBtn btn btn-lg btn-dark revealButton" type="button">
                Delete
            </button>
        </div>

    );
}

export default SavedButtonsTwo;