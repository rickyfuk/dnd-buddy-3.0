import React from 'react';
import './genderModal.css';
import API from '../../../util/API';

import { Link } from 'react-router-dom';





function Selector() {


    
  function female() {
    localStorage.setItem('Gender', 'Female');
    window.location.href='./racemodalfemale';   
  } 
           
 

  function male() {
    localStorage.setItem('Gender', 'Male');
    window.location.href='./racemodalmale';  
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
    
    let modal= <div>      
        <div className="links-div-gender">
        
        <button className="revealButton femaleButton genderButton" type="button" onClick={female}>            
            Female
        </button>
    
        <Link to= {'/racemodalmale'}>
        <button className="revealButton maleButton genderButton" type="button" onClick={male}>
            Male
        </button>
        </Link>     

   
        </div>
    </div>;



    return (
            <span>{modal}</span>
    );
}

export default Selector;