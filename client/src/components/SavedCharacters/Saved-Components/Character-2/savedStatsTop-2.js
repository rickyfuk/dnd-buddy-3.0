import React from 'react';
import ConStats from '../../../Stats/Left/CONSTITUTION/conStats';
import DexStats from '../../../Stats/Left/DEXTERITY/dexStats';
import StrStats from '../../../Stats/Left/STRENGTH/strStats';

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