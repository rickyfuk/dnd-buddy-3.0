import React from 'react';
import './ac.css';

function ArmorClass() {
    return(
        <div className='acStat'>
            <div className='acHelpButton'>
                <a className='fa fa-question-circle' href='/' id='wis-guide' data-reveal-id='wisdom-modal'></a>
            </div>
            <h4 id='armor' className='acTextNum'>12</h4>
            <h4>Armor Class</h4>
        </div>

    );
}

export default ArmorClass;