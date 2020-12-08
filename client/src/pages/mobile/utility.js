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
import IntStats from '../../components/Stats/Right/INTELLIGENCE/int2Stats';
import IntModal from '../../components/Stats/Right/INTELLIGENCE/intModal';
import WisStats from '../../components/Stats/Right/WISDOM/wis2Stats';
import WisModal from '../../components/Stats/Right/WISDOM/wisModal';
import ChaStats from '../../components/Stats/Right/CHARISMA/cha2Stats';
import ChaModal from '../../components/Stats/Right/CHARISMA/chaModal';
import Skills from '../../components/Skills/skills';
import NavTop from '../../components/NavTop/NavTop';
import NavBotAlt from '../../components/NavBottom/NavBotMobile';
import '../css/reset.css';
import '../css/style.css';

function Utility() {

    const [play] = useSound(DiceSound);

  return (
    <div className='body'>
      <NavTop />
      <div className='mainContainer'>
        <div className='rowTwo'>
          <div className='group'>
            <div className='columnOne'>
                <Counter />
                <div className="statBackground2">
                    <ChaModal />
                    <div>
                        <ChaStats />
                    </div>
                </div>
            </div>

            <div className='columnOne'>
                <div className="statBackground2">
                    <IntModal />
                    <div>
                        <IntStats />
                    </div>
                </div>
                <div className="statBackground2">
                    <WisModal />
                    <div>
                        <WisStats />
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

export default Utility;