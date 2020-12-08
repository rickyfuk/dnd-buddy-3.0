import React from 'react';
import ConStats from '../../../Stats/Left/CONSTITUTION/savedConStats3';
import DexStats from '../../../Stats/Left/DEXTERITY/savedDexStats3';
import StrStats from '../../../Stats/Left/STRENGTH/savedStrStats3';

function SavedStatsTopThree() {

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

export default SavedStatsTopThree;