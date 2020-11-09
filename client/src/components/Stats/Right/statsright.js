import React from 'react';
import IntModal from './INTELLIGENCE/intModal';
import WisModal from './WISDOM/wisModal';
import ChaModal from './CHARISMA/chaModal';
import '../assets/stats.css';

function StatsRight() {
    return(

        <div>

            <div className="statBackground">
                {/* <div className='statHelpButton'>
                    <a className='fa fa-question-circle' href='/' id='str-guide' data-reveal-id='int-modal'> </a>
                </div> */}
                < IntModal/>
                <div>
                    <h2 className='sideStat' id='sideStatNumber2'>10</h2>
                    <h2 className='statMod' id='mod2'>Mod +</h2>
                    <h3 className='statTitle'>Intelligence</h3>
                </div>
            </div>

            <div className="statBackground">
                {/* <div className='statHelpButton'>
                    <a className='fa fa-question-circle' href='/' id='str-guide' data-reveal-id='wis-modal'> </a>
                </div> */}
                < WisModal/>
                <div>
                    <h2 className='sideStat' id='sideStatNumber2'>10</h2>
                    <h2 className='statMod' id='mod2'>Mod +</h2>
                    <h3 className='statTitle'>Wisdom</h3>
                </div>
            </div>

            <div className="statBackground">
                {/* <div className='statHelpButton'>
                    <a className='fa fa-question-circle' href='/' id='str-guide' data-reveal-id='cha-modal'> </a>
                </div> */}
                < ChaModal/>
                <div>
                    <h2 className='sideStat' id='sideStatNumber2'>10</h2>
                    <h2 className='statMod' id='mod2'>Mod +</h2>
                    <h3 className='statTitle'>Charisma</h3>
                </div>
            </div>
            
        </div>

    );
}

export default StatsRight;