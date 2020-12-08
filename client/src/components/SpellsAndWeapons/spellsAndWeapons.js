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
import RogueEquip from './AUDIT-SpellsAndWeapons/RogueEquip';
import BardEquip from './AUDIT-SpellsAndWeapons/BardEquip';
import RangerEquip from './AUDIT-SpellsAndWeapons/RangerEquip';
import WizardEquip from './AUDIT-SpellsAndWeapons/WizardSpells';
import FighterEquip from './AUDIT-SpellsAndWeapons/FighterWeapons';
import ClericEquip from './AUDIT-SpellsAndWeapons/ClericEquip';

function SpellsAndWeapons() {

    let value = localStorage.getItem('Class');
    let display = '';

    switch (value) {
    case 'Barbarian':
        value = <SWBarbarianModal />;
        display = '';
        break;
    case 'Bard':
        value = <SWBardModal />;
        display = <BardEquip />;
        break;
    case 'Cleric':
        value = <SWCleModal />;
        display = <ClericEquip />;
        break;
    case 'Druid':
        value = <SWDruModal />;
        display = '';
        break;
    case 'Fighter':
        value = <SWFigModal />;
        display = <FighterEquip />;
        break;
    case 'Monk':
        value = <SWMonkModal />;
        display = '';
        break;
    case 'Paladin':
        value = <SWPalModal />;
        display = '';
        break;
    case 'Ranger':
        value = <SWRanModal />;
        display = <RangerEquip />;
        break;
    case 'Rogue':
        value = <SWRogModal />;
        display = <RogueEquip />;
        break;
    case 'Sorcerer':
        value = <SWSorModal />;
        display = '';
        break;
    case 'Warlock':
        value = <SWWarModal />;
        display = '';
        break;
    case 'Wizard':
        value = <SWWizModal />;
        display = <WizardEquip />;
        break;  
    }
    
    return(
        <div className='borderBox2'>
            <div className='spellsBackground'>
                <div className='marginleft'>
                    <div>{value}</div>
                    <h4 id='spells' className='spellsTitle'>Spells and Equipment:</h4>
                    <div>{display}</div>
                </div>
            </div>
        </div>

    );

}

export default SpellsAndWeapons;