import React from 'react';
import '../../pages/css/reset.css';
import '../../pages/css/style.css';
import './savedChar.css';
import NavTop from '../NavTop/NavTop';
import NavBot from '../NavBottom/NavBot';
import SavedCharacterImage from './Saved-Components/savedImg';
import SavedStatsBot from './Saved-Components/savedStatsBot';
import SavedStatsTop from './Saved-Components/savedStatsTop';
import SavedCounter from './Saved-Components/savedHP';
import SavedBanner from './Saved-Components/savedNameBanner';
import ArmorClass from './Saved-Components/savedAC';
import SavedButtons from './Saved-Components/savedButtons';

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
                        <SavedButtons />
                    </div>
                    <div className='column3'>
                        <SavedStatsTop />
                        <SavedStatsBot />
                    </div>
                    <div className='columnFour'>
                        <SavedCounter />
                        <ArmorClass />
                    </div>
                </div>
            </div>
            <div className='rowOne'>
                <div className='group'>
                    <div className='columnOne'>
                        <SavedCharacterImage />
                    </div>
                    <div className='columnTwo'>
                        <SavedBanner />
                        <SavedButtons />
                    </div>
                    <div className='column3'>
                        <SavedStatsTop />
                        <SavedStatsBot />
                    </div>
                    <div className='columnFour'>
                        <SavedCounter />
                        <ArmorClass />
                    </div>
                </div>
            </div>
            <div className='rowOne'>
                <div className='group'>
                    <div className='columnOne'>
                        <SavedCharacterImage />
                    </div>
                    <div className='columnTwo'>
                        <SavedBanner />
                        <SavedButtons />
                    </div>
                    <div className='column3'>
                        <SavedStatsTop />
                        <SavedStatsBot />
                    </div>
                    <div className='columnFour'>
                        <SavedCounter />
                        <ArmorClass />
                    </div>
                </div>
            </div>
        </div>
        <NavBot />
    </div>
  );
}

export default SavedCharacter;