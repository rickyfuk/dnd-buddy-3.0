import React from 'react';
<<<<<<< HEAD:client/src/pages/audit/roguecharactersheet.js
import Counter from '../../components/Hitpoints/hpRog';
import NameBanner from '../../components/NameBanner/nbRog';
import ArmorClass from '../../components/ArmorClass/acRog';
import StatsLeft from '../../components/Stats/Left/AUDIT-Stats/wizStatsLeft';
import StatsRight from '../../components/Stats/Right/AUDIT-Stats/wizStatsRight';
import CharacterImage from '../../components/CharacterImage/rogImage';
import Skills from '../../components/Skills/skills'
import SpellsAndWeapons from '../../components/SpellsAndWeapons/spellsAndWeapons';
import NavBlank from '../../components/NavBlank/NavBlank';
import NavBot from '../../components/NavBottom/NavBot';
=======
import Counter from '../components/Hitpoints/hpRog';
import NameBanner from '../components/NameBanner/nbRog';
import ArmorClass from '../components/ArmorClass/acRog';
import StatsLeft from '../components/Stats/Left/statsleft';
import StatsRight from '../components/Stats/Right/statsright';
import CharacterImage from '../components/CharacterImage/audit-image/rogImage';
import Skills from '../components/Skills/skills'
import SpellsAndWeapons from '../components/SpellsAndWeapons/spellsAndWeapons';
import NavBlank from '../components/NavBlank/NavBlank';
import NavBot from '../components/NavBottom/NavBot';
>>>>>>> 3969a95655a0d6c1474824b74bfc46bc469318f1:client/src/pages/roguecharactersheet.js
// import Dice from '../components/Dice/dice';
import '../css/reset.css';
import '../css/style.css';

function rogueCharacterSheet() {
  return (
    <div className='body'>
      <NavBlank />
      <div className='mainContainer'>
        <div className='rowOne'>
          <div className='group'>
            <Counter />
            <NameBanner />
            <ArmorClass />
          </div>
        </div>
        <div className='rowThree'>
          <div className='group'>
            <div className='columnOne'>
              <StatsLeft />
            </div>
            <div className='columnTwo'>
              <CharacterImage />
              <Skills />
            </div>
            <div className='columnThree'>
              <SpellsAndWeapons />
            </div>
            <div className='columnFour'>
              <StatsRight />
            </div>
          </div>
        </div>
      </div>
      <NavBot />
    </div>
  );
}

export default rogueCharacterSheet;