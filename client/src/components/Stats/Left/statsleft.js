import React from 'react';
import StrModal from './STRENGTH/strModal';
import DexModal from './DEXTERITY/dexModal';
import ConModal from './CONSTITUTION/conModal';
import '../assets/stats.css';

function StatsLeft() {
    return(

        <div>

            <div className="statBackground">
                <StrModal />
                <div>
                    <h2 className='sideStat' id='sideStatNumber2'>10</h2>
                    <h2 className='statMod' id='mod2'>Mod +</h2>
                    <h3 className='statTitle'>Strength</h3>
                </div>
            </div>

            <div className="statBackground">
                <DexModal />
                <div>
                    <h2 className='sideStat' id='sideStatNumber2'>10</h2>
                    <h2 className='statMod' id='mod2'>Mod +</h2>
                    <h3 className='statTitle'>Dexterity</h3>
                </div>
            </div>

            <div className="statBackground">
                <ConModal />
                <div>
                    <h2 className='sideStat' id='sideStatNumber2'>10</h2>
                    <h2 className='statMod' id='mod2'>Mod +</h2>
                    <h3 className='statTitle'>Constitution</h3>
                </div>
            </div>
            
        </div>
        

        

    );
}

export default StatsLeft;