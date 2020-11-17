import React from 'react';
import '../../pages/css/reset.css';
import '../../pages/css/style.css';
import './creationModal.css';
import NavTop from '../NavTop/NavTop';
import NavBot from '../NavBottom/NavBot';
import NameBannerGenerate from './nameBannerGenerate';
import RaceGenerate from './raceGenerate';
import ClassGenerate from './classGenerate';
import GenderGenerate from './genderGenerate';
import SaveAndQuizButton from './buttonRow';


function CharacterCreation() {

  return (
      <div className='body'>
        <NavTop />
        <div className='mainContainer'>
          <SaveAndQuizButton />
          <div className='rowOne'>
            <div className='group'>
              <NameBannerGenerate />
            </div>
          </div>
          <div className='rowThree'>
            <div className='group'>
              <div className='columnOne'>
                <GenderGenerate />
              </div>
              <div className='columnTwo'>
                <RaceGenerate />
              </div>
              <div className= 'columnFour'>
                <ClassGenerate />
              </div>
            </div>
          </div>
        </div>
        <NavBot />
      </div>
  );
}

export default CharacterCreation;