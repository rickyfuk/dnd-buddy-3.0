import React from 'react';
import ConStats from '../../../Stats/Left/CONSTITUTION/savedConStats1';
import DexStats from '../../../Stats/Left/DEXTERITY/savedDexStats1';
import StrStats from '../../../Stats/Left/STRENGTH/savedStrStats1';

function SavedStatsTopOne() {

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

export default SavedStatsTopOne;