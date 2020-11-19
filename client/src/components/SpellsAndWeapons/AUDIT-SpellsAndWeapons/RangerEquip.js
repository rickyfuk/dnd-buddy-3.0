import React from 'react';
import '../spellsAndWeapons.css';

function RangerEquip() {
    
    return(

        <div>
            <h4 id='spells' className='swText'>Shortsword:</h4>
            <p className='swP'>Dice: 1d6, slashing damage</p>
            <h4 id='spells' className='swText'>Longbow:</h4>
            <p className='swP'>Dice: 1d8, piercing damage</p>
            <p className='swP'>Range: 600-150 feet</p>
            <h4 id='spells' className='swText'>Leather Armor</h4>
        </div>
    );
}

export default RangerEquip;