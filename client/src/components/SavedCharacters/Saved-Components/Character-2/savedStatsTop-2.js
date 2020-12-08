import React from 'react';
import ConStats from '../../../Stats/Left/CONSTITUTION/savedConStats2';
import DexStats from '../../../Stats/Left/DEXTERITY/savedDexStats2';
import StrStats from '../../../Stats/Left/STRENGTH/savedStrStats2';

function SavedStatsTopTwo() {

    return(
        <div className='savedStats'>
            <div className='statsbreakone'>
                <div className="savedstatBackground">
                    <StrStats />
                </div>

                <div className="savedstatBackground">
                    <DexStats />
                </div>

                <div className="savedstatBackground">
                    <ConStats />
                </div>
            </div>
        </div>
    );
}

export default SavedStatsTopTwo;