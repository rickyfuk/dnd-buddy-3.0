import React from 'react';
import Counter from '../../components/Hitpoints/hpCler';
import NameBanner from '../../components/NameBanner/nbCler';
import ArmorClass from '../../components/ArmorClass/acCler';
import StatsLeft from '../../components/Stats/Left/AUDIT-Stats/clericStatsLeft';
import StatsRight from '../../components/Stats/Right/AUDIT-Stats/clericStatsRight';
import CharacterImage from '../../components/CharacterImage/audit-image/clerImage';
import Skills from '../../components/Skills/AUDIT-Skills/clericSkills';
import SpellsAndWeapons from '../../components/SpellsAndWeapons/spellsAndWeapons';
import NavBlank from '../../components/NavBlank/NavBlank';
import NavBot from '../../components/NavBottom/NavBot';
import '../css/reset.css';
import '../css/style.css';

function clericCharacterSheet() {
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

export default clericCharacterSheet;