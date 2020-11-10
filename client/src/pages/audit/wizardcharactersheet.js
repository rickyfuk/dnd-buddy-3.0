import React from 'react';
import Counter from '../../components/Hitpoints/hpWiz';
import NameBanner from '../../components/NameBanner/nbWiz';
import ArmorClass from '../../components/ArmorClass/acWiz';
import StatsLeft from '../../components/Stats/Left/AUDIT-Stats/wizStatsLeft';
import StatsRight from '../../components/Stats/Right/AUDIT-Stats/wizStatsRight';
import CharacterImage from '../../components/CharacterImage/audit-image/wizImage';
import Skills from '../../components/Skills/skills'
import SpellsAndWeapons from '../../components/SpellsAndWeapons/AUDIT-SpellsAndWeapons/WizardSpells';
import NavBlank from '../../components/NavBlank/NavBlank';
import NavBot from '../../components/NavBottom/NavBot';
import '../css/reset.css';
import '../css/style.css';

function wizardCharacterSheet() {
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

export default wizardCharacterSheet;
