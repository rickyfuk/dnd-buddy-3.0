import React from 'react';
import GenModal from '../../components/CharacterCreation/ModalGender/app';
import NavBot from '../../components/NavBottom/NavBot';
import NavTop from '../../components/NavTop/NavTop';
import FemaleFighter from '../../components/CharacterImage/images-female/human-fighter-1.png'
import MaleFighter from '../../components/CharacterImage/images-male/human-fighter-1.png'
import '../css/reset.css';
import '../css/style.css';

function CharacterGender () {

  function female() {
    localStorage.setItem('Gender', 'Female');   
  } 

  function male() {
    localStorage.setItem('Gender', 'Male');
  }

  return (
    <div className='body'>
      <NavTop/>
      <div className='mainContainer'>
        <div className='group'>
            <GenModal />
            <div className='genderMobileDisplay group'>
              <div className='columnOne'>
                <img className='charLogoGen' src={FemaleFighter}/>
              </div>
              <div className='columnTwo'>
                <button id='selectFemale' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={female}>
                  <a href='/racemodalfemale'>
                    Female
                  </a>
                </button>
              </div>
              <div className='columnOne'>
                <img className='charLogoGen' src={MaleFighter}/>
              </div>
              <div className='columnTwo'>
                <button id='selectMale' className="savedBtn btn btn-lg btn-dark revealButton" type="button"  onClick={male}>
                  <a href='/racemodalmale'>
                    Male
                  </a>
                </button>
              </div>
            </div>
        </div>
      </div>
      <NavBot />
    </div>
  );
}

export default CharacterGender;