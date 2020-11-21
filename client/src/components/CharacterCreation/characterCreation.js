import React from 'react';
import '../../pages/css/reset.css';
import '../../pages/css/style.css';
import './creationModal.css';
import NavBot from '../NavBottom/NavBot';
import NameBannerGenerate from './nameBannerGenerate';
// import QuizButton from './quizbutton';
import HandleSave from './generatecharacter';


function CharacterCreation() {

  return (
      <div className='body'>
   
        <div className='mainContainer'>
          {/* <div className='rowThree'> */}
            <div className='groupSpecial'>
              {/* <div className='columnOne'>
                <QuizButton />
              </div> */}
              {/* <div className='columnFour'> */}

                <HandleSave />
              {/* </div> */}
            </div>
          {/* </div> */}
          <div className='rowOne'>
            <div className='group'>
              <NameBannerGenerate />
            </div>
          </div>       
        </div>
        <NavBot />
      </div>
  );
}

export default CharacterCreation;