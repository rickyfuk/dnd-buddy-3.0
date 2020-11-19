import React from 'react';
import '../spellsAndWeapons.css';

function ClericEquip() {
    
    return(

        <div>
            <h4 id='spells' className='swText'>Cure Wounds:</h4>
            <p className='swP'>Dice: 1d8 + 2 WIS Modifier</p>
            <p className='swP'>Range: Touch</p>
            <p className='swP'>Casting Time: 1 action</p>
            <h4 id='spells' className='swText'>Spare the Dying:</h4>
            <p className='swP'>Range: Touch</p>
            <p className='swP'>Casting Time: 1 action</p>
            <h4 id='spells' className='swText'>Mace:</h4>
            <p className='swP'>Dice: 1d6, bludgeoning damage</p>
            <h4 id='spells' className='swText'>Medium Armor</h4>
            <h4 id='spells' className='swText'>Shield</h4>
        </div>
    );
}

export default ClericEquip;