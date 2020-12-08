import React from 'react';
import '../rightStatsModal.css'

function IntStats() {
    const charClass = localStorage.getItem('Class');
    const charRace = localStorage.getItem('Race');
    let int = '';
    let bonus = '';
    let mod = '';

    switch (charClass) {
    case 'Bard':
        int = 8;
        break;
    case 'Cleric':
        int = 8;
        break;
    case 'Fighter':
        int = 8;
        break;
    case 'Ranger':
        int = 10;
        break;
    case 'Rogue':
        int = 12;
        break;
    case 'Wizard':
        int = 15;
        break; 
    default:
        int = ''; 
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
        bonus = 1;
        break; 
    default:
        bonus = '';
    }

    const intelligence = int + bonus;

    switch (intelligence) {
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
        <div className='intID'>
            <h2 className='sideStat2' id='sideStatNumber2'>{intelligence}</h2>
            <h2 className='statMod2' id='mod2'>{mod}</h2>
            <h3 className='statTitle2'>Intelligence</h3>
        </div>
    );

}

export default IntStats;