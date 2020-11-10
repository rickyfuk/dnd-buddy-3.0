import React from 'react';
import '../spellsAndWeapons.css';
import SWRogModal from '../HelpModals/swRogueModal';

function SpellsAndWeapons() {
    
    return(

        <div>
            <div className='spellsBackground'>
                <div className='spellsContent'>
                    <SWRogModal />
                    <h2 id='spells' className='spellsTitle'>Spells and Equipment:</h2>
                    <h4 id='spells' className='swText'>Dagger:</h4>
                    <p className='swP'>Dice: 1d4, slashing damage</p>
                    <h4 id='spells' className='swText'>Short Bow:</h4>
                    <p className='swP'>Dice: 1d6, piercing damage</p>
                    <p className='swP'>Range: 320-80 feet</p>
                    <h4 id='spells' className='swText'>Light Armor</h4>
                    <h4 id='spells' className='swText'>Thieves' Tools</h4>
                </div>
            </div>
        </div>
    );
}

export default SpellsAndWeapons;