import React from 'react';

function SavedButtonsThree() {

    function selectCharacter () {

        const Class3 = localStorage.getItem('charClass3');
        const Race3 = localStorage.getItem('race3');
        const Gender3 = localStorage.getItem('gender3');
        const Name3 = localStorage.getItem('name3');

        localStorage.setItem('Class', Class3);
        localStorage.setItem('Race', Race3);
        localStorage.setItem('Gender', Gender3);
        localStorage.setItem('charName', Name3);

    }

    function deleteCharacter () {
        localStorage.setItem('charClass3','');
        localStorage.setItem('race3','');
        localStorage.setItem('gender3','');
        localStorage.setItem('name3','');

        window.location.reload(true);

    }

    return(
        <div className='selectdelete'>
            <button id='selectcharacter3' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={selectCharacter}>
                <a href='/main'>
                    Select
                </a>
            </button>
            <button id='deletecharacter3' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={deleteCharacter}>
                Delete
            </button>
        </div>

    );
}

export default SavedButtonsThree;