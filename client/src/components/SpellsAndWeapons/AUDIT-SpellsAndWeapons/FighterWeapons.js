import React from 'react';
import '../spellsAndWeapons.css';

function FighterEquip() {
    localStorage.setItem('Class', 'Fighter');
    return(

        <div>
            <h4 id='spells' className='swText'>Greatsword:</h4>
            <p className='swP'>Dice: 2d6, slashing damage</p>
            <h4 id='spells' className='swText'>Medium Armor</h4>
        </div>

    );
}

export default FighterEquip;