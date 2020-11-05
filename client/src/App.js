import React from 'react';
import Counter from './components/Hitpoints/hp';
import NameBanner from './components/NameBanner/nameBanner';
import ArmorClass from './components/ArmorClass/armorCl';
import StatsLeft from './components/Stats/Left/statsleft';
import StatsRight from './components/Stats/Right/statsright';
import CharacterImage from './components/CharacterImage/charImage';
import Skills from './components/Skills/skills'
import SpellsAndWeapons from './components/SpellsAndWeapons/spellsAndWeapons';
import NavTop from './components/NavTop/NavTop';
import NavBot from './components/NavBottom/NavBot';
// import Dice from './components/Dice/dice';
import './pages/css/reset.css';
import './pages/css/style.css';

function App() {
  return (
    <div className='body'>
      <NavTop />
      <div className='mainContainer'>
        <div className='rowOne'>
          <div className='row'>
            <Counter />
            <NameBanner />
            <ArmorClass />
          </div>
        </div>
        <div className='rowThree'>
          <div className='row'>
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

export default App;
