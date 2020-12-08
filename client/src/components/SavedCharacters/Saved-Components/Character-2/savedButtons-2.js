import React from 'react';

function SavedButtonsTwo() {

    function selectCharacter () {

        const Class2 = localStorage.getItem('charClass2');
        const Race2 = localStorage.getItem('race2');
        const Gender2 = localStorage.getItem('gender2');
        const Name2 = localStorage.getItem('name2');

        localStorage.setItem('Class', Class2);
        localStorage.setItem('Race', Race2);
        localStorage.setItem('Gender', Gender2);
        localStorage.setItem('charName', Name2);

    }

    function deleteCharacter () {
        localStorage.setItem('charClass2','');
        localStorage.setItem('race2','');
        localStorage.setItem('gender2','');
        localStorage.setItem('name2','');

        window.location.reload(true);

    }

    return(
        <div className='selectdelete'>
            <button id='selectcharacter2' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={selectCharacter}>
                <a href='/main'>
                    Select
                </a>
            </button>
            <button id='deletecharacter2' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={deleteCharacter}>
                Delete
            </button>
        </div>

    );
}

export default SavedButtonsTwo;