import React from 'react';
import './creationModal.css';

function GenderGenerate() {

  function female() {
      localStorage.setItem('Gender', 'Female');
      window.location.reload(true);
  }

  function male() {
      localStorage.setItem('Gender', 'Male');
      window.location.reload(true);
  }

  return (
    <div className='centered'>
        <button className="button generate-button revealButton" type="button">
          Generate Character
        </button>
        <div className='genderBackground'>
          <h4 className='genderTitle'>Gender:</h4>
          <p className='raceButtons'>
            <button className="button gbutton revealButton" type="button" onClick={female}>
              Female
            </button>
            <button className="button gbutton revealButton" type="button" onClick={male}>
              Male
            </button>
          </p>
        </div>
    </div>
  );
}

export default GenderGenerate;