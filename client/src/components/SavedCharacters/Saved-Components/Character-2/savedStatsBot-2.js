import React from 'react';
import IntStats from '../../../Stats/Right/INTELLIGENCE/intStats';
import WisStats from '../../../Stats/Right/WISDOM/wisStats';
import ChaStats from '../../../Stats/Right/CHARISMA/chaStats';

function SavedStatsBotTwo() {

    return(
        <div className='savedStats'>
            <div className='statsbreakone'>
                <div className="savedstatBackground">
                    <IntStats />
                </div>

                <div className="savedstatBackground">
                    <WisStats />
                </div>

                <div className="savedstatBackground">
                    <ChaStats />
                </div>
            </div>
        </div>
    );
}

export default SavedStatsBotTwo;
