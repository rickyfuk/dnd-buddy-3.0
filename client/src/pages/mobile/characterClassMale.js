import React from 'react';
import RaceModal from '../../components/CharacterCreation/ModalRace/RaceMale/app';
import NavBot from '../../components/NavBottom/NavBot';
import NavTop from '../../components/NavTop/NavTop';
import MaleDwarfBard from '../../components/CharacterImage/images-male/dwarf-bard-1.png'
import MaleElfCleric from '../../components/CharacterImage/images-male/elf-cleric-1.png'
import MaleHumFighter from '../../components/CharacterImage/images-male/human-fighter-1.png'
import MaleTiefRanger from '../../components/CharacterImage/images-male/tiefling-ranger-1.png'
import MaleHumRogue from '../../components/CharacterImage/images-male/human-rogue-1.png'
import MaleTiefWizard from '../../components/CharacterImage/images-male/tiefling-mage-1.png'
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
                <img className='charLogoClass' src={MaleDwarfBard}/>
                <img className='charLogoClass' src={MaleElfCleric}/>
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
                <img className='charLogoClass' src={MaleHumFighter}/>
                <img className='charLogoClass' src={MaleTiefRanger}/>
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
                <img className='charLogoClass' src={MaleHumRogue}/>
                <img className='charLogoClass' src={MaleTiefWizard}/>
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