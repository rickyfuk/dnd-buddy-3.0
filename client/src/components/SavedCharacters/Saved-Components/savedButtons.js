import React from 'react';

function SavedButtons() {
    return(
        <div className='selectdelete'>
            <button className="savedBtn btn btn-lg btn-dark revealButton" type="button">
                Select
            </button>
            <button className="savedBtn btn btn-lg btn-dark revealButton" type="button">
                Delete
            </button>
        </div>

    );
}

export default SavedButtons;