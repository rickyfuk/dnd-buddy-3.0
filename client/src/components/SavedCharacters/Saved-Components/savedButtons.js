import React from 'react';
import API from '../../../util/API';

function handleSave(event) {
    event.preventDefault()
    const character1Name = localStorage.getItem('charName');
    const character1Class = localStorage.getItem('Class');
    const param = { name: character1Name, class: character1Class};

    API.save(param);
} 



//CRUD COMMANDS TO DB TO GET CHARACTER FROM MONGO
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