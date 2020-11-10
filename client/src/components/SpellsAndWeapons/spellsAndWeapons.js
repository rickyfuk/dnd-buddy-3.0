import React from 'react';
import './spellsAndWeapons.css';
import SWRogModal from './HelpModals/swRogueModal';

function SpellsAndWeapons() {

    return(

        <div>
            <div className='spellsBackground'>
                <SWRogModal />
                <h4 id='spells' className='spellsTitle'>Spells/Weapons:</h4>
                <h4 className='swText'>Get text from database.</h4>
            </div>
        </div>

    );
    

}

export default SpellsAndWeapons;