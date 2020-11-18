import React from 'react';
import '../spellsAndWeapons.css';

function BardEquip() {
    
    return(

        <div>
            <h4 id='spells' className='swText'>Rapier:</h4>
            <p className='swP'>Dice: 1d8, piercing damage</p>
            <h4 id='spells' className='swText'>Healing Word:</h4>
            <p className='swP'>Dice: 1d4 + CHA Modifier</p>
            <p className='swP'>Range: 60 feet</p>
            <p className='swP'>Casting Time: 1 bonus action</p>
            <h4 id='spells' className='swText'>Vicious Mockery:</h4>
            <p className='swP'>Range: 60 feet</p>
            <p className='swP'>Casting Time: 1 action</p>
            <h4 id='spells' className='swText'>Charm Person:</h4>
            <p className='swP'>Range: 30 feet</p>
            <p className='swP'>Duration: 1 hour</p>
            <p className='swP'>Casting Time: 1 action</p>
            <h4 id='spells' className='swText'>Hideous Laughter:</h4>
            <p className='swP'>Requires Concentration</p>
            <p className='swP'>Range: 30 feet</p>
            <p className='swP'>Duration: Up to 1 minute</p>
            <p className='swP'>Casting Time: 1 action</p>
            <h4 id='spells' className='swText'>Light Armor</h4>
        </div>
    );
}

export default BardEquip;