import React from 'react';
import './creationModal.css';
import API from '../../util/API';


function HandleSave () {
    const sendDBName = localStorage.getItem('charName');
    const sendDBGender = localStorage.getItem('Gender');
    const sendDBRace = localStorage.getItem('Race');
    const sendDBClass = localStorage.getItem('Class');
    const sendDBemail = localStorage.getItem('email');


    if (sendDBName === 'null' || sendDBGender === 'null' || sendDBRace === 'null' || sendDBClass === 'null') {
      alert('Missing Character Information! Make sure Name, Gender, Race and Class are selected');
    }

    // else if (pull info from database to check if 3 or more characters)
    // alert('Maximum character limit is 3.  Delete character to create a new one.)

    else {
      const param = {
        email: sendDBemail, 
        character1: {
        name: sendDBName,
        gender: sendDBGender,
        race: sendDBRace,
        charClass: sendDBClass,
        }
      }
      API.save1({param})
      .then(console.log(param))
    }

    return (

      <div class="background-name">
         <button className='btn btn-dark buttonRight revealButton' type='button' onClick={HandleSave}>
            Generate Character
        </button>
      </div>
    );
}

export default HandleSave;

