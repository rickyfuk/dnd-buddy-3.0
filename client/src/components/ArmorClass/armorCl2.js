import React from 'react';
import ACModal from './acModal';
import './ac.css';

function ArmorClass2() {
    return(
        <div className='ac2Stat'>
            <ACModal />
            <h4 id='armor' className='ac2TextNum'>12</h4>
            <h4 className='mobileFontSize2'>Armor Class</h4>
        </div>

    );
}

export default ArmorClass2;