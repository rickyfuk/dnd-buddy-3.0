import React from 'react';
import Counter from '../../components/Hitpoints/hpBard';
import NameBanner from '../../components/NameBanner/nbBard';
import ArmorClass from '../../components/ArmorClass/acBard';
import StatsLeft from '../../components/Stats/Left/AUDIT-Stats/bardStatsLeft';
import StatsRight from '../../components/Stats/Right/AUDIT-Stats/bardStatsRight';
import CharacterImage from '../../components/CharacterImage/audit-image/bardImage';
import Skills from '../../components/Skills/AUDIT-Skills/bardSkills';
import SpellsAndWeapons from '../../components/SpellsAndWeapons/spellsAndWeapons';
import NavBot from '../../components/NavBottom/NavBot';
import NavBlank from '../../components/NavBlank/NavBlank';
import '../css/reset.css';
import '../css/style.css';

function bardCharacterSheet() {
  return (
    <div className='body'>
      <NavBlank/>
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

export default bardCharacterSheet;