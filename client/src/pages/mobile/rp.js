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
import Skills from '../../components/Skills/skills';
import NavTop from '../../components/NavTop/NavTop';
import NavBotAlt from '../../components/NavBottom/NavBotMobile';
import '../css/reset.css';
import '../css/style.css';

function Offense() {

    const [play] = useSound(DiceSound);

  return (
    <div className='body'>
      <NavTop />
      <div className='mainContainer'>
        <div className='rowTwo'>
          <div className='group'>
            <div className='columnOne'>
              <Counter />
            </div>
            <div className='columnOne'>
              <div className="statBackground2">
                <StrModal />
                <div>
                    <StrStats />
                </div>
              </div>
              <div className="statBackground2">
                  <DexModal />
                  <div>
                      <DexStats />
                  </div>
              </div>
            </div>

            <div className='columnOne'>
                <Skills />
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