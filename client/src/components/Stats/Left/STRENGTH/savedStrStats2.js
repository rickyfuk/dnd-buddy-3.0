import React from 'react';
import '../leftStatsModal.css'

function StrStats() {
    const charClass = localStorage.getItem('charClass2');
    const charRace = localStorage.getItem('race2');
    let str = '';
    let bonus = '';
    let mod = '';

    switch (charClass) {
    case 'Bard':
        str = 10;
        break;
    case 'Cleric':
        str = 12;
        break;
    case 'Fighter':
        str = 15;
        break;
    case 'Ranger':
        str = 12;
        break;
    case 'Rogue':
        str = 10;
        break;
    case 'Wizard':
        str = 8;
        break;  
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
        bonus = 0;
        break; 
    }

    const strength = str + bonus;

    switch (strength) {
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
    }
    
    return(
        <div>
            <h2 className='sideStat' id='sideStatNumber2'>{strength}</h2>
            <h2 className='statMod' id='mod2'>{mod}</h2>
            <h3 className='statTitle'>Strength</h3>
        </div>
    );

}

export default StrStats;