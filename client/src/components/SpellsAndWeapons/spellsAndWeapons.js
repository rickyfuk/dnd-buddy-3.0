import React from 'react';
import './spellsAndWeapons.css';

function SpellsAndWeapons() {
    return(

        <div className='columnThree'>
            <div className='spellsBackground'>
                <div className='spellsHelpButton'>
                    <a className='fa fa-question-circle' href='/' id='sw-guide' data-reveal-id='sw-modal'></a>
                </div>
                <h4 id='spells' className='spellsTitle'>Spells/Weapons:</h4>
                <h4 className='swText'></h4>
            </div>
        </div>

    );
}

export default SpellsAndWeapons;