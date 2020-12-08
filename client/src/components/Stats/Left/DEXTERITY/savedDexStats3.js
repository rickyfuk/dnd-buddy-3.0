import React from 'react';
import '../leftStatsModal.css'

function DexStats() {
    const charClass = localStorage.getItem('charClass3');
    const charRace = localStorage.getItem('race3');
    let dex = '';
    let bonus = '';
    let mod = '';

    switch (charClass) {
    case 'Bard':
        dex = 14;
        break;
    case 'Cleric':
        dex = 10;
        break;
    case 'Fighter':
        dex = 13;
        break;
    case 'Ranger':
        dex = 15;
        break;
    case 'Rogue':
        dex = 15;
        break;
    case 'Wizard':
        dex = 10;
        break;  
    }

    switch (charRace) {
    case 'Dwarf':
        bonus = 0;
        break;
    case 'Elf':
        bonus = 2;
        break;
    case 'Human':
        bonus = 1;
        break;
    case 'Tiefling':
        bonus = 0;
        break; 
    }

    const dexterity = dex + bonus;

    switch (dexterity) {
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
            <h2 className='sideStat' id='sideStatNumber2'>{dexterity}</h2>
            <h2 className='statMod' id='mod2'>{mod}</h2>
            <h3 className='statTitle'>Dexterity</h3>
        </div>
    );

}

export default DexStats;