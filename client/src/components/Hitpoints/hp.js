import React from 'react';
import './hp.css';

function Hitpoints() {
    return(
      
        <div className='hpStat'>
            <div className='hpHelpButton'>
                <a className='fa fa-question-circle' href='/' id='wis-guide' data-reveal-id='wisdom-modal'></a>
            </div>
            <h4 id='armor' className='hpTextNum'>12</h4>
            <h4>Hitpoints</h4>
        </div>
        
    );
}

export default Hitpoints;