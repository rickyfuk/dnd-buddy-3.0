import React from 'react';
import IntModal from '../INTELLIGENCE/intModal';
import WisModal from '../WISDOM/wisModal';
import ChaModal from '../CHARISMA/chaModal';
import '../../assets/stats.css';

function StatsRight() {
    return(

        <div>

            <div className="statBackground">
                < IntModal/>
                <div>
                    <h2 className='sideStat' id='sideStatNumber2'>13</h2>
                    <h2 className='statMod' id='mod2'>Mod +1</h2>
                    <h3 className='statTitle'>Intelligence</h3>
                </div>
            </div>

            <div className="statBackground">
                < WisModal/>
                <div>
                    <h2 className='sideStat' id='sideStatNumber2'>9</h2>
                    <h2 className='statMod' id='mod2'>Mod -1</h2>
                    <h3 className='statTitle'>Wisdom</h3>
                </div>
            </div>

            <div className="statBackground">
                < ChaModal/>
                <div>
                    <h2 className='sideStat' id='sideStatNumber2'>14</h2>
                    <h2 className='statMod' id='mod2'>Mod +2</h2>
                    <h3 className='statTitle'>Charisma</h3>
                </div>
            </div>
            
        </div>

    );
}

export default StatsRight;