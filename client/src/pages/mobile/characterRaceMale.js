import React from 'react';
import RaceModal from '../../components/CharacterCreation/ModalRace/RaceMale/app';
import NavBot from '../../components/NavBottom/NavBot';
import NavTop from '../../components/NavTop/NavTop';
import MaleDwarfFighter from '../../components/CharacterImage/images-male/dwarf-fighter-1.png'
import MaleElfFighter from '../../components/CharacterImage/images-male/elf-fighter-1.png'
import MaleHumFighter from '../../components/CharacterImage/images-male/human-fighter-1.png'
import MaleTiefFighter from '../../components/CharacterImage/images-male/tiefling-fighter-1.png'
import '../css/reset.css';
import '../css/style.css';

function CharacterM () {

  function dwarf() {
    localStorage.setItem('Race', 'Dwarf');   
  } 

  function elf() {
    localStorage.setItem('Race', 'Elf');
  }

  function human() {
    localStorage.setItem('Race', 'Human');   
  } 

  function tiefling() {
    localStorage.setItem('Race', 'Tiefling');
  }

  return (
    <div className='body'>
      <NavTop/>
      <div className='mainContainer'>
        <div className='group'>
            <RaceModal />
            <div className='raceMobileDisplay group'>
              <div className='columnOne'>
                <img className='charLogoRace' src={MaleDwarfFighter}/>
                <img className='charLogoRace' src={MaleElfFighter}/>
              </div>
              <div className='columnTwo'>
                <p>
                  <button id='selectRaceLeft' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={dwarf}>
                    <a href='/maleclass'>
                      Dwarf
                    </a>
                  </button>
                  <button id='selectRaceRight' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={elf}>
                    <a href='/maleclass'>
                      Elf
                    </a>
                  </button>
                </p>
              </div>
              <div className='columnOne'>
                <img className='charLogoRace' src={MaleHumFighter}/>
                <img className='charLogoRace' src={MaleTiefFighter}/>
              </div>
              <div className='columnTwo'>
                <p>
                  <button id='selectRaceLeft' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={human}>
                    <a href='/maleclass'>
                      Human
                    </a>
                  </button>
                  <button id='selectRaceRight' className="savedBtn btn btn-lg btn-dark revealButton" type="button" onClick={tiefling}>
                    <a href='/maleclass'>
                      Tiefling
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

export default CharacterM;