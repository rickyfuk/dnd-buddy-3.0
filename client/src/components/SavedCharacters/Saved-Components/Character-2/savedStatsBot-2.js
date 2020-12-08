import React from 'react';
import IntStats from '../../../Stats/Right/INTELLIGENCE/savedIntStats2';
import WisStats from '../../../Stats/Right/WISDOM/savedWisStats2';
import ChaStats from '../../../Stats/Right/CHARISMA/savedChaStats2';

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
