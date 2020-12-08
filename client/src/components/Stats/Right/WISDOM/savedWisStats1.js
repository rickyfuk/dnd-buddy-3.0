import React from 'react';
import '../rightStatsModal.css'

function WisStats() {
    const charClass = localStorage.getItem('charClass1');
    const charRace = localStorage.getItem('race1');
    let wis = '';
    let bonus = '';
    let mod = '';

    switch (charClass) {
    case 'Bard':
        wis = 12;
        break;
    case 'Cleric':
        wis = 15;
        break;
    case 'Fighter':
        wis = 12;
        break;
    case 'Ranger':
        wis = 14;
        break;
    case 'Rogue':
        wis = 8;
        break;
    case 'Wizard':
        wis = 14;
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

    const wisdom = wis + bonus;

    switch (wisdom) {
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
            <h2 className='sideStat' id='sideStatNumber2'>{wisdom}</h2>
            <h2 className='statMod' id='mod2'>{mod}</h2>
            <h3 className='statTitle'>Wisdom</h3>
        </div>
    );

}

export default WisStats;