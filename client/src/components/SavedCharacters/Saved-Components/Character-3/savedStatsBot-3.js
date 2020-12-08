import React from 'react';
import IntStats from '../../../Stats/Right/INTELLIGENCE/savedIntStats3';
import WisStats from '../../../Stats/Right/WISDOM/savedWisStats3';
import ChaStats from '../../../Stats/Right/CHARISMA/savedChaStats3';

function SavedStatsBotThree() {

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

export default SavedStatsBotThree;
