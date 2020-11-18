import React from 'react';
import './creationModal.css';
import API from '../../util/API';

function GenderGenerate() {

  function female() {
    localStorage.setItem('Gender', 'Female');
    window.location.reload(true);
  }

  function male() {
    localStorage.setItem('Gender', 'Male');
    window.location.reload(true);
  }

  function sendToDB () {
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
  }

  return (
    <div className='centered'>
        <div className='genderBackground'>
          <h4 className='genderTitle'>Gender:</h4>
          <p className='raceButtons'>
            <button className="btn btn-dark gbutton revealButton" type="button" onClick={female}>
              Female
            </button>
            <button className="btn btn-dark gbutton revealButton" type="button" onClick={male}>
              Male
            </button>
          </p>
        </div>
    </div>
  );
}

export default GenderGenerate;