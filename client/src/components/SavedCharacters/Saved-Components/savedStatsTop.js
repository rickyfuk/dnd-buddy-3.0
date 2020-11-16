import React from 'react';

function SavedStatsTop() {

    return(
        <div className='savedStats'>
            <div className='statsbreakone'>
                <div className="savedstatBackground">
                    <div>
                        <h2 className='sideStat' id='sideStatNumber2'>10</h2>
                        <h2 className='statMod' id='mod2'>Mod +</h2>
                        <h3 className='statTitle'>Strength</h3>
                    </div>
                </div>

                <div className="savedstatBackground">
                    <div>
                        <h2 className='sideStat' id='sideStatNumber2'>10</h2>
                        <h2 className='statMod' id='mod2'>Mod +</h2>
                        <h3 className='statTitle'>Dexterity</h3>
                    </div>
                </div>

                <div className="savedstatBackground">
                    <div>
                        <h2 className='sideStat' id='sideStatNumber2'>10</h2>
                        <h2 className='statMod' id='mod2'>Mod +</h2>
                        <h3 className='statTitle'>Constitution</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavedStatsTop;