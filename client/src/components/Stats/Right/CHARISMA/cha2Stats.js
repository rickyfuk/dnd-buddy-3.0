import React from 'react';
import '../rightStatsModal.css'

function ChaStats() {
    const charClass = localStorage.getItem('Class');
    const charRace = localStorage.getItem('Race');
    let cha = '';
    let bonus = '';
    let mod = '';

    switch (charClass) {
    case 'Bard':
        cha = 15;
        break;
    case 'Cleric':
        cha = 13;
        break;
    case 'Fighter':
        cha = 10;
        break;
    case 'Ranger':
        cha = 8;
        break;
    case 'Rogue':
        cha = 13;
        break;
    case 'Wizard':
        cha = 12;
        break;  
    default:
        cha = '';
    }

    switch (charRace) {
    case 'Dwarf':
        bonus = 0;
        break;
    case 'Elf':
        bonus = 0;
        break;
    case 'Human':
        bonus = 1;
        break;
    case 'Tiefling':
        bonus = 2;
        break; 
    default:
        bonus = '';
    }

    const charisma = cha + bonus;

    switch (charisma) {
    case 8:
        mod = 'Mod -1';
        break;
    case 9:
        mod = 'Mod -1';
        break;
    case 10:
        mod = 'Mod 0';
        break;
    case 11:
        mod = 'Mod 0';
        break;
    case 12:
        mod = 'Mod +1';
        break;
    case 13:
        mod = 'Mod +1';
        break;
    case 14:
        mod = 'Mod +2';
        break;
    case 15:
        mod = 'Mod +2';
        break;
    case 16:
        mod = 'Mod +3';
        break;
    case 17:
        mod = 'Mod +3';
        break;
    default:
        mod = '';   
    }
    
    return(
        <div className='chaID'>
            <h2 className='sideStat2' id='sideStatNumber2'>{charisma}</h2>
            <h2 className='statMod2' id='mod2'>{mod}</h2>
            <h3 className='statTitle2'>Charisma</h3>
        </div>
    );

}

export default ChaStats;