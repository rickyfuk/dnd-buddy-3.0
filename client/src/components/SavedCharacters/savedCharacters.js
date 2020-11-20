import React from 'react';
import '../../pages/css/reset.css';
import '../../pages/css/style.css';
import './savedChar.css';
import NavTop from '../NavTop/NavTop';
import NavBot from '../NavBottom/NavBot';
import SavedCharacterImageOne from './Saved-Components/Character-1/savedImg-1';
import SavedStatsBotOne from './Saved-Components/Character-1/savedStatsBot-1';
import SavedStatsTopOne from './Saved-Components/Character-1/savedStatsTop-1';
import SavedCounterOne from './Saved-Components/Character-1/savedHP-1';
import SavedBannerOne from './Saved-Components/Character-1/savedNameBanner-1';
import ArmorClassOne from './Saved-Components/Character-1/savedAC-1';
import SavedButtonsOne from './Saved-Components/Character-1/savedButtons-1';
import SavedCharacterImageTwo from './Saved-Components/Character-2/savedImg-2';
import SavedStatsBotTwo from './Saved-Components/Character-2/savedStatsBot-2';
import SavedStatsTopTwo from './Saved-Components/Character-2/savedStatsTop-2';
import SavedCounterTwo from './Saved-Components/Character-2/savedHP-2';
import SavedBannerTwo from './Saved-Components/Character-2/savedNameBanner-2';
import ArmorClassTwo from './Saved-Components/Character-2/savedAC-2';
import SavedButtonsTwo from './Saved-Components/Character-2/savedButtons-2';
import SavedCharacterImageThree from './Saved-Components/Character-3/savedImg-3';
import SavedStatsBotThree from './Saved-Components/Character-3/savedStatsBot-3';
import SavedStatsTopThree from './Saved-Components/Character-3/savedStatsTop-3';
import SavedCounterThree from './Saved-Components/Character-3/savedHP-3';
import SavedBannerThree from './Saved-Components/Character-3/savedNameBanner-3';
import ArmorClassThree from './Saved-Components/Character-3/savedAC-3';
import SavedButtonsThree from './Saved-Components/Character-3/savedButtons-3';

function SavedCharacter() {

  return (
    <div className='body'>
        <NavTop />
        <div className='mainContainer'>
            <div className='rowOne'>
                <div className='group'>
                    <div className='columnOne'>
                        <SavedCharacterImageOne />
                    </div>
                    <div className='columnTwo'>
                        <SavedBannerOne />
                        <SavedButtonsOne />
                    </div>
                    <div className='column3'>
                        <SavedStatsTopOne />
                        <SavedStatsBotOne />
                    </div>
                    <div className='columnFour'>
                        <SavedCounterOne />
                        <ArmorClassOne />
                    </div>
                </div>
            </div>
            <div className='rowOne'>
                <div className='group'>
                    <div className='columnOne'>
                        <SavedCharacterImageTwo />
                    </div>
                    <div className='columnTwo'>
                        <SavedBannerTwo />
                        <SavedButtonsTwo />
                    </div>
                    <div className='column3'>
                        <SavedStatsTopTwo />
                        <SavedStatsBotTwo />
                    </div>
                    <div className='columnFour'>
                        <SavedCounterTwo />
                        <ArmorClassTwo />
                    </div>
                </div>
            </div>
            <div className='rowOne'>
                <div className='group'>
                    <div className='columnOne'>
                        <SavedCharacterImageThree />
                    </div>
                    <div className='columnTwo'>
                        <SavedBannerThree />
                        <SavedButtonsThree />
                    </div>
                    <div className='column3'>
                        <SavedStatsTopThree />
                        <SavedStatsBotThree />
                    </div>
                    <div className='columnFour'>
                        <SavedCounterThree />
                        <ArmorClassThree />
                    </div>
                </div>
            </div>
        </div>
        <NavBot />
    </div>
  );
}

export default SavedCharacter;