import React from 'react';
import Counter from '../../components/Hitpoints/hp';
import DiceRoll4 from '../../components/Dice/dice4Modal';
import DiceRoll6 from '../../components/Dice/dice6Modal';
import DiceRoll8 from '../../components/Dice/dice8Modal';
import DiceRoll10 from '../../components/Dice/dice10Modal';
import DiceRoll12 from '../../components/Dice/dice12Modal';
import DiceRoll20 from '../../components/Dice/dice20Modal';
import useSound from 'use-sound';
import DiceSound from '../../components/Dice/dicesound.mp3';
import StrStats from '../../components/Stats/Left/STRENGTH/str2Stats';
import StrModal from '../../components/Stats/Left/STRENGTH/strModal';
import DexStats from '../../components/Stats/Left/DEXTERITY/dex2Stats';
import DexModal from '../../components/Stats/Left/DEXTERITY/dexModal';
import ConStats from '../../components/Stats/Left/CONSTITUTION/con2Stats';
import ConModal from '../../components/Stats/Left/CONSTITUTION/conModal';
import IntStats from '../../components/Stats/Right/INTELLIGENCE/int2Stats';
import IntModal from '../../components/Stats/Right/INTELLIGENCE/intModal';
import WisStats from '../../components/Stats/Right/WISDOM/wis2Stats';
import WisModal from '../../components/Stats/Right/WISDOM/wisModal';
import ChaStats from '../../components/Stats/Right/CHARISMA/cha2Stats';
import ChaModal from '../../components/Stats/Right/CHARISMA/chaModal';
import SpellsAndWeapons from '../../components/SpellsAndWeapons/spellsAndWeapons';
import NavTop from '../../components/NavTop/NavTop';
import NavBotAlt from '../../components/NavBottom/NavBotMobile';
import '../css/reset.css';
import '../css/style.css';

function Offense() {

    const [play] = useSound(DiceSound);

    const characterClass = localStorage.getItem('Class');
    let left = '';
    let right = '';
    let leftMod = '';
    let rightMod = '';

    switch (characterClass) {
        case 'Bard':
            left = <DexStats />;
            right = <ChaStats />;
            leftMod = <DexModal/>;
            rightMod = <ChaModal/> ;
            break;
        case 'Cleric':
            left = <WisStats /> ;
            right = <ConStats /> ;
            leftMod = <WisModal/>;
            rightMod = <ConModal/>;
            break;
        case 'Fighter':
            left = <StrStats /> ;
            right = <ConStats /> ;
            leftMod = <StrModal/> ;
            rightMod = <ConModal/> ;
            break;
        case 'Ranger':
            left = <DexStats /> ;
            right = <StrStats /> ;
            leftMod = <DexModal/> ;
            rightMod = <StrModal/> ;
            break;
        case 'Rogue':
            left = <DexStats/> ;
            right = <ChaStats/>;
            leftMod = <DexModal/> ;
            rightMod = <ChaModal/> ;
            break;
        case 'Wizard':
            left = <IntStats /> ;
            right = <WisStats /> ;
            leftMod = <IntModal/>;
            rightMod = <WisModal/>;
            break;  
        
    }


  return (
    <div className='body'>
      <NavTop />
      <div className='mainContainer'>
        <div className='rowTwo'>
          <div className='group'>
            <div className='columnOne'>
              <Counter />
              <div className="statBackground2">
                {leftMod}
                <div>
                    {left}
                </div>
              </div>
              <div className="statBackground2">
                {rightMod}
                  <div>
                    {right}
                  </div>
              </div>
            </div>

            <div className='columnOne'>
                <SpellsAndWeapons />
            </div>
            <div className='columnOne'>
            <div className='dice-border' onClick={play}>
                    <p className='diceP'>
                        <DiceRoll4 />
                        <DiceRoll10 />
                    </p>
                    <p>
                        <DiceRoll6 />
                        <DiceRoll12 />
                    </p>
                    <p className='diceP'>

                        <DiceRoll8 />
                        <DiceRoll20 />
                    </p>
                </div>

            </div>
          </div>
        </div>
        

      </div>
      <NavBotAlt />
    </div>
  );
}

export default Offense;