import React from 'react';
import ACModal from './acModal';
import './ac.css';

function ArmorClass() {
    return(
        <div className='acStat'>
            <ACModal />
            <h4 id='armor' className='acTextNum'>13</h4>
            <h4>Armor Class</h4>
        </div>

    );
}

export default ArmorClass;