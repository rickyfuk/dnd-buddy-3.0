import React from 'react';
import './creationModal.css';
import API from '../../util/API';

function SendToDB () {
    const sendDBName = localStorage.getItem('charName');
    const sendDBGender = localStorage.getItem('Gender');
    const sendDBRace = localStorage.getItem('Race');
    const sendDBClass = localStorage.getItem('Class');

    if (sendDBName === 'null' || sendDBGender === 'null' || sendDBRace === 'null' || sendDBClass === 'null') {
      alert('Missing Character Information! Make sure Name, Gender, Race and Class are selected');
    }

    // else if (pull info from database to check if 3 or more characters)
    // alert('Maximum character limit is 3.  Delete character to create a new one.)

    else {
      const param = {
        name: sendDBName,
        gender: sendDBGender,
        race: sendDBRace,
        charClass: sendDBClass
      }
      API.sendToDB({param})
      .then(console.log(param))

    }

    return (
        <button className='btn btn-dark buttonRight revealButton' type='button' onClick={SendToDB}>
            Generate Character
        </button>
    );
}

export default SendToDB;

