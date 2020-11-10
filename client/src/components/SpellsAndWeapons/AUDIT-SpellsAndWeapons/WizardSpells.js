import React from 'react';
import '../spellsAndWeapons.css';
import SWWizModal from '../HelpModals/swWizardModal';

function SpellsAndWeapons() {
    
    return(

        <div>
            <div className='spellsBackground'>
                <div className='spellsContent'>
                    <SWWizModal />
                    <h2 id='spells' className='spellsTitle'>Spells and Equipment:</h2>
                    <h4 id='spells' className='swText'>Fire Bolt:</h4>
                    <p className='swP'>Dice: 1d10</p>
                    <p className='swP'>Range: 120 feet</p>
                    <p className='swP'>Casting Time: 1 action</p>
                    <h4 id='spells' className='swText'>Mage Hand:</h4>
                    <p className='swP'>Range: 30 feet</p>
                    <p className='swP'>Casting Time: 1 action</p>
                    <h4 id='spells' className='swText'>Magic Missile:</h4>
                    <p className='swP'>3x (1d4)+1 force damage</p>
                    <p className='swP'>Range: 120 feet</p>
                    <p className='swP'>Casting Time: 1 action</p>
                    <h4 id='spells' className='swText'>Mage Armor:</h4>
                    <p className='swP'>Duration: 8 hours</p>
                    <p className='swP'>Casting Time: 1 action</p>
                    <h4 id='spells' className='swText'>Quarterstaff:</h4>
                    <p className='swP'>Dice: 1d6, bludgeoning damage</p>
                </div>
            </div>
        </div>

    );

}

export default SpellsAndWeapons;