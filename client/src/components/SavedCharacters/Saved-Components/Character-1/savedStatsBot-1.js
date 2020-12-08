import React from 'react';
import IntStats from '../../../Stats/Right/INTELLIGENCE/savedIntStats1';
import WisStats from '../../../Stats/Right/WISDOM/savedWisStats1';
import ChaStats from '../../../Stats/Right/CHARISMA/savedChaStats1';

function SavedStatsBotOne() {



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

export default SavedStatsBotOne;
