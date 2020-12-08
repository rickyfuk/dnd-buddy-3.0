import React from 'react';
import RaceModal from '../../components/CharacterCreation/ModalRace/RaceMale/app';
import NavBot from '../../components/NavBottom/NavBot';
import NavTop from '../../components/NavTop/NavTop';
import FDwarfBard from '../../components/CharacterImage/images-female/dwarf-bard-1.png'
import FElfCleric from '../../components/CharacterImage/images-female/elf-cleric-1.png'
import FHumFighter from '../../components/CharacterImage/images-female/human-fighter-1.png'
import FTiefRanger from '../../components/CharacterImage/images-female/tiefling-ranger-1.png'
import FHumRogue from '../../components/CharacterImage/images-female/human-rogue-1.png'
import FElfWizard from '../../components/CharacterImage/images-female/elf-mage-1.png'
import '../css/reset.css';
import '../css/style.css';

function CharacterMClass () {

    function bard() {
        localStorage.setItem('Class', 'Bard');   
    } 
    
    function cleric() {
        localStorage.setItem('Class', 'Cleric');
    }
    
    function fighter() {
        localStorage.setItem('Class', 'Fighter');   
    } 
    
    function ranger() {
        localStorage.setItem('Class', 'Ranger');
    }

    function rogue() {
        localStorage.setItem('Class', 'Rogue');   
    } 
    
    function wizard() {
        localStorage.setItem('Class', 'Wizard');
    }

  return (
    <div className='body'>
      <NavTop/>
      <div className='mainContainer'>
        <div className='group'>
            <RaceModal />
            <div className='classMobileDisplay group'>
              <div className='columnOne'>
                <img className='charLogoClass' src={FDwarfBard}/>
                <img className='charLogoClass' src={FElfCleric}/>
              </div>
              <div className='columnTwo'>
                <p>
                  <button id='selectRaceLeft' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={bard}>
                    <a href='/namecharacter'>
                      Bard
                    </a>
                  </button>
                  <button id='selectRaceRight' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={cleric}>
                    <a href='/namecharacter'>
                      Cleric
                    </a>
                  </button>
                </p>
              </div>
              <div className='columnOne'>
                <img className='charLogoClass' src={FHumFighter}/>
                <img className='charLogoClass' src={FTiefRanger}/>
              </div>
              <div className='columnTwo'>
                <p>
                  <button id='selectRaceLeft' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={fighter}>
                    <a href='/namecharacter'>
                      Fighter
                    </a>
                  </button>
                  <button id='selectRaceRight' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={ranger}>
                    <a href='/namecharacter'>
                      Ranger
                    </a>
                  </button>
                </p>
              </div>
              <div className='columnOne'>
                <img className='charLogoClass' src={FHumRogue}/>
                <img className='charLogoClass' src={FElfWizard}/>
              </div>
              <div className='columnTwo'>
                <p>
                  <button id='selectRaceLeftEnd' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={rogue}>
                    <a href='/namecharacter'>
                      Rogue
                    </a>
                  </button>
                  <button id='selectRaceRightEnd' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={wizard}>
                    <a href='/namecharacter'>
                      Wizard
                    </a>
                  </button>
                </p>
              </div>
            </div>
        </div>
      </div>
      <NavBot />
    </div>
  );
}

export default CharacterMClass;