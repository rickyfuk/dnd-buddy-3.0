import React from 'react';
import '../spellsAndWeapons.css';
import SWFigModal from '../HelpModals/swFighterModal';

function SpellsAndWeapons() {
    
    return(

        <div>
            <div className='spellsBackground'>
                <div className='spellsContent'>
                    <SWFigModal />
                    <h2 id='spells' className='spellsTitle'>Spells and Equipment:</h2>
                    <h4 id='spells' className='swText'>Greatsword:</h4>
                    <p className='swP'>Dice: 2d6, slashing damage</p>
                    <h4 id='spells' className='swText'>Medium Armor</h4>
                </div>
            </div>
        </div>
    );
}

export default SpellsAndWeapons;