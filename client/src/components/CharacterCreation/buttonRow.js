import React from 'react';
import './creationModal.css';
import API from '../../util/API';
import { Link } from 'react-router-dom';

function SaveAndQuizButton() {

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

    return(

        <p className='pCenter'>    
            <Link to={'/01'}>
            <button className='btn btn-dark buttonLeft revealButton' type='button'>
                Character Quiz
            </button>
            </Link>
            <button className='btn btn-dark buttonRight revealButton' type='button' onClick={sendToDB}>
                Generate Character
            </button>
        </p>
    );
}

export default SaveAndQuizButton;