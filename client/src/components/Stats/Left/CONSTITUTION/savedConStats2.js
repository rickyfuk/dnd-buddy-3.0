import React from 'react';
import '../leftStatsModal.css'

function ConStats() {
    const charClass = localStorage.getItem('charClass2');
    const charRace = localStorage.getItem('race2');
    let con = '';
    let bonus = '';
    let mod = '';

    switch (charClass) {
    case 'Bard':
        con = 13;
        break;
    case 'Cleric':
        con = 14;
        break;
    case 'Fighter':
        con = 14;
        break;
    case 'Ranger':
        con = 13;
        break;
    case 'Rogue':
        con = 14;
        break;
    case 'Wizard':
        con = 13;
        break;  
    }

    switch (charRace) {
    case 'Dwarf':
        bonus = 2;
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

    const constitution = con + bonus;

    switch (constitution) {
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
            <h2 className='sideStat' id='sideStatNumber2'>{constitution}</h2>
            <h2 className='statMod' id='mod2'>{mod}</h2>
            <h3 className='statTitle'>Constitution</h3>
        </div>
    );

}

export default ConStats;