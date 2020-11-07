import React from 'react';
import './spellsAndWeapons.css';

function SpellsAndWeapons() {

    return(

        <div>
            <div className='spellsBackground'>
                <div className='spellsHelpButton'>
                    <a className='fa fa-question-circle' href='/' id='sw-guide' data-reveal-id='sw-modal'> </a>
                </div>
                <h4 id='spells' className='spellsTitle'>Spells/Weapons:</h4>
                <h4 className='swText'>Get text from database.</h4>
            </div>
        </div>

    );
    

}

export default SpellsAndWeapons;