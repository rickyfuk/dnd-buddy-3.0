import React from 'react';

function SavedButtons() {
    return(
        <div className='selecteditdelete'>
            <button className="savedBtn1 btn btn-sm btn-dark revealButton" type="button">
                Select
            </button>
            <button className="savedBtn btn btn-sm btn-dark revealButton" type="button">
                Edit
            </button>
            <button className="savedBtn3 btn btn-sm btn-dark revealButton" type="button">
                Delete
            </button>
        </div>

    );
}

export default SavedButtons;