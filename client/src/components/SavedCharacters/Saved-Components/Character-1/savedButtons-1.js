import React from 'react';

function SavedButtons() {

    function selectCharacter () {

        const Class1 = localStorage.getItem('charClass1');
        const Race1 = localStorage.getItem('race1');
        const Gender1 = localStorage.getItem('gender1');
        const Name1 = localStorage.getItem('name1');

        localStorage.setItem('Class', Class1);
        localStorage.setItem('Race', Race1);
        localStorage.setItem('Gender', Gender1);
        localStorage.setItem('charName', Name1);

    }

    function deleteCharacter () {
        localStorage.setItem('charClass1','');
        localStorage.setItem('race1','');
        localStorage.setItem('gender1','');
        localStorage.setItem('name1','');

        window.location.reload(true);

    }

    return(
        <div className='selectdelete'>
            <button id='selectcharacter1' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={selectCharacter}>
                <a href='/main'>
                    Select
                </a>
            </button>
            <button id='deletecharacter1' className="savedBtn btn btn-lg btn-dark revealButton" type="button"  onClick={deleteCharacter}>
                Delete
            </button>
        </div>

    );
}

export default SavedButtons;