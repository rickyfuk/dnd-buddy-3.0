import React from 'react';
import './spellsAndWeapons.css';
import SWBarbarianModal from './HelpModals/swBarbarianModal';
import SWBardModal from './HelpModals/swBardModal';
import SWCleModal from './HelpModals/swClericModal';
import SWDruModal from './HelpModals/swDruidModal';
import SWFigModal from './HelpModals/swFighterModal';
import SWMonkModal from './HelpModals/swMonkModal';
import SWPalModal from './HelpModals/swPaladinModal';
import SWRanModal from './HelpModals/swRangerModal';
import SWRogModal from './HelpModals/swRogueModal';
import SWSorModal from './HelpModals/swSorcererModal';
import SWWarModal from './HelpModals/swWarlockModal';
import SWWizModal from './HelpModals/swWizardModal';

function SpellsAndWeapons() {

    let value = 'Bard';

    switch (value) {
    case 'Barbarian':
        value = <SWBarbarianModal />;
        break;
    case 'Bard':
        value = <SWBardModal />;
        break;
    case 'Cleric':
        value = <SWCleModal />;
        break;
    case 'Druid':
        value = <SWDruModal />;
        break;
    case 'Fighter':
        value = <SWFigModal />;
        break;
    case 'Monk':
        value = <SWMonkModal />;
        break;
    case 'Paladin':
        value = <SWPalModal />;
        break;
    case 'Ranger':
        value = <SWRanModal />;
        break;
    case 'Rogue':
        value = <SWRogModal />;
        break;
    case 'Sorcerer':
        value = <SWSorModal />;
        break;
    case 'Warlock':
        value = <SWWarModal />;
        break;
    case 'Wizard':
        value = <SWWizModal />;
        break;  
    }
    
    return(

        <div>
            <div className='spellsBackground'>
                <p>{value}</p>
                <h4 id='spells' className='spellsTitle'>Spells/Weapons:</h4>
                <h4 className='swText'>Get text from database.</h4>
            </div>
        </div>

    );

}

export default SpellsAndWeapons;