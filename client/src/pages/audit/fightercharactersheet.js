import React from 'react';
<<<<<<< HEAD:client/src/pages/audit/fightercharactersheet.js
import Counter from '../../components/Hitpoints/hpFig';
import NameBanner from '../../components/NameBanner/nbFig';
import ArmorClass from '../../components/ArmorClass/acFig';
import StatsLeft from '../../components/Stats/Left/AUDIT-Stats/figStatsLeft';
import StatsRight from '../../components/Stats/Right/AUDIT-Stats/figStatsRight';
import CharacterImage from '../../components/CharacterImage/figImage';
import Skills from '../../components/Skills/skills'
import SpellsAndWeapons from '../../components/SpellsAndWeapons/spellsAndWeapons';
import NavBlank from '../../components/NavBlank/NavBlank';
import NavBot from '../../components/NavBottom/NavBot';
import '../css/reset.css';
import '../css/style.css';
=======
import Counter from '../components/Hitpoints/hpFig';
import NameBanner from '../components/NameBanner/nbFig';
import ArmorClass from '../components/ArmorClass/acFig';
import StatsLeft from '../components/Stats/Left/statsleft';
import StatsRight from '../components/Stats/Right/statsright';
import CharacterImage from '../components/CharacterImage/audit-image/figImage';
import Skills from '../components/Skills/skills'
import SpellsAndWeapons from '../components/SpellsAndWeapons/spellsAndWeapons';
import NavBlank from '../components/NavBlank/NavBlank';
import NavBot from '../components/NavBottom/NavBot';
// import Dice from '../components/Dice/dice';
import './css/reset.css';
import './css/style.css';
>>>>>>> 3969a95655a0d6c1474824b74bfc46bc469318f1:client/src/pages/fightercharactersheet.js

function fighterCharacterSheet() {
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

export default fighterCharacterSheet;