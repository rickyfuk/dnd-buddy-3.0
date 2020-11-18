import React from 'react';

function SavedStatsBot() {

    return(
        <div className='savedStats'>
            <div className='statsbreakone'>
                <div className="savedstatBackground">
                    <div>
                        <h2 className='sideStat' id='sideStatNumber2'>10</h2>
                        <h2 className='statMod' id='mod2'>Mod +</h2>
                        <h3 className='statTitle'>Intelligence</h3>
                    </div>
                </div>

                <div className="savedstatBackground">
                    <div>
                        <h2 className='sideStat' id='sideStatNumber2'>10</h2>
                        <h2 className='statMod' id='mod2'>Mod +</h2>
                        <h3 className='statTitle'>Wisdom</h3>
                    </div>
                </div>

                <div className="savedstatBackground">
                    <div>
                        <h2 className='sideStat' id='sideStatNumber2'>10</h2>
                        <h2 className='statMod' id='mod2'>Mod +</h2>
                        <h3 className='statTitle'>Charisma</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavedStatsBot;
