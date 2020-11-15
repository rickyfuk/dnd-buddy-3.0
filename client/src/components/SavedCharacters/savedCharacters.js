import React from 'react';
import '../../pages/css/reset.css';
import '../../pages/css/style.css';
import './savedChar.css';
import NavTop from '../NavTop/NavTop';
import NavBot from '../NavBottom/NavBot';
import SavedCharacterImage from './Saved-Components/savedImg';
import Skills from './Saved-Components/savedSkills';
import SpellsAndWeapons from './Saved-Components/savedSpellsAndWeapons';
import SavedStats from './Saved-Components/savedStats';
import SavedCounter from './Saved-Components/savedHP';
import SavedBanner from './Saved-Components/savedNameBanner';
import ArmorClass from './Saved-Components/savedAC';
import SavedBreak from './Saved-Components/savedbreak';

function SavedCharacter() {

  return (
    <div className='body'>
        <NavTop />
        <div className='mainContainer'>
            <div className='rowOne'>
                <div className='group'>
                    <div className='columnOne'>
                        <SavedCharacterImage />
                    </div>
                    <div className='columnTwo'>
                        <SavedBanner />
                    </div>
                    <div className='columnThree'>
                        <Skills />
                    </div>
                    <div className='columnFour'>
                        <SpellsAndWeapons />
                    </div>
                </div>
            </div>
            <div className='rowOne'>
                <div className='group'>
                    <SavedCounter />
                    <SavedStats />
                    <ArmorClass />
                </div>
            </div>
            <div className='rowOne'>
                <div className='group'>
                    <div className='columnOne'>
                        <SavedCharacterImage />
                    </div>
                    <div className='columnTwo'>
                        <SavedBanner />
                    </div>
                    <div className='columnThree'>
                        <Skills />
                    </div>
                    <div className='columnFour'>
                        <SpellsAndWeapons />
                    </div>
                </div>
            </div>
            <div className='rowOne'>
                <div className='group'>
                    <SavedCounter />
                    <SavedStats />
                    <ArmorClass />
                </div>
            </div>
            <div className='rowOne'>
                <div className='group'>
                    <div className='columnOne'>
                        <SavedCharacterImage />
                    </div>
                    <div className='columnTwo'>
                        <SavedBanner />
                    </div>
                    <div className='columnThree'>
                        <Skills />
                    </div>
                    <div className='columnFour'>
                        <SpellsAndWeapons />
                    </div>
                </div>
            </div>
            <div className='rowOne'>
                <div className='group'>
                    <SavedCounter />
                    <SavedStats />
                    <ArmorClass />
                </div>
            </div>
        </div>
        <NavBot />
    </div>
  );
}

export default SavedCharacter;